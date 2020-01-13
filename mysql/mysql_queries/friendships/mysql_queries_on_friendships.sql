--1.
SELECT users.first_name, users.last_name FROM users JOIN friendships ON users.id=friendships.user_id
JOIN users as users2 ON users2.id= friendships.friend_id WHERE users2.id= 4;

--2.
SELECT COUNT(users2.id) AS number_of_friendships FROM users LEFT JOIN friendships ON users.id= friendships.user_id
LEFT JOIN users AS users2 ON users2.id= friendships.friend_id;

--3.
SELECT COUNT(users.id) AS number_of_friendships, users.first_name, users.last_name FROM users LEFT JOIN friendships 
ON users.id= friendships.user_id LEFT JOIN users AS users2 ON users2.id= friendships.friend_id WHERE users.id=1 
GROUP BY users.id ORDER BY COUNT(users.id) DESC;

--4.
INSERT INTO users (users.first_name, users.last_name, users.created_at, users.updated_at)
VALUES('Daniel','Beatty',NOW(), null);

INSERT INTO friendships (friendships.user_id, friendships.friend_id, friendships.created_at, friendships.updated_at)
VALUES (6,2,NOW(),null);

INSERT INTO friendships (friendships.user_id, friendships.friend_id, friendships.created_at, friendships.updated_at)
VALUES (6,4,NOW(),null);

INSERT INTO friendships (friendships.user_id, friendships.friend_id, friendships.created_at, friendships.updated_at)
VALUES (6,5,NOW(),null);

--5.
SELECT users2.first_name AS Eli_friend_first_name, users2.last_name AS Eli_friend_last_name
FROM users LEFT JOIN friendships ON users.id= friendships.user_id LEFT JOIN users AS users2 ON users2.id= friendships.friend_id
WHERE users.id= 2 ORDER BY users2.first_name ASC;

--6.
DELETE FROM friendships WHERE friendships.id=5;

--7.
SELECT  users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users JOIN friendships ON users.id=friendships.user_id JOIN users as users2 ON users2.id= friendships.friend_id ;