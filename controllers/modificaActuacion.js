'use strict'

const soapRequest = require('easy-soap-request');
const url = 'https://www.dnmservices.gov.ar/wsAutorizacionViajeTest/wsAutorizacionViaje.php';
const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'urn:wsAutorizacionViaje#modificar',
  };

var registroMigraciones = {};

var controller = {

    modifica: async function( req, res ) {

        const body = req.body;

        

        const numeroAutorizacion = req.query.numeroAutorizacion;

        
    var datosMenor = {
            apellido: body.Menorapellido,
            segundo_apellido: body.Menorsegundo_apellido,
            nombre: body.Menornombre,
            otros_nombres: body.Menorotros_nombres,
            nacionalidad: body.Menornacionalidad,
            tipo_de_documento: body.Menortipo_de_documento,
            emisor_documento: body.Menoremisor_documento,
            numero_de_documento: body.Menornumero_de_documento,
            fecha_de_nacimiento: body.Menorfecha_de_nacimiento,
            Sexo: body.MenorSexo,
            Domicilio: body.MenorDomicilio
        };

    var datosAutorizante1 = {
            apellido: body.Autorizante1apellido,
            segundo_apellido: body.Autorizante1segundo_apellido,
            nombre: body.Autorizante1nombre,
            otros_nombres: body.Autorizante1otros_nombres,
            nacionalidad: body.Autorizante1nacionalidad,
            tipo_de_documento: body.Autorizante1tipo_de_documento,
            emisor_documento: body.Autorizante1emisor_documento,
            numero_de_documento: body.Autorizante1numero_de_documento,
            fecha_de_nacimiento: body.Autorizante1fecha_de_nacimiento,
            Sexo: body.Autorizante1Sexo,
            Domicilio: body.Autorizante1Domicilio,
            caracter_primer_autorizante: body.Autorizante1caracter_primer_autorizante,
            acredita_vinculo_con: body.Autorizante1acredita_vinculo_con,
            telefono: body.Autorizante1telefono,
            requiere_aut_adicional_de: body.Autorizante1requiere_aut_adicional_de
        };
        
    var datosAutorizante2 = {
            apellido: body.Autorizante2apellido,
            segundo_apellido: body.Autorizante2segundo_apellido,
            nombre: body.Autorizante2nombre,
            otros_nombres: body.Autorizante2otros_nombres,
            nacionalidad: body.Autorizante2nacionalidad,
            tipo_de_documento: body.Autorizante2tipo_de_documento,
            emisor_documento: body.Autorizante2emisor_documento,
            numero_de_documento: body.Autorizante2numero_de_documento,
            fecha_de_nacimiento: body.Autorizante2fecha_de_nacimiento,
            Sexo: body.Autorizante2Sexo,
            Domicilio: body.Autorizante2Domicilio,
            caracter_primer_autorizante: body.Autorizante2caracter_primer_autorizante,
            acredita_vinculo_con: body.Autorizante2acredita_vinculo_con,
            telefono: body.Autorizante2telefono,
            requiere_aut_adicional_de: body.Autorizante2requiere_aut_adicional_de
        };
    var datosAcompa = {
            otros_progenitores: body.acompaotros_progenitores,
            terceros: body.acompaterceros,
            viaja_solo: body.acompaviaja_solo
        };

    var datosEscribano = { 
            distrito: body.Escribanodistrito,
            matricula: body.Escribanomatricula,
            nombres_escribano: body.Escribanonombres_escribano,
            apellidos_escribano: body.Escribanoapellidos_escribano,
            numero_actuacion_notarial_cert_firma: body.Escribanonumero_actuacion_notarial_cert_firma,
            fecha_del_instrumento: body.Escribanofecha_del_instrumento,
            cualquier_pais: body.Escribanocualquier_pais,
            paises: body.Escribanopaises,
            serie_foja: body.Escribanoserie_foja,
            tipo_foja: body.Escribanotipo_foja,
            trvigencia_hasta_mayoria_edad: body.Escribanotrvigencia_hasta_mayoria_edad,
            fecha_vigencia_desde: body.Escribanofecha_vigencia_desde,
            fecha_vigencia_hasta: body.Escribanofecha_vigencia_hasta
        };

        var xml = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:wsAutorizacionViaje" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
<soapenv:Header/>
<soapenv:Body>
   <urn:modificar soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <pedido xsi:type="urn:Tpedido">
      <usuario xsi:type="xsd:string">COLESCBA</usuario>
      <clave xsi:type="xsd:string">ea31c88561359316c77e6f12f60e762d</clave>
      <menor xsi:type="urn:rmenor">
         <apellido xsi:type="xsd:string">${datosMenor.apellido}</apellido>
         <segundo_apellido xsi:type="xsd:string">${datosMenor.segundo_apellido}</segundo_apellido>
         <nombre xsi:type="xsd:string">${datosMenor.nombre}</nombre>
         <otros_nombres xsi:type="xsd:string">${datosMenor.otros_nombre}</otros_nombres>
         <nacionalidad xsi:type="xsd:string">${datosMenor.nacionalidad}</nacionalidad>
         <tipo_de_documento xsi:type="xsd:string">${datosMenor.tipo_de_documento}</tipo_de_documento>
         <emisor_documento xsi:type="xsd:string">${datosMenor.emisor_documento}</emisor_documento>
         <numero_de_documento xsi:type="xsd:string">${datosMenor.numero_de_documento}</numero_de_documento>
         <fecha_de_nacimiento xsi:type="xsd:string">${datosMenor.fecha_de_nacimiento}</fecha_de_nacimiento>
         <Sexo xsi:type="xsd:string">${datosMenor.Sexo}</Sexo>
         <Domicilio xsi:type="xsd:string">${datosMenor.Domicilio}</Domicilio>
      </menor>
      <autorizante_1 xsi:type="urn:rautorizante">
         <apellido xsi:type="xsd:string">${datosAutorizante1.apellido}</apellido>
         <segundo_apellido xsi:type="xsd:string">${datosAutorizante1.segundo_apellido}</segundo_apellido>
         <nombre xsi:type="xsd:string">${datosAutorizante1.nombre}</nombre>
         <otros_nombres xsi:type="xsd:string">${datosAutorizante1.otros_nombres}</otros_nombres>
         <nacionalidad xsi:type="xsd:string">${datosAutorizante1.nacionalidad}</nacionalidad>
         <tipo_de_documento xsi:type="xsd:string">${datosAutorizante1.tipo_de_documento}</tipo_de_documento>
         <emisor_documento xsi:type="xsd:string">${datosAutorizante1.emisor_documento}</emisor_documento>
         <numero_de_documento xsi:type="xsd:string">${datosAutorizante1.numero_de_documento}</numero_de_documento>
         <fecha_de_nacimiento xsi:type="xsd:string">${datosAutorizante1.fecha_de_nacimiento}</fecha_de_nacimiento>
         <sexo xsi:type="xsd:string">${datosAutorizante1.Sexo}</sexo>
         <domicilio xsi:type="xsd:string">${datosAutorizante1.Domicilio}</domicilio>
         <caracter_primer_autorizante xsi:type="xsd:string">${datosAutorizante1.caracter_primer_autorizante}</caracter_primer_autorizante>
         <acredita_vinculo_con xsi:type="xsd:string">${datosAutorizante1.acredita_vinculo_con}</acredita_vinculo_con>
         <telefono xsi:type="xsd:string">${datosAutorizante1.telefono}</telefono>
         <requiere_aut_adicional_de xsi:type="xsd:string">${datosAutorizante1.requiere_aut_adicional_de}</requiere_aut_adicional_de>
      </autorizante_1>
      <autorizante_2 xsi:type="urn:rautorizante">
         <apellido xsi:type="xsd:string">${datosAutorizante2.apellido}</apellido>
         <segundo_apellido xsi:type="xsd:string">${datosAutorizante2.segundo_apellido}</segundo_apellido>
         <nombre xsi:type="xsd:string">${datosAutorizante2.nombre}</nombre>
         <otros_nombres xsi:type="xsd:string">${datosAutorizante2.otros_nombres}</otros_nombres>
         <nacionalidad xsi:type="xsd:string">${datosAutorizante2.nacionalidad}</nacionalidad>
         <tipo_de_documento xsi:type="xsd:string">${datosAutorizante2.tipo_de_documento}</tipo_de_documento>
         <emisor_documento xsi:type="xsd:string">${datosAutorizante2.emisor_documento}</emisor_documento>
         <numero_de_documento xsi:type="xsd:string">${datosAutorizante2.numero_de_documento}</numero_de_documento>
         <fecha_de_nacimiento xsi:type="xsd:string">${datosAutorizante2.fecha_de_nacimiento}</fecha_de_nacimiento>
         <sexo xsi:type="xsd:string">${datosAutorizante2.Sexo}</sexo>
         <domicilio xsi:type="xsd:string">${datosAutorizante2.Domicilio}</domicilio>
         <caracter_primer_autorizante xsi:type="xsd:string">${datosAutorizante2.caracter_primer_autorizante}</caracter_primer_autorizante>
         <acredita_vinculo_con xsi:type="xsd:string">${datosAutorizante2.acredita_vinculo_con}</acredita_vinculo_con>
         <telefono xsi:type="xsd:string">${datosAutorizante2.telefono}</telefono>
         <requiere_aut_adicional_de xsi:type="xsd:string">${datosAutorizante2.requiere_aut_adicional_de}</requiere_aut_adicional_de>
         </autorizante_2>
      <acompanante xsi:type="urn:racompanante">
         <otros_progenitores xsi:type="urn:personas_varias" soapenc:arrayType="urn:rpersonas[]"/>
         <terceros xsi:type="urn:personas_varias" soapenc:arrayType="urn:rpersonas[]"/>
         <viaja_solo xsi:type="xsd:boolean">${datosAcompa.viaja_solo}</viaja_solo>
      </acompanante>
      <datos_tramite xsi:type="urn:rdatos_tramite">
         <distrito xsi:type="xsd:string">${datosEscribano.distrito}</distrito>
         <matricula xsi:type="xsd:string">${datosEscribano.matricula}</matricula>
         <nombres_escribano xsi:type="xsd:string">${datosEscribano.nombres_escribano}</nombres_escribano>
         <apellidos_escribano xsi:type="xsd:string">${datosEscribano.apellidos_escribano}</apellidos_escribano>
         <numero_actuacion_notarial_cert_firma xsi:type="xsd:string">${datosEscribano.numero_actuacion_notarial_cert_firma}</numero_actuacion_notarial_cert_firma>
         <fecha_del_instrumento xsi:type="xsd:string">${datosEscribano.fecha_del_instrumento}</fecha_del_instrumento>
         <cualquier_pais xsi:type="xsd:boolean">${datosEscribano.cualquier_pais}</cualquier_pais>
         <paises xsi:type="urn:apaises" soapenc:arrayType="xsd:string[]"/>
         <serie_foja xsi:type="xsd:string">${datosEscribano.serie_foja}</serie_foja>
         <tipo_foja xsi:type="xsd:string">${datosEscribano.tipo_foja}</tipo_foja>
         <vigencia_hasta_mayoria_edad xsi:type="xsd:boolean">${datosEscribano.trvigencia_hasta_mayoria_edad}</vigencia_hasta_mayoria_edad>
         <fecha_vigencia_desde xsi:type="xsd:string">${datosEscribano.fecha_vigencia_desde}</fecha_vigencia_desde>
         <fecha_vigencia_hasta xsi:type="xsd:string">${datosEscribano.fecha_vigencia_hasta} </fecha_vigencia_hasta>
      </datos_tramite>
      </pedido>
      <solicitud xsi:type="urn:TNumeroSolicitud">
         <numero_solicitud xsi:type="xsd:int">${numeroAutorizacion}</numero_solicitud>
      </solicitud>
   </urn:modificar>
</soapenv:Body>
</soapenv:Envelope>`;

await modificoAutorizacion( xml );

return res.status(200).send( {
    ok: true,
    mensaje: 'Enviado Ok',
    body: {
        datosMenor,
        datosAutorizante1,
        datosAutorizante2,
        datosAcompa,
        datosEscribano,
        registroMigraciones
    }
} )



    }


};


var modificoAutorizacion = async function( xml ) {

    var { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 6000 }); // Optional timeout parameter(milliseconds)
    var { headers, body, statusCode } = response;
    
    registroMigraciones = {
        body: body,
        statusCode: statusCode

    }
    

};


module.exports = controller;
