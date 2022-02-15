DROP DATABASE IF EXISTS trybe_flix;

CREATE DATABASE IF EXISTS trybe_flix;

USE trybe_flix;

CREATE TABLE streamings (
    id INT NOT NULL PRIMARY KEY auto_increment,
    name VARCHAR(255),
    price DECIMAL,
);

CREATE TABLE subscribers (
    id INT NOT NULL PRIMARY KEY auto_increment,
    name VARCHAR(255),
    email VARCHAR(255),
);

CREATE TABLE subscriptions (
    subscriber_id INT,
    streaming_id INT,
    PRIMARY KEY (subscriber_id, streaming_id)
    FOREIGN KEY `fk_streaming` (streaming_id)
        REFERENCES streamings (id)
    FOREIGN KEY `fk_streaming` (product_id)
        REFERENCES subscribers (id)
);
