const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const PORT = 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'Localhost',
    port: 3306,
    user: 'root',
    database: 'arduino',
    password: ''
});

require('../routes/html-routes')(app, connection);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});