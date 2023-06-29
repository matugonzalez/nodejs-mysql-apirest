CREATE DATABASE IF NOT EXISTS carcompany;
USE carcompany;

CREATE TABLE IF NOT EXISTS cars (
  id INT NOT NULL AUTO_INCREMENT,
  make VARCHAR(50),
  model VARCHAR(50),
  year INT,
  PRIMARY KEY(id)
);

INSERT INTO cars (make, model, year) VALUES
  ('Toyota', 'Corolla', 2019),
  ('Honda', 'Civic', 2018),
  ('Ford', 'Mustang', 2020),
  ('Chevrolet', 'Camaro', 2017),
  ('BMW', 'X5', 2021),
  ('Mercedes-Benz', 'C-Class', 2019),
  ('Audi', 'A4', 2020),
  ('Tesla', 'Model S', 2022),
  ('Nissan', 'Altima', 2017),
  ('Hyundai', 'Elantra', 2018);

SELECT * FROM cars;