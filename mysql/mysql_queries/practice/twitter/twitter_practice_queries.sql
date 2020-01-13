-- Select/Basics

SELECT * FROM users;
SELECT * FROM faves;
SELECT * FROM follows;
SELECT * FROM tweets;
SELECT * FROM users;
SELECT first_name FROM users;
SELECT first_name, last_name FROM users;

-- Select/Conditionals

SELECT first_name FROM users WHERE id=2;
SELECT last_name FROM users WHERE id= 2 OR id= 3;
SELECT * FROM users WHERE id>2;
SELECT * FROM users WHERE id<=3;
SELECT * FROM users WHERE first_name LIKE '%e';
SELECT * FROM users WHERE firs_name LIKE '%K';

-- Select/Sorting

SELECT * FROM users ORDER BY birthday DESC;
SELECT * FROM users ORDER BY birthday ASC;
SELECT * FROM users WHERE first_name  LIKE "%e" ORDER BY birthday DESC;
SELECT first_name FROM users ORDER BY first_name;

-- insert

INSERT INTO table_name (column_name1, column_name2) 
VALUES('column1_value', 'column2_value');

-- Update -- -- -- MPORTANT: if WHERE condition is not added to the UPDATE statement, the changes will be applied to every record in the table.

UPDATE table_name SET column_name1 = 'some_value', column_name2='another_value' WHERE condition(s);

-- Delete -- -- -- IMPORTANT: if WHERE condition is not added to the DELETE statement, it will delete all the records on the table.

SET SQL_SAFE_UPDATES = 0; -- if error regarding sql safe updates occurs

DELETE FROM table_name WHERE condition(s)

-- functions  
-- concat()
SELECT CONCAT('Mr. ', ' ', first_name, ' ', last_name) AS full_name FROM clients;
-- concat_ws()
SELECT CONCAT_WS(' ', first_name, last_name, 'cool') AS full_name FROM clients;
-- length()
SELECT LENGTH(last_name) AS last_len FROM clients;
-- lower()
SELECT LOWER(first_name) AS first_lowercase FROM clients;

-- date
-- hour()
SELECT HOUR(joined_datetime) AS date_hour, joined_datetime FROM clients;
-- dayname()
SELECT DAYNAME(joined_datetime) AS day_name, joined_datetime FROM clients;
-- month()
SELECT mnth(joined_datetime) AS month_number, joined_datetime FROM clients;
-- now()
SELECT NOW() AS right_now;
-- date_format()
SELECT DATE_FORMAT(joined_datetime, '%W %M %e, %Y') FROM clients;

-- What query would you run to get all tweets from the user id of 1?
SELECT * FROM users LEFT JOIN tweets ON users.id= tweets.user_id WHERE users.id= 1;
-- You can just grab the tweets by:
SELECT tweets.tweet FROM users LEFT JOIN tweets ON users.id= tweets.user_id WHERE users.id= 1;
-- Or rename the output column that you want as kobe_tweets by modifying the statement to look like the following:
SELECT tweets.tweet as kobe_tweets FROM users LEFT JOIN tweets ON users.id= tweets.user_id WHERE users.id= 1;
-- 2. What query would return all the tweets that the user with id 2 has tagged as favorites?
SELECT first_name, tweet FROM users LEFT JOIN faves ON users.id= faves.user_id 
LEFT JOIN tweets ON faves.tweet_id= tweet.id WHERE users.id= 2;
-- 3. What query would you run to get all the tweets that user with id 2, or user with id 1, has tagged as favorites?
SELECT first_name, tweet FROM users LEFT JOIN faves ON users.id= faves.user_id
LEFT JOIN tweets ON faves.tweet_id= tweets.id WHERE users.id= 1 OR users.id= 2;
-- 4. What query would you run to get all the users that are following the user with id 1?
SELECT users.first_name AS followed, users2.first_name AS follower FROM users
LEFT JOIN follows ON users.id= follows.followed_id
LEFT JOIN users AS users2 ON users2.id= follows.follower_id WHERE users.id= 1;
-- 5. What query would you run to get all users that are not following the user with id of 2?
SELECT * FROM users WHERE users.id NOT IN
(SELECT follower_id FROM follows WHERE followed_id= 2) AND users.id != 1;
-- We can run functions on specific columns and often times it is paired up with the GROUP BY statement.
SELECT users.first_name AS user, COUNT(users2.first_name) AS follower_count
FROM users LEFT JOIN follows ON users.id= follows.followed_id
LEFT JOIN users as users2 ON users2.id= follows.follower_id 
WHERE users.id= 1 GROUP BY users.id;
-- Left Join vs. Join
SELECT first_name, tweet FROM users LEFT JOIN tweets ON users.id= tweets.user_id;
SELECT first_name, tweet FROM users JOIN tweets ON users.id = tweets.user_id;




