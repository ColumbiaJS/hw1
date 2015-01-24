(function() {
  'use strict';
  module.exports = {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: [
      'Gruntfile.js',
      'lib/**/*.js',
      'test/**/*.js',
      'grunt/**/*.js'
    ],
    test: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: [
        'test/{,*}*.js',
        'lib/**/*.spec.js'
      ]
    }
  };
}());
