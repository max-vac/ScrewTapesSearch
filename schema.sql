DROP DATABASE IF EXISTS screwtapesdb;
DROP TABLE screwtapes;
DROP TABLE albums;

CREATE DATABASE screwtapesdb;

\c screwtapesdb;

CREATE screwtapes (
  id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  chapter INT(11),
  artist VARCHAR(255) NOT NULL,
  price NUMERIC (4, 2) NOT NULL,
  songs
  image VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL
)

