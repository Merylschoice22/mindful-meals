drop table if exists posts;
drop table if exists users;
drop type if exists status;

CREATE TYPE status AS ENUM ('available', 'reserved', ' collected');


create table users (
	id			SERIAL primary key,
	username	VARCHAR (15) not null,
	email		VARCHAR (50) not null,
	password	VARCHAR (10) not null
);

CREATE TABLE posts (
    id          SERIAL PRIMARY KEY,
    users_id  	INT REFERENCES users(id),
    post_date   DATE,
    title       VARCHAR (50) NOT NULL,
    loc_barrio  VARCHAR (30) NOT NULL,
    loc_street  VARCHAR (200) NOT NULL,
    phone       VARCHAR (15) NOT NULL,
    description VARCHAR (300) NOT NULL,
    status      status default 'available'
);

insert into users (username, email, password) values ('cmonlg', 'cmonlg@gmail.com', 'coffee123');
insert into users (username, email, password) values ('moonia', 'enya.munteanu@gmail.com', 'frida123');
insert into users (username, email, password) values ('merylschoice22', 'kekrieg.digital@gmail.com', 'sigamiga');

INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (1, 'Pizza', 'Gracia', 'Carrer de Rabassa', '623 479 840', 'I have a leftover cheese pizza from a party. Enough for two people', default);
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (2, 'Carrot cake', 'Sant Andreu de Palomar', 'Carrer Malats', '623 474 908', 'I would like to give away a vegan carrot cake that I baked this morning. Enough for four people', default);
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (3, 'Cupcakes', 'Carmel', 'Carrer de Ramon Rocafull', '623 459 004', 'I would like to give away some blueberry muffins. There are about 20 waiting to be shared', default);
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (1, 'Chickpea Curry', 'Sant Marti', 'Sant Marti', '637 908 625', 'I would like to give away some blueberry muffins. There are about 20 waiting to be shared', default);
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (2, 'Primavera Pasta Salad', 'Eixample', 'Arago con Girona', '637 759 903', 'I would like to give away a freshly made salad. Enough for two servings', default);
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (3, 'Leftover lasagna 3 pieces', 'Born', 'next to Arc de Triomf', '692 880 548', 'I made lasagna and have 3 pieces leftover that I will not be able to finish. It is with meat, onions, and zucchini and bechamel cheese', default );
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (1, 'AMAZING vegetable pasta', 'Eixample Dreta', 'Arago, con Bailen', '655 734 400', 'Pasta with mixed vegetables and herbs. Bring your own tupperware container to put it in please!', default  );
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (2, 'Grilled Salmon and mashed potatoes', 'Sant Antoni', 'Compte Urgell & Floridablanca', '663 121 2198', 'I have half of a grilled salmon piece and some mashed potatoes if anyone wants it', default );
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (3, 'Extra chips and some drinks', 'Barceloneta', 'Next to Salamanca', '623 374 7444', 'We had a party and there are leftover snacks. Everything has been opened except one bag of nuts. It is a few bags chips, some Coke, Coke Zero, and a Fanta Limon.', 'reserved');
INSERT INTO posts (users_id, title, loc_barrio, loc_street, phone, description, status) VALUES (1, 'Vegetables', 'Eixample', 'Villaroel / Valencia', '646 885 5215', 'Extra vegetables from the fridge that I will not be able to finish before they expire. 2 tomatoes, 1 onion, 4 potatoes, and half a green pepper', 'reserved');


select * from users u;
select * from posts p;
