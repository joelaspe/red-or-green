import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

import cors from 'cors';

import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

import format from 'pg-format';

app.use(cors());

app.use(express.json());

/********* GET ALL **********/
app.get('/restaurant', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM restaurant ORDER BY rating DESC');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});


/********* GET ONE ************/
app.get('/restaurant/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('SELECT * FROM restaurant WHERE id = $1 ORDER BY id ASC', [id]);
        if(response.rowCount < 1) {
            res.status(404).send('ID not found');
        } else {
            res.status(200).json(response.rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

/******* CREATE ONE **********/
app.post('/restaurant', async (req, res) => {
    try {
        const { name, red_or_green, address, price_avg, rating, phone } = req.body
        const response = await pool.query('INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, red_or_green, address, price_avg, rating, phone]);        
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

/******* DELETE ONE **************/
app.delete('/restaurant/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('DELETE FROM restaurant WHERE id = $1 RETURNING *', [id]);
        if(response.rowCount === 0) {
            res.status(404).send('ID Not Found');
        } else {
            res.status(200).json(response.rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

/******** UPDATE ONE ***********/
app.put('/restaurant/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        let sets = [];
        for (let key in body) {
            sets.push(format('%I = %L', key, body[key]));
        }
        let setStrings = sets.join(',');
        const SQLString = format('UPDATE restaurant SET %s WHERE id = %L RETURNING *', setStrings, id);
        const response = await pool.query(SQLString);
        if(response.rows.length < 1) {
            res.status(404).send('ID Not Found');
        } else {
            res.status(200).json(response.rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } 
}); 

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})





