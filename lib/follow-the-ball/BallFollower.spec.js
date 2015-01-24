(function() {
  'use strict';

  var BallFollower = require('./BallFollower'),
      expect = require('chai').expect;

  describe('BallFollower', function() {

    it('returns an object from the constructor function', function() {
      var follower = new BallFollower('firstSwap', 'five');
      expect(follower.start).to.equal('firstSwap');
    });

    it('should find the ball after a single swap', function() {
      var follower = new BallFollower(0, [[0, 1]]);
      expect(follower.swap()).to.equal(1);
    });

    it('should swap the ball when it is in the second cup', function() {
      var follower = new BallFollower(0, [[1, 0]]);
      expect(follower.swap()).to.equal(1);
    });

    it('should not swap the ball if neither swapped cup is in the swap',
        function() {
      var follower = new BallFollower(0, [[2, 1]]);
      expect(follower.swap()).to.equal(0);
    });

    it('should find the ball with 3 cups and many swaps', function() {
      var swaps = [
        [0, 1], [1, 2], [2, 0], [0, 1], [1, 2], [2, 1], [2, 0], [0, 2]
      ];
      expect(new BallFollower(0, swaps).swap()).to.equal(1); // "Nope! Expected 1.");
      swaps = [[0, 2], [1, 0]];
      expect(new BallFollower(0, swaps).swap()).to.equal(2); // "Nope! Expected 2.");
      expect(new BallFollower(1, swaps).swap()).to.equal(0); // "Nope! Expected 0.");
    });

    it('should find the ball with 10 cups and many swaps', function() {
      var swaps = [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]];
      expect(new BallFollower(0, swaps).swap()).to.equal(2); // "Nope! Expected 2.");
      expect(new BallFollower(1, swaps).swap()).to.equal(1); // "Nope! Expected 1.");
      expect(new BallFollower(2, swaps).swap()).to.equal(8); // "Nope! Expected 8.");
      expect(new BallFollower(3, swaps).swap()).to.equal(9); // "Nope! Expected 9.");
      expect(new BallFollower(4, swaps).swap()).to.equal(5); // "Nope! Expected 5.");
      expect(new BallFollower(5, swaps).swap()).to.equal(4); // "Nope! Expected 4.");
      expect(new BallFollower(6, swaps).swap()).to.equal(6); // "Nope! Expected 6.");
    });
  });
})();
