const express = require('express');
const app = express();
const routes = require('./public/js/routes');
const path = require('path')
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

app.listen(3000, function () {
    console.log("servidor creado http://localhost:3000");
});
