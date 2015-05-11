'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Categorias Schema
 */
var CategoriaSchema = new Schema({
	nome: {
		type: String,
		trim: true,
		default: ''
	}
});

mongoose.model('Categoria', CategoriaSchema);