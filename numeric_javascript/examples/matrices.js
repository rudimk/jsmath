var numeric = require('../numeric');

//Basic matrix operations

var x = [7,8,9];
var y = [10,1,2];
console.log(numeric['+'](x,y));

var A = [[1,2,3],[4,5,6]];
var x = [7,8,9];
console.log(numeric.dot(A,x));

//Calculating a matrix's inverse
var A = [[1,2,3],[4,5,6],[7,1,9]]
Ainv = numeric.inv(A);
console.log(Ainv);

//..and determinants
console.log(numeric.det([[1,2],[3,4]]));

//Transposing two matrices
console.log(numeric.transpose([[1,2,3],[4,5,6]]));
