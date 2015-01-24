(function () {
  'use strict';

  var doubleArray = require('./doubleArray'),
      chai        = require('chai'),
      sinon       = require('sinon'),
      sinonChai   = require('sinon-chai'),
      expect      = chai.expect;

  chai.use(sinonChai);

  describe('doubleArray', function() {

    it('should double each value in arrays of ints', function() {
      var ints = [2,8,4,9,124,15];
      expect(doubleArray(ints)).to.deep.equal([4,16,8,18,248,30]);
    });

    it('should double each value in arrays of ints and floats', function() {
      var intsAndFloats = [2,14.4,12,-17.9,21];
      expect(doubleArray(intsAndFloats)).to.deep.equal([4,28.8,24,-35.8,42]);
    });

    it('should use map to create the new array of doubled values', function() {
      var values = [2,8,4,9,124,15];
      sinon.spy(values, 'map');

      expect(doubleArray(values)).to.deep.equal([4,16,8,18,248,30]);
      expect(values.map).to.have.callCount(1);
    });
  });
})();
