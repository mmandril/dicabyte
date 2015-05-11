'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Produtos Schema
 */
var ProdutoSchema = new Schema({
	fabricante: {
		type: String,
		default: '',
		trim: true
	},
	modelo: {
		type: String,
		default: '',
		trim: true
	},
	especificacao: {
		type: String,
		default: '',
		trim: true
	},
	preco: {
		type: Number
	},
	loja: {
		type: String,
		default: '',
		trim: true
	},
	local: {
		type: String,
		default: '',
		trim: true
	},
	tipo: {
		type: String
	}
});

mongoose.model('Produto', ProdutoSchema);