'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Subcategorias Schema
 */
var SubcategoriaSchema = new Schema({
	_id: {
		type: String
	},
	nome: {
		type: String,
		trim: true,
		default: ''
	},
	url: {
		type: String,
		trim: true,
		default: ''
	},
	tipoLink: {
		type: String,
		trim: true,
		enum: ['N', 'D']
	},
	categoria: {
		type: String
	}
});

mongoose.model('Subcategoria', SubcategoriaSchema);