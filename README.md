![red-or-green-image](https://github.com/joelaspe/red-or-green/blob/main/public/images/red-or-green-readme-splash.jpeg)
# red-or-green
Red or Green? -- That is the state question of New Mexico, meaning do you want red or green chili (or christmas, meaning mixed) on your plate of delicious New Mexican food. This app will provide a way for lovers of New Mexico chili to rate their favorite New Mexico restaurants and keep track of them. 

# Building the full-stack application
 Install [nodeJS](https://nodejs.org) and [Node Package Manager (NPM)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) onto you machine
- Fork and clone this repository onto your local machine `git clone <repository_url>`
- Install postgreSQL database, and create a database called red_or_green. 
- Run `psql -d red_or_green -f ./db/migration.sql`
- Run `psql -d red_or_green -f ./db/seed.sql` to seed the database
- Enter the psql cli as postgres or a superuser `psql -d red_or_green`
- Ensure the data was migrated to the database `SELECT * FROM restaurant;` `SELECT * FROM ratings WHERE id = 1;` `SELECT * FROM users WHERE id = 1;`
- Create a user in postgres 
  - `CREATE USER red_or_green_api PASSWORD '<password>';`
- Grant priveleges to the new user 
  - `GRANT SELECT, INSERT, UPDATE, DELETE on restaurant, ratings, users TO red_or_green_api;`
  - `GRANT USAGE on ratings_id_seq, restaurant_id_seq, users_id_seq TO red_or_green_api;`
- Install NPM dependencies `npm install`
- Rename .env.template to .env and add the port number and a valid connection string 
  - `PORT=3000`
  - `DATABASE_URL=postgres://red_or_green_api:<password>@localhost:5432/red_or_green`
\i 

- Run the server `npm run start`
## Deploying to Render
- Ensure the project is pushed to your Github account. 
- Create a [Render](https://www.render.com) account
- From the dashboard, create a new PostgreSQL instance. Copy both the External Database URL and the PSQL Command
- From the dashboard, create a new Web Service. Connect your Github repository to the new Render Web Service. Set build command `npm install && npm run build`, start command `npm start` Make sure to enter an environment variable with SSL flag set at the end 
  - key: `DATABASE_URL` Value: `<copied external database URL>?ssl=true` 
- Back on your local machine terminal, go to the db folder `cd db` and copy the PSQL command from Render PostgreSQL.
 You should now be connected to the remote database, and see the database name on the PSQL terminal. `firearm_checks
=>`
- Migrate and seed the database (could take a while)
  - `\i migration.sql`
  - `\i seed.sql`
  - Test the seeding: `SELECT * FROM restaurant;`
- Test the deployment worked, navigate to the homepage provided by Render.

# Questions / Feedback / Improvements

Email me at joe.laspe@gmail.com

