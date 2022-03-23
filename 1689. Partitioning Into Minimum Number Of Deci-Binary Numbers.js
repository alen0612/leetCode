/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  var max = 0;
  for (var i = 0; i < n.length; i++) if (n[i] > max) max = n[i];

  return max;
};
