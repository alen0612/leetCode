var groupThePeople = function (groupSizes) {
  let count = 0;
  let ans = [];
  let tmp = new Map();

  groupSizes.map((people, idx) => {
    // if the group size is not in the map, add it
    if (!tmp.has(people)) {
      tmp.set(people, [idx]);
    } else {
      // push people and index into map
      tmp.get(people).push(idx);
    }
    // check if map.people is full (map.people.length === people)
    // if full, pop out to ans
    // else continue
    if (tmp.get(people).length === people) {
      ans.push([]);
      tmp.get(people).map((ID) => ans[count].push(ID));
      count++;
      tmp.delete(people);
    }

    console.log(tmp);
  });
  return ans;
};
