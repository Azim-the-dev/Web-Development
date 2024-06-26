CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

CREATE TABLE user (
	id INT PRIMARY KEY,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE ,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 18)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 20, "Azim", "azim@azim.com", 1000, 10);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO post
(id, content, user_id)
VALUES
(2, "Hello, World", 1);

SELECT id, content, user_id FROM post;
SELECT * FROM user;
SELECT DISTINCT age FROM user;