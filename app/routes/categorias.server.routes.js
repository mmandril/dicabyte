'use strict';

module.exports = function(app) {
	var categorias = require('../../app/controllers/categorias.server.controller');

	app.route('/api/categorias')
    .get(categorias.list);
};