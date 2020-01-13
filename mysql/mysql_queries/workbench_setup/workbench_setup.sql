mysql -u root -p

root

show databases;

USE lead_gen_business;

SELECT * FROM clients;

INSERT INTO clients (clients.first_name, clients.last_name, clients.email, clients.joined_datetime)
VALUES('Daniel', 'Beatty', 'tandd2015@outlook.com', .NOW());

INSERT INTO clients (clients.first_name, clients.last_name, clients.email, clients.joined_datetime)
VALUES('Daniel', 'Beatty', 'tandd2015@outlook.com', .NOW());

DELETE FROM clients WHERE clients.id= 12;

UPDATE clients SET clients.first_name= 'Danny Boy', clients.last_name= 'Daniel Sun'
WHERE clients.id= 11;