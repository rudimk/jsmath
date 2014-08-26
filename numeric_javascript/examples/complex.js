var numeric = require('../numeric');

//Manipulate complex numbers
z = new numeric.T(3,4);
console.log(z);

console.log(z.add(5));

//Eigenvalues

A = [[1,2,5],[3,5,-1],[7,-3,5]];
console.log(numeric.eig(A));

//Fast Fourier Transforms
z = (new numeric.T([1,2,3,4,5],[6,7,8,9,10])).fft();
console.log(z);

//Quadratic programming
console.log(numeric.solveQP([[1,0,0],[0,1,0],[0,0,1]],[0,5,0],[[-4,2,0],[-3,1,-2],[0,0,1]],[-8,2,0]));
