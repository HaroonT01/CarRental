CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO cars (make, model, price) VALUES ('Toyota', 'Corolla', 50.00);
INSERT INTO cars (make, model, price) VALUES ('Honda', 'Civic', 55.00);
INSERT INTO cars (make, model, price) VALUES ('Ford', 'Focus', 45.00);
-- Add more entries as needed
