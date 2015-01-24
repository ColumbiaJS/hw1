(function () {
  'use strict';

  module.exports = {
    options: {
      reporters: ['spec', 'html'],
      timeout: 4000
    },
    src: ['src/**/*.spec.js']
  };
})();
