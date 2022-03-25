var countPoints = function (points, queries) {
  let ans = [];
  let tmp = 0;

  queries.forEach((query) => {
    points.forEach((point) => {
      var x = Math.abs(Math.pow(point[0] - query[0], 2));
      var y = Math.abs(Math.pow(point[1] - query[1], 2));

      if (x + y <= Math.pow(query[2], 2)) {
        tmp++;
      }
    });
    ans.push(tmp);
    tmp = 0;
  });

  return ans;
};
