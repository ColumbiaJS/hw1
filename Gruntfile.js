(function () {
  'use strict';

  module.exports = function(grunt) {
    // just-in-time plugin loader so we don't need to loadNpmTasks
    // individually, justInTimeStaticMappins is an object containing
    // packages which cannot be resolved in the automatic mapping
    // auto-mapping occurs by searching for:

    // 1. node_modules/grunt-contrib-task-name
    // 2. node_modules/grunt-task-name
    // 3. node_modules/task-name

    // so anything that doesn't fit this description must be mapped
    var justInTimeStaticMappings = {};
    require('jit-grunt')(grunt, justInTimeStaticMappings);
    require('time-grunt')(grunt);  // tell us how long things are taking

    var config = {
      pkg       : grunt.file.readJSON('package.json'),
      env       : process.env,
      watch     : {
        mochaTest : {
          files: ['src/**/*.js', 'test/**/*.spec.js'],
          tasks: ['reload']
        }
      },
      jshint      : require('./grunt/jshintTask'),
      mochaTest   : require('./grunt/mochaTestTask')
    };

    grunt.initConfig(config);
    grunt.registerTask('reload', function () {
      grunt.task.run(['newer:jshint', 'test']);
    });

    grunt.registerTask('test', function () {
      grunt.task.run(['mochaTest']);
    });

    // the default task is run by simply typing grunt on the console
    grunt.registerTask('default', function () {
      grunt.task.run(['newer:jshint', 'test', 'watch']);
    });
  };
})();
