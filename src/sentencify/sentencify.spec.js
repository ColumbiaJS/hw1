(function () {
  'use strict';

  var sentencify = require('./sentencify'),
      expect     = require('chai').expect;

  describe('sentencify', function() {
    it('should be defined.', function() {
      expect(sentencify).to.exist();  //  'Method sentencify not defined.'
    });

    it('should be a function', function() {
      expect(sentencify).to.be.a('function');
    });

    it ('should return an empty string for an empty array.', function() {
      expect(sentencify([])).to.equal('');
    });

    it ('should return a single when given a 1-word array', function() {
      expect(sentencify(['word'])).to.equal('word');
    });

    it ('should be separate multiple words with spaces', function() {
      expect(sentencify(['hello', 'world'])).to.equal('hello world');
      expect(sentencify(['hello', 'programming', 'world']))
        .to.equal('hello programming world');
      expect(sentencify(['I', 'can\'t', 'wait', 'to', 'build', 'node', 'apps.']))
        .to.equal('I can\'t wait to build node apps.');
    });
  });
})();
