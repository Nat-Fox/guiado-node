// Importar express y path
var express = require('express');
var path = require('path');

// Inicializar express
var app = express();

// Declarar endpoint
app.get('/', (req, res) => {
    //res.send('Hello world!');
    res.sendFile(__dirname + '/index.html');
});

// Crear la ruta static
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'assets')));

// Iniciar servidor en 8080
app.listen(8080);