CREATE TABLE IF NOT EXISTS villes (
    id INT PRIMARY KEY,
    zipcode INT,
    city VARCHAR(255),
    latitude DECIMAL(9.6),
    longitude DECIMAL(9.6),
    insee_code VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS acheteurs (
    id INT PRIMARY KEY,
    villes_id INT,
    `name` VARCHAR(255),
    type VARCHAR(255),
    FOREIGN KEY (villes_id) REFERENCES villes(id)
);

CREATE TABLE IF NOT EXISTS produits (
    id INT PRIMARY KEY,
    `name` VARCHAR(255),
    category VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS agriculteurs (
    id INT PRIMARY KEY,
    villes_id INT,
    registered_at VARCHAR(20),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    farmsize INT,
    FOREIGN KEY (villes_id) REFERENCES villes(id)
);

CREATE TABLE IF NOT EXISTS transactions (
    id INT PRIMARY KEY,
    produits_id INT,
    agriculteurs_id INT,
    acheteurs_id INT,
    created_at VARCHAR(20),
    price INT,
    quantity FLOAT,
    FOREIGN KEY (produits_id) REFERENCES produits(id),
    FOREIGN KEY (agriculteurs_id) REFERENCES agriculteurs(id),
    FOREIGN KEY (acheteurs_id) REFERENCES acheteurs(id)
);

SET GLOBAL local_infile=true;

LOAD DATA INFILE '/home/jeremy/wcs/back-hackathon-agricole/sql/cities.csv'
INTO TABLE villes
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/home/jeremy/wcs/back-hackathon-agricole/sql/buyers.csv'
INTO TABLE acheteurs
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/home/jeremy/wcs/back-hackathon-agricole/sql/products.csv'
INTO TABLE produits
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/home/jeremy/wcs/back-hackathon-agricole/sql/farmers.csv'
INTO TABLE agriculteurs
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/home/jeremy/wcs/back-hackathon-agricole/sql/transactions.csv'
INTO TABLE transactions
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

