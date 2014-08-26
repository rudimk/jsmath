var clusterfck = require("clusterfck");

var colors = [
   [20, 20, 80],
   [22, 22, 90],
   [250, 255, 253],
   [100, 54, 255]
];

var clusters = clusterfck.hcluster(colors);
console.log(clusters);
