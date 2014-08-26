var numbers = require('../index')

var array1 = [0, 1, 2];
var array2 = [3, 4, 5];

//Simple addition

console.log(numbers.matrix.addition(array1, array2));

//Subtracting two matrices is easy - simple negate the second matrix, and use the add function

var array3 = [0, 1, 2];
var array4 = [-3, -4, -5];
console.log(numbers.matrix.addition(array3, array4));

