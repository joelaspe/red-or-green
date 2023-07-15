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


//TODO: add data validation for all routes
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

app.get('/users', async (req, res) => {
    try {
        const response = await pool.query('SELECT id, email FROM users ORDER BY id ASC');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

/* No GET ALL route for ratings, but can GET ALL route for a specific restaurant or GET ALL ratings by a specific user so /ratings/restaurant/:id or /ratings/users/:id */

app.get('/ratings/restaurant/:id', async (req, res) => {
    const { id } = req.params;
    try {
        
        const response = await pool.query('SELECT ratings.id as rating_id, ratings.user_id, users.email, ratings.restaurant_id, ratings.red_or_green, ratings.rating, ratings.price, ratings.comment, restaurant.id, restaurant.name FROM ratings JOIN restaurant ON ratings.restaurant_id = restaurant.id JOIN users ON ratings.user_id = users.id WHERE restaurant.id = $1 ORDER BY ratings.id ASC', [id]);
        if(response.rowCount < 1) {
            res.status(404).send('ID not found');
        } else {
            res.status(200).json(response.rows);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/ratings/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('SELECT ratings.id as rating_id, ratings.user_id, users.email, ratings.restaurant_id, ratings.red_or_green, ratings.rating, ratings.price, ratings.comment, restaurant.id, restaurant.name FROM ratings JOIN restaurant ON ratings.restaurant_id = restaurant.id JOIN users ON users.id = ratings.user_id WHERE users.id = $1 ORDER BY ratings.id ASC', [id]);
        if(response.rowCount < 1) {
            res.status(404).send('ID not found');
        } else {
            res.status(200).json(response.rows);
        }
    } catch (error) {
        console.error(error);
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

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('SELECT id, email FROM users WHERE id = $1 ORDER BY id ASC', [id]);
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

app.get('/ratings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('SELECT ratings.id, ratings.user_id, users.email, ratings.restaurant_id, ratings.red_or_green, ratings.rating, ratings.price, ratings.comment, restaurant.id, restaurant.name FROM ratings JOIN restaurant ON ratings.restaurant_id = restaurant.id JOIN users ON users.id = ratings.user_id WHERE ratings.id = $1 ORDER BY ratings.id ASC', [id]);
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

app.post('/users', async (req, res) => {
    try {
        const { email, password } = req.body
        const response = await pool.query('INSERT INTO users (email, password) VALUES ($1, crypt($2, gen_salt(\'bf\'))) RETURNING (email, id)', [email, password]);        
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/ratings', async (req, res) => {
    try {
        const { red_or_green, price, rating, comment, user_id, restaurant_id } = req.body
        const response = await pool.query('INSERT INTO ratings (red_or_green, price, rating, comment, user_id, restaurant_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [red_or_green, price, rating, comment, user_id, restaurant_id ]);        
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

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('DELETE FROM users WHERE id = $1 RETURNING (email, id)', [id]);
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

app.delete('/ratings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('DELETE FROM ratings WHERE id = $1 RETURNING *', [id]);
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

//TODO: add PUT route for users to allow changing passwords and email, but not required for MVP right now



