var numbers = require('../index');

//Let's try to estimate the integral of cos(x) from -3 to 9

//First method - using Riemann integrals with approximately 100 subdivisions

console.log(numbers.calculus.Riemann(Math.cos, -3, 9, 100));

//Second method - we could use adaptive Simpson quadratures, with an epsilon value of about .0001.

console.log(numbers.calculus.adaptiveSimpson(Math.cos, -3, 9, .0001));
