'use strict'

const soapRequest = require('easy-soap-request');
const url = 'https://www.dnmservices.gov.ar/wsAutorizacionViajeTest/wsAutorizacionViaje.php';
const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'urn:wsAutorizacionViaje#revocar',
  };

var registroMigraciones = {};

var controller = {

    revoca: async function( req, res ) {

        const body = req.body;
        const numeroAutorizacion = req.query.numeroAutorizacion;

        var datosAutorizacion = {
            numero_doc: body.numero_doc,
            numero_matricula: body.numero_matricula,
            numero_act_notarial_cert_firma: body.numero_act_notarial_cert_firma,
            fecha: body.fecha,
            tipo_documento: body.tipo_documento,
            nacionalidad_documento: body.nacionalidad_documento,
            Entidad_emisora: body.Entidad_emisora,
            Nombre: body.Nombre,
            Nombre2: body.Nombre2,
            Apellido: body.Apellido,
            Apellido2: body.Apellido2,
            Nacionalidad: body.Nacionalidad,
            Fecha_de_nacimiento: body.Fecha_de_nacimiento,
            Sexo: body.Sexo,
            nombre_escribano: body.nombre_escribano,

        }

        var xml = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:wsAutorizacionViaje">
            <soapenv:Header/>
            <soapenv:Body>
            <urn:revocar soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                <solicitud xsi:type="urn:trevocar">
                    <usuario xsi:type="xsd:string">COLESCBA</usuario>
                    <clave xsi:type="xsd:string">ea31c88561359316c77e6f12f60e762d</clave>
                    <numero_doc xsi:type="xsd:string">${datosAutorizacion.numero_doc}</numero_doc>
                    <numero_matricula xsi:type="xsd:string">${datosAutorizacion.numero_matricula}</numero_matricula>
                    <numero_act_notarial_cert_firma xsi:type="xsd:string">${datosAutorizacion.numero_act_notarial_cert_firma}</numero_act_notarial_cert_firma>
                    <fecha xsi:type="xsd:string">${datosAutorizacion.fecha}</fecha>
                    <tipo_documento xsi:type="xsd:string">${datosAutorizacion.tipo_documento}</tipo_documento>
                    <nacionalidad_documento xsi:type="xsd:string">${datosAutorizacion.nacionalidad_documento}</nacionalidad_documento>
                    <Entidad_emisora xsi:type="xsd:string">${datosAutorizacion.Entidad_emisora}</Entidad_emisora>
                    <Nombre xsi:type="xsd:string">${datosAutorizacion.Nombre}</Nombre>
                    <Nombre2 xsi:type="xsd:string">${datosAutorizacion.Nombre2}</Nombre2>
                    <Apellido xsi:type="xsd:string">${datosAutorizacion.Apellido}</Apellido>
                    <Apellido2 xsi:type="xsd:string">${datosAutorizacion.Apellido2}</Apellido2>
                    <Nacionalidad xsi:type="xsd:string">${datosAutorizacion.Nacionalidad}</Nacionalidad>
                    <Fecha_de_nacimiento xsi:type="xsd:string">${datosAutorizacion.Fecha_de_nacimiento}</Fecha_de_nacimiento>
                    <Sexo xsi:type="xsd:string">${datosAutorizacion.Sexo}</Sexo>
                    <nombre_escribano xsi:type="xsd:string">${datosAutorizacion.nombre_escribano}</nombre_escribano>
                </solicitud>
            </urn:revocar>
            </soapenv:Body>
        </soapenv:Envelope>`;

        await revocarAutorizacion( xml );

        return res.status(200).send( {
            ok: true,
            mensaje: 'Enviado Ok',
            body: {
                datosAutorizacion,
                registroMigraciones
            }
        });

    }


}

var revocarAutorizacion = async function( xml ) {

    var { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml }); // Optional timeout parameter(milliseconds)
    var { headers, body, statusCode } = response;
    
    registroMigraciones = {
        body: body,
        statusCode: statusCode

    }
    

};


module.exports = controller;
