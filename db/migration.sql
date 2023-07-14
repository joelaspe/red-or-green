\c red_or_green;
CREATE EXTENSION pgcrypto;
DROP TABLE IF EXISTS restaurant;
CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  red_or_green varchar(10),
  address TEXT,
  price_avg numeric(5, 2),
  rating numeric(3, 1),
  phone bigint,
  CONSTRAINT con1 CHECK (char_length(name) <= 30 AND char_length(address) <= 50 AND price_avg <= 1000 AND rating <= 10 and phone <= 9999999999)
 );
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
DROP TABLE IF EXISTS ratings;
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  user_id int REFERENCES users(id) ON DELETE CASCADE,
  restaurant_id int REFERENCES restaurant(id) ON DELETE CASCADE,
  red_or_green varchar(10),
  rating numeric(3, 1),
  price numeric(5,2),
  comment text,
  CONSTRAINT con2 CHECK (rating >= 0 AND rating <=10 AND price >= 0 AND price < 1000)
);

