'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  _ = require('lodash'),
  errorHandler = require('./errors.server.controller'),
  Categoria = mongoose.model('Categoria');

/**
 * Create a Categoria
 */
exports.create = function(req, res) {

};

/**
 * Show the current Categoria
 */
exports.read = function(req, res) {

};

/**
 * Update a Categoria
 */
exports.update = function(req, res) {

};

/**
 * Delete an Categoria
 */
exports.delete = function(req, res) {

};

/**
 * List of Categorias
 */
exports.list = function(req, res) {
	Categoria.find()
  .exec(function(err, categorias){
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(categorias);
		}
	});
};