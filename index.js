'use strict'

// Creo Servidor con Express
var app = require('./app');
var port = 8100;


// Levanto el Servidor
app.listen( port, () => {

    console.log('Servidor Corriendo Correctamente, en la URL: localhost: ', port);

});