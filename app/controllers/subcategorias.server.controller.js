'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  _ = require('lodash'),
  errorHandler = require('./errors.server.controller'),
  Subcategoria = mongoose.model('Subcategoria');


/**
 * List of Subcategoria
 */
exports.list = function(req, res) {  
   Subcategoria.find({categoria: req.params.idCategoria})
   .exec(function(err, subCategoria){
     if (err) {
       return res.status(400).send({
         message: errorHandler.getErrorMessage(err)
       });
     } else {     
        res.jsonp(subCategoria);      
     }
   });
};

exports.findOne = function(req, res) {
  console.log(req.params.idSubCategoria);
  Subcategoria.findOne({_id: req.params.idSubCategoria})
  .exec(function(err, subCategoria){
    if(err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(subCategoria);
    }
  });
};