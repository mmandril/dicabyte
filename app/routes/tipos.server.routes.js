'use strict';

module.exports = function(app) {
  var tipos = require('../../app/controllers/tipos.server.controller');

  app.route('/api/tipos/:idSubcategoria')
    .get(tipos.list);
};