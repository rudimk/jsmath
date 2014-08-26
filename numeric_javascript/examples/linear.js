var numeric = require('../numeric');

x = numeric.solveLP([1,1],                   /* minimize [1,1]*x                */
                        [[-1,0],[0,-1],[-1,-2]], /* matrix of inequalities          */
                        [0,0,-3]                 /* right-hand-side of inequalities */
                        );       
numeric.trunc(x.solution,1e-12);

console.log(x);

console.log(numeric.solveLP([1,1],[[1,0],[0,1],[-1,-1]],[-1,-1,-1]));
