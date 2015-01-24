(function () {
  'use strict';

  var expect = require('chai').expect,
      add    = require('./brokenAdd');

  describe('Add Function', function () {
    it('1 + 1 = 2', function() {
      expect(add(1,1)).to.equal(2);
    });

    it('2 + 1 = 3', function() {
      expect(add(2,1)).to.equal(3);
    });

    it('2 + 2 = 4', function() {
      expect(add(2,2)).to.equal(4);
    });

    it('3 + 4 = 8', function() {
      expect(add(3,5)).to.equal(8);
    });
  });
})();
