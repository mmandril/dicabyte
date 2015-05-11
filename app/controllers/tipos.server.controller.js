'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  _ = require('lodash'),
  errorHandler = require('./errors.server.controller'),
  Tipo = mongoose.model('Tipo');


exports.list = function(req, res) {  
  Tipo.find({'subCategoria': req.params.idSubcategoria})
   .exec(function(err, tipos){
     if (err) {
       return res.status(400).send({
         message: errorHandler.getErrorMessage(err)
       });
     }else {      
      res.jsonp(tipos);           
     }
   });
};