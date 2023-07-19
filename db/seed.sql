\c red_or_green;
INSERT INTO users (email, password) VALUES ('albertalonzo@gmail.com', crypt('albertalonzopassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('andresrodriguez@gmail.com', crypt('andresrodriguespassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('ericyanez@gmail.com', crypt('ericyanezpassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('tomassaldana@gmail.com', crypt('tomassaldanapassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('arturocastaneda@gmail.com', crypt('aarturocastanedapassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('xabiermarques@gmail.com', crypt('xabiermarquespassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('juanalonso@gmail.com', crypt('juanalonsopassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('vicenteserrano@gmail.com', crypt('vicenteserranopassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('francisoalcaide@gmail.com', crypt('franciscoalcaidepassword', gen_salt('bf')));
INSERT INTO users (email, password) VALUES ('ikergimenez@gmail.com', crypt('ikergimenezpassword', gen_salt('bf')));
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Sadies', 'Green', '1401 San Mateo Ave, Albuquerque, NM', 10.50, 8.8, 5052312234);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('El Pinto', 'Red', '123 Bosque Ave, Albuquerque, NM', 23.20, 9.8, 5059239931);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Chesters', 'Green', '112 Central Ave, Albuquerque, NM', 21.23, 5.6, 5059983432);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Twisters', 'Christmas', '456 Louisiana Ave', 9.88, 6.2, 5058874234);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Albertos', 'Christmas', '8844 1st St, Santa Fe, NM', 13.45, 4.3, 5059873244);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Hombertos', 'Christmas', '9992 23rd St Albuqerque, NM', 12.87, 2.1, 5059987773);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Filibertos', 'Red', '1234 Createo Rd, Soccorro, NM', 9.88, 4.4, 505998765);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Thumbalinas Family Restaurant', 'Green', '13 W Highway 25, Socorro, NM', 12.23, 5.0, 5059987674);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Miguels Restuarant and Cantina', 'Red', '163 W San Mateo Blvd, Albuquerque, NM', 13.67, 8.7, 5059980976);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Blue Owl Cafe', 'Green', '16 N Pedro Blvd, Albuquerque, NM', 14.10, 8.6, 5059233321);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Sai Tong New Mexican and Thai', 'Christmas', '16 N Louisiana Ave, Albuquerque, NM', 10.22, 7.8, 5059834443);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Great American Cafe', 'Red', '16 N. 34t St, Albuquerque, NM', 11.75, 8.8, 5052313345);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Sandia Casino Buffet', 'Red', '1 Sandia Peak Rd, Albuquerque, NM', 18.20, 6.2, 5057654487);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Chilis', 'Red', '21 W 5th St, Los Lunas, NM', 11.10, 3.1, 5059876653);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('Los Pollos Hermanos', 'Red', '33 Do Not Eat Here St, Albuquerque, NM', 25.10, 1.2, 5059223331);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) VALUES ('La Guelaguetza', 'Christmas', '816 Old Coors Dr SW, Albuquerque, NM', 12.10, 9.8, 5055582875);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) 
VALUES ('Bistro 505', 'Red', '3100 Central SE, Albuquerque, NM', 17.75, 8.2, 5052342345);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) 
VALUES ('Sanchos Taco Shack', 'Green', '5200 Wyoming NST, Ste. A, Albuquerque, NM', 15.81, 4.4, 5054433499);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) 
VALUES ('Mamas Cucina', 'Red', '2519 Montgomery Blvd. NE, Albuquerque, NM', 19.82, 9.9, 5056053432);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) 
VALUES ('El Toro Rojo', 'Green', '3110 N 3rd St. SW, Unit C, Albuquerque, NM', 22.41, 2.5, 5052964555);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) 
VALUES ('Café Madrid', 'Christmas', '7000 Lomas NW, Unit D, Albuquerque, NM', 24.22, 9.5, 5058822211);
INSERT INTO restaurant (name, red_or_green, address, price_avg, rating, phone) 
VALUES ('Pantry Restaurant', 'Red', '1115 Hickox St, Santa Fe, NM', 23.2, 8.1, 5059837060);
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (1, 1, 'Green', 7, 14, 'Pretty good green chili here, could have been better service though. The chili is a bit spicy for my taste but not the end of the world');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (1, 3, 'Green', 8, 12, 'Good value for what you get here. I prefer a bit less spicy, but it was still flavorful. Be sure to ask for sopapillas at the end!');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (1, 5, 'Christmas', 10, 23, 'High price but delicious! Margaritas are off the roof!');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (2, 2, 'Red', 3, 16, 'Overpriced garbage, would never eat here again.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (2, 4, 'Red', 5, 19, 'Overpriced garbage. Had to ask for red chili instead of green and the server ended up putting both! Had to send back again because I hate green.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (2, 6, 'Red', 9, 13, 'My favorite restaurant in ABQ for sure, but the servers are a bit rude. Always get a margarita here so it makes me feel better.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (3, 4, 'Christamas', 8, 12, 'Best comfort food for sure, I love how late they stay open. Perfect for that midnight munchies craving. Get the burrito plate and you will not be disappointed.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (3, 6, 'Christmas', 7, 18, 'Just order cheese enchilada platter with christmas and you will be a happy person.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (3, 7, 'Christmas', 5, 12, 'Ok green sauce, but mixed with red it makes it much better. Try the chili rellano.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (4, 5, 'Green', 1, 20, 'Food is ok, but worst service I ever had to deal with! We waited for over 45 minutes to get a table, and the hostess kept saying a table would be available in 10 minutes but we kept waiting. Good thing they had a bar available during the wait.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (4, 7, 'Green', 5, 14, 'Good margaritas, and 5 beers on tap. Red chili was meh, but the green has a nice kick, so I ordered extra and put it on the rice and beans that came with my platter.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (4, 9, 'Christmas', 3, 12, 'Not bad for the price, but you can do much better in NM for genuine NM food.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (5, 8, 'Red', 9, 19, 'Best New Mexican food for sure! I always go here after flying into Albuquerque for business trips. The owner Sadie is awesome and always has a smile when you walk in. Do not miss!');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (5, 10, 'Red', 5, 15, 'Ok red chili, good when you are in a hurry. Otherwise could skip for something better in town.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (5, 12, 'Christmas', 6, 15, 'Ok food, the christmas taco platter is decent. Be sure to order a pineapple horchata to go with the meal.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (6, 11, 'Christmas', 5, 12, 'Ok fast food, but would pass if bringing in family to show off decent New Mexican.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (6, 13, 'Christmas', 9, 14, 'Awesome value for what you pay for. The portion sizes are huge!');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (6, 15, 'Christmas', 6, 8, 'Very cheap, but good food. I always get a carnitas burrito smothered in red and green sauce.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (7, 12, 'Red', 3, 7, 'I got sick after eating here last month, so I will never eat here again. They do make decent margaritas though...');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (7, 14, 'Green', 5, 9, 'Just another generic new mexican food place that you can pass if you are looking for quality.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (7, 16, 'Green', 7, 18, 'My go to place when I am hungry for enchiladas. The green sauce is super spicy and is a perfect complement to the cheese that is melted all over the plate.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (8, 13, 'Green', 8, 15, 'Great green chili here, nice kick to it. I asked for some red on the side and added it to my rice which hit the spot perfectly. Would go back here again for sure.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (8, 15, 'Christmas', 6, 13, 'I eat here for lunch occasionally, but only if I am in a hurry.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (8, 17, 'Red', 7, 17, 'A little pricer than the other places in my local neighborhood, but the ambiance is nice here, and is family friendly. (They have a playground in the back for the kids) Definetly check it out');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (9, 14, 'Red', 4, 12, 'I have had better for sure. Be sure to bring the tums as you might get indigestion from the poor quality ingredients used in the food here.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (9, 16, 'Red', 0, 9, 'Worse than dog food, actually I dont think I would even give my dog food from this place.');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (9, 18, 'Red', 10, 15, 'Really the only place you should consider eating at in ABQ. Everything else is just garbage');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (10, 17, 'Green', 7, 12, 'Great green chili, it is the hottest I have ever had for sure, I spent the next hour sweating profusely after finishing my meal!');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (10, 19, 'Christmas', 8, 15, 'I brought my mother here for mothers day, and we were not disappointed. They gave us chips and salsa before the meal, and free sopapillas with honey. The banana cake as a dessert was a unique and pleasant surprise! Would come here again for sure');
INSERT INTO ratings (user_id, restaurant_id, red_or_green, rating, price, comment) VALUES (10, 20, 'Green', 4, 14, 'Ok food here, but not the best.');
