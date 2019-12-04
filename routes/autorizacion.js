'use strict'

var express = require('express');
var nuevaController = require('../controllers/nuevaAutorizacion');
var modificaController = require('../controllers/modificaActuacion')
var revocarController = require('../controllers/revocarAutorizacion')

var router = express.Router();

router.post('/autorizacion', nuevaController.nuevo);
router.put('/autorizacion', modificaController.modifica);
router.delete('/autorizacion', revocarController.revoca);



module.exports = router;