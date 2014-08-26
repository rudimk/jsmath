var numeric = require('../numeric');

//To minimize a function f(x) we provide the function numeric.uncmin(f,x0) where x0 is a starting point for the optimization.

sqr = function(x) { return x*x; };
console.log(numeric.uncmin(function(x) { return sqr(10*(x[1]-x[0]*x[0])) + sqr(1-x[0]); },[-1.2,1]).solution);

f = function(x) { return sqr(-13+x[0]+((5-x[1])*x[1]-2)*x[1])+sqr(-29+x[0]+((x[1]+1)*x[1]-14)*x[1]); };
x0 = numeric.uncmin(f,[0.5,-2]).solution;
console.log(x0);
