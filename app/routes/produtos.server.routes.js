'use strict';

module.exports = function(app) {
  var produtos = require('../../app/controllers/produtos.server.controller');

  app.route('/api/produtos/:idTipo')
    .get(produtos.list);
};