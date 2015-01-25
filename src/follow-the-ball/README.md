## BallFollower

There are a million variations on this trick, including [Penn and Teller's](http://www.youtube.com/watch?v=BPyvAtQYVok):

http://en.wikipedia.org/wiki/Cups_and_balls

This variation involves several cups (at least 2) and a single ball.  The goal is to follow the ball as the cups are swapped quickly amongst each other. Once the cups stop moving, the observer has to guess which cup the ball is under. Usually, this is a short con and by the time the cups stop moving the ball isn't under any of the cups.  Fortunately, you don't have to worry about that here.  All you have to do is follow the ball as it is moved around.  BallFollower is to be implemented as a constructor function (this is the closest that JavaScript comes to the traditional class system of languages like Java) and will be given the cup the ball starts under as the first parameter and the list of swaps as the second parameter (this will be in the form of an array).  To find the ball's final position, you are going to first create a new BallFollower (passing in the start parameters and swap list) and then calling swap() on the object returned.  In other words, you need to implement both the BallFollower function and that function's swap() method.

Cups are indexed by their position at any given time and not by their original position.

This is how this class-like function will work:

```js
var start = 2,
    swaps = [[0, 2], [1, 0]],
    follower = new BallFollower(start, swaps);

var ballPosition = follower.swap(); // ballPosition should equal 1
```

The first parameter, start, represents the starting position of the ball.  The second parameter, swaps, is an array of arrays representing the cup positions to be swapped, representing the cup's swapping of positions.

In this case, the first swap is:

[0, 2]

This means that the cup in position 0 is swapped with the cup in position 2.  When this swap happens, if the current position of the ball is either 0 or 2, the position of the ball will be swapped.  After the first swap in this case, the ball will be in position 0.

We then have:

[1, 0]

meaning that the cup in position 1 is swapped with the cup in position 0.  The ball, which was under the cup in position 0 at the time, will therefer end in position 1, since this is the last swap in the array.

Your job is to return the final position of the ball (consult the test cases if you need additional references or ask a question in the issues).

There won't be any bad data in this exercise (that is, all start positions and swap lists will contain valid data), but note that this does not mean that the ball is swapped every time!
