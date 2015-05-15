'use strict';

module.exports = {
  app: {
    title: 'DicaByte - O Jeito mais fácil de achar prodtos de informática na internet!',
    description: 'Busca de produtos de lojas físicas relacionadas a informática e afins.',
    keywords: 'busca, boa, dica, byte, bite, biti, byti, dicabyte, informatica, notebook, pc, computador, memoria, impressora, hd, dvd, cd, comparação, comparacao, preco, preço, compra, compras, processador, scanner, celular, tablet, tablets, camera, câmera, gps, smartphone, led, lcd, infocentro, infobarra, infonorte, info, apple, iphone, ipad'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions',
  assets: {
    lib: {
      css: [
        'public/lib/vendors/fullcalendar/fullcalendar.css',
        'public/lib/vendors/animate-css/animate.min.css',       
        'public/lib/vendors/sweet-alert/sweet-alert.min.css',   
        'public/lib/vendors/material-icons/material-design-iconic-font.min.css',   
        'public/lib/vendors/socicon/socicon.min.css',   
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js', 
        'public/lib/angular-cookies/angular-cookies.js', 
        'public/lib/angular-animate/angular-animate.js', 
        'public/lib/angular-touch/angular-touch.js', 
        'public/lib/angular-sanitize/angular-sanitize.js', 
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',

        'public/lib/jquery/dist/jquery.js',
        'public/lib/bootstrap/dist/js/bootstrap.js',
        'public/lib/vendors/flot/jquery.flot.min.js',
        'public/lib/vendors/flot/jquery.flot.resize.min.js',
        'public/lib/vendors/flot/plugins/curvedLines.js',
        'public/lib/vendors/sparklines/jquery.sparkline.min.js',
        'public/lib/vendors/easypiechart/jquery.easypiechart.min.js',
        'public/lib/vendors/fullcalendar/lib/moment.min.js',
        'public/lib/vendors/fullcalendar/fullcalendar.min.js',
        'public/lib/vendors/simpleWeather/jquery.simpleWeather.min.js',
        'public/lib/vendors/auto-size/jquery.autosize.min.js',
        'public/lib/vendors/nicescroll/jquery.nicescroll.min.js',
        'public/lib/vendors/waves/waves.min.js',
        'public/lib/vendors/bootstrap-growl/bootstrap-growl.min.js',
        'public/lib/vendors/sweet-alert/sweet-alert.min.js',
      ]
    },
    css: [
      'public/modules/**/css/*.css'
    ],
    js: [
      'public/config.js',
      'public/application.js',
      'public/modules/*/*.js',
      'public/modules/*/*[!tests]*/*.js'
    ],
    tests: [
      'public/lib/angular-mocks/angular-mocks.js',
      'public/modules/*/tests/*.js'
    ]
  }
};