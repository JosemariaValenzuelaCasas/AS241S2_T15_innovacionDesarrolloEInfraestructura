const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: "rds.c568qm82elso.us-east-1.rds.amazonaws.com",
    database: "faq",
    user: "admin",
    password: "admin123"
});

const connection = mysql.createConnection({
    host: "rds.c568qm82elso.us-east-1.rds.amazonaws.com",
    database: "calendario",
    user: "admin",
    password: "admin123"
});

connection.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = { conexion, connection};