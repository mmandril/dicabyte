'use strict';

module.exports = function(app) {
  var subcategorias = require('../../app/controllers/subcategorias.server.controller');

  app.route('/api/subcategorias/:idCategoria')
    .get(subcategorias.list);

  app.route('/api/subcategorias/get/:idSubCategoria')
    .get(subcategorias.findOne);
};