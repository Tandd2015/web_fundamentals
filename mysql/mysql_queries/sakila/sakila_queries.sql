--1.
SELECT city.city_id, city.city, customer.first_name, customer.last_name, customer.email,  address.address FROM customer
LEFT JOIN address ON customer.address_id= address.address_id LEFT JOIN city ON address.city_id= city.city_id
WHERE city.city_id= 312;

--2.
SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name
AS 'genre' FROM film JOIN film_category ON film.film_id= film_category.film_id JOIN category
ON category.category_id= film_category.category_id WHERE category.name= 'Comedy';

--3.
SELECT  actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) 
AS actor_name, film.film_id, film.title, film.description, film.release_year 
FROM film JOIN film_actor ON film.film_id= film_actor.film_id
JOIN actor ON actor.actor_id= film_actor.actor_id WHERE actor.actor_id= 5;

--4.
SELECT store.store_id, city.city_id, customer.first_name, customer.last_name, customer.email, address.address 
FROM store JOIN customer ON customer.store_id= store.store_id JOIN address ON customer.address_id=
address.address_id JOIN city ON address.city_id= city.city_id WHERE store.store_id= 1 AND city.city_id IN (1,42,312,459);

--5.
SELECT film.title, film.description, film.release_year, film.rating, film.special_features FROM film
JOIN film_actor ON film.film_id= film_actor.film_id JOIN actor ON actor.actor_id=  film_actor.actor_id
WHERE film.rating= 'G'  AND film.special_features LIKE '%Behind the scenes%' AND actor.actor_id= 15;

--6.
SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name
FROM film JOIN film_actor ON film.film_id= film_actor.film_id JOIN actor ON actor.actor_id= film_actor.actor_id
WHERE film.film_id= 369;

--7.
SELECT film.film_id, film.title, film.description, film.release_year, film.special_features, category.name AS 'genre', film.rental_rate
FROM film JOIN film_category ON film.film_id= film_category.film_id JOIN category ON category.category_id= film_category.category_id 
WHERE category.name= 'Drama' AND film.rental_rate= 2.99;

--8.
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name)  AS actor_name, film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name
AS 'genre' FROM category JOIN film_category ON category.category_id= film_category.category_id 
JOIN film ON film.film_id= film_category.film_id JOIN film_actor ON film.film_id= film_actor.film_id 
JOIN actor ON actor.actor_id= film_actor.actor_id WHERE category.name= 'Action' AND CONCAT(actor.first_name, ' ', actor.last_name)= 'SANDRA KILMER';