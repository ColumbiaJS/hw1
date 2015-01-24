(function() {
  'use strict';
  module.exports = {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: [
      'Gruntfile.js',
      'src/**/*.js',
      'test/**/*.js',
      'grunt/**/*.js'
    ],
    test: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: [
        'test/{,*}*.js',
        'src/**/*.spec.js'
      ]
    }
  };
}());
