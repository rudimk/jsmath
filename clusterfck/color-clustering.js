var clusterfck = require("clusterfck");

var colors = [[255, 255, 240],
              [20, 120, 102],
              [250, 255, 253],
              [100, 54, 300]];

var threshold = 20; // only combine two clusters with distance less than 14

var clusters = clusterfck.hcluster(colors, clusterfck.EUCLIDEAN_DISTANCE,
	clusterfck.AVERAGE_LINKAGE, threshold);

console.log(clusters);
