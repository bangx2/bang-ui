/*jshint unused: vars */
require.config({
  paths: {
    config: 'config',
    jquery: '../bower_components/jquery/dist/jquery',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    angular: '../bower_components/angular/angular',
    zepto: '../lib/amazeui/assets/js/zepto.min',
    amazeui: '../lib/amazeui/assets/js/amazeui.min',
    underscore: '../bower_components/underscore/underscore',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-route': '../bower_components/angular-route/angular-route'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    },
    'angular-ui-router': [
      'angular'
    ],
    zepto: {
      exports: 'zepto'
    },
    amazeui: {
      deps: [
        'zepto'
      ],
      exports: 'amazeui'
    }
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'config',
  'angular',
  'app',
  'amazeui',
  // 'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-ui-router',
  'underscore'
], function(config, angular, app) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
