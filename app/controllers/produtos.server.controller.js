'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  _ = require('lodash'),
  errorHandler = require('./errors.server.controller'),
  Produto = mongoose.model('Produto');


exports.list = function(req, res) {  
  Produto.find({'tipo': req.params.idTipo})
   .exec(function(err, produtos){
     if (err) {
       return res.status(400).send({
         message: errorHandler.getErrorMessage(err)
       });
     }else {      
      res.jsonp(produtos);           
     }
   });
};

exports.listTotal = function(req, res) {  
  Produto.count({})
   .exec(function(err, total){
     if (err) {
       return res.status(400).send({
         message: errorHandler.getErrorMessage(err)
       });
     }else {      
      res.jsonp(total);           
     }
   });
};