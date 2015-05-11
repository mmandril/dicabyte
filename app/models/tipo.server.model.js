'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Tipos Schema
 */
var TipoSchema = new Schema({
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
	subCategoria: {
		type: String
	}
});

mongoose.model('Tipo', TipoSchema);