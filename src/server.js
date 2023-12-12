const express = require('express');
const mysql = require('mysql2');
// Rest of your server code remains the same

const db = mysql.createConnection({
    host: 'localhost',
    user: 'username', // The new username
    password: 'password', // The new password
    database: 'name' // Your database name
});




// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

const app = express();

// Endpoint to get cars
app.get('/api/cars', (req, res) => {
    const sqlQuery = 'SELECT * FROM cars';
    db.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
