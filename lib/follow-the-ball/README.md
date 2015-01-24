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

The first swap moves the ball from position 2 to 0, the second from 0 to 1.

Given the same list of swaps, starting with 0 would result in a final position of 2, while starting with 1 would result in a final position of 0.

There won't be any bad data in this exercise (that is, all start positions and swap lists will contain valid data), but note that this does not mean that the ball is swapped every time!
