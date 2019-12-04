// Importo express para armar el servidor
const express = require('express');

// Importo body-parser para convertir todo lo que recibo en json
const bodyParser = require('body-parser');



// Creo la variable con express
var app = express();

// CARGO ARCHIVOS DE RUTAS
var autorizaciones = require('./routes/autorizacion');

// MIDDLEWARES
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });
  
  
  
  //CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


// RUTAS
app.use('/migraciones/api/v1/autorizaciones', autorizaciones);






// exportar
module.exports = app;
