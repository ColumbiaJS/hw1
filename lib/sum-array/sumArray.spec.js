(function () {
  'use strict';

  // don't worry about all this
  var sumArray  = require('./sumArray'),
      chai      = require('chai'),
      sinon     = require('sinon'),
      sinonChai = require('sinon-chai'),
      expect    = chai.expect;

  chai.use(sinonChai);  // adds convenient assertions for sinon


  describe('sumArray', function() {
    it('sums an array of integers', function() {
      var ints = [1,2,3,4,5,6,7,8,9,10];
      expect(sumArray(ints)).to.equal(55);
    });

    it('sums an array of ints and floats', function() {
      var intsAndFloats = [71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38];
      expect(sumArray(intsAndFloats)).to.equal(32830.6);
    });

    it('calls the reduce method on the array', function() {
      var values = [17, 56, 234.34, -7, -0.005];

      sinon.spy(values, 'reduce');
      expect(sumArray(values)).to.be.within(300.335 - 0.01, 300.335 + 0.01);
      expect(values.reduce).to.have.callCount(1);
      // expect(cb).to.have.been.calledWith("hello foo")
    });

    // it('sums random arrays and calls reduce', function() {
    //   var array = [];

    //   for (var tests=3; tests <= 30; tests++) {
    //     for (var i=0; i < 20; i++) {
    //       var sign = Math.random() > 0.5 ? 1 : -1;
    //       array.push(Math.floor(Math.random() * 10000) % 10000 * sign);
    //     }
    //     Test.assertEquals(sum(array), Tester.sum(array));
    //     Test.expect(Tester.reduceCalled() >= tests,
    // "Your solution must use Array's reduce() function");
    //     array = [];
    //   }
    // });
  });


})();
