## Sum Array Values Together

Like doubleArray, the goal of this exercise is to get used to using a JavaScript Array method - in this case **reduce**. The reduce method takes a callback function as its first parameter (a function that you pass into reduce as a parameter), and calls that callback with the previous value, the current value, the index, and the array (a reference to the array that's being reduced).  **reduce** also takes an optional initial value as a second parameter in the array.  It then applies the callback against either the initial value (for the first element) or the previous value returned from the previous callback, and the current element of the array.  It returns a single value representing the result of using the reduce callback function as an accumulator.  For more, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.

Here we want our sumArray function to return the sum of the values that are passed into the array.  The tests do check to make sure you are using the reduce method.

```js
var sumArray = function sumArray(values) {
  // IMPLEMENT YOUR SOLUTION HERE!
  // MAKE SURE TO USE REDUCE!
};
```

Ex:

```js
var values = [1,2,3,4,5,6,7,8,9,10];
sumArray(values); // should return 55
```
