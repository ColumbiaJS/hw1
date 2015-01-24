## Double Array Values Using Map

The goal of this exercise is to get used to using the built-in JavaScript Array object's map method.  The map method takes a callback function (a function that you pass into map as a parameter), and calls that callback for each element in the array, using the result of each call to map the original value for that element in the array to a new value in the new array.  Make sure to visit the documentation for map at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map for the details on how to use it.

In this case, your job is simple.  Implement the function doubleArray, which takes an array of values and returns a new array where each value is double the original value.

Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(arrayToDouble) {
  // USE arrayToDouble.map() HERE TO RETURN A NEW ARRAY WITH ALL VALUES DOUBLED
}


Ex:

```js
var values = [2,8,4,9,124,15];
doubleArray(values); // should return [4,16,8,18,248,30]
```
