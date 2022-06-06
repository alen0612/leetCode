/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// this function takes two arguments, current heap array and the value that needs to be inserted
// we first push the new value into heap array from bottom, which is like adding new node in a heap tree
// then we traverse backward in the heap array by accessing parent index until we reach root, which is index 0
// and in the traverse prcedure, we also need to compare value between currnet index and its parent index in order to maintain heap
const insertValueIntoHeapArray = (heapArray, newValue) => {
  heapArray.push(newValue);
  var index = heapArray.length - 1;

  while (index > 0) {
    let parent = index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
    if (heapArray[index] <= heapArray[parent]) break;

    let tmp = heapArray[parent];
    heapArray[parent] = heapArray[index];
    heapArray[index] = tmp;

    index = parent;
  }
};

// find current maximum number in the tree then return its value
const findMax = (heapArray) => {
  return heapArray[0];
};

// remove first element in current queue and add new element to heap array then heapify
const updateHeapArray = (heapArray, valueToBeRemoved, valueToBeAdded) => {
  let index = heapArray.indexOf(valueToBeRemoved);
  heapArray[index] = valueToBeAdded;
  heapify(heapArray, index);
};

// make the tree remain heap
const heapify = (heapArray, index) => {
  if (index < 0 || index >= heapArray.length) return;

  let parent = index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
  let left = index * 2 + 1;
  let right = index * 2 + 2;

  if (parent >= 0 && heapArray[index] > heapArray[parent]) {
    let tmp = heapArray[parent];
    heapArray[parent] = heapArray[index];
    heapArray[index] = tmp;

    heapify(heapArray, parent);
  } else if (left < heapArray.length && heapArray[index] < heapArray[left]) {
    if (right < heapArray.length) {
      if (heapArray[left] >= heapArray[right]) {
        let tmp = heapArray[left];
        heapArray[left] = heapArray[index];
        heapArray[index] = tmp;

        heapify(heapArray, left);
      } else {
        let tmp = heapArray[index];
        heapArray[index] = heapArray[right];
        heapArray[right] = tmp;

        heapify(heapArray, right);
      }
    } else {
      let tmp = heapArray[index];
      heapArray[index] = heapArray[left];
      heapArray[left] = tmp;
      return;
    }
  } else if (right < heapArray.length && heapArray[index] < heapArray[right]) {
    let tmp = heapArray[index];
    heapArray[index] = heapArray[right];
    heapArray[right] = tmp;

    heapify(heapArray, right);
  } else return;
};

var maxSlidingWindow = function (nums, k) {
  if (k >= nums.length) return [Math.max(...nums)];
  let ans = [];
  let heapArray = [];
  let currentQueue = [];
  let index = k;

  for (var i = 0; i < k; i++) {
    currentQueue.push(nums[i]);
    insertValueIntoHeapArray(heapArray, nums[i]);
  }

  while (index <= nums.length) {
    ans.push(findMax(heapArray));
    updateHeapArray(heapArray, currentQueue[0], nums[index]);
    currentQueue.shift();
    currentQueue.push(nums[index]);
    index++;
  }

  //return ans;
  return ans;
};
// @lc code=end

const array = [-7, -8, 7, 5, 7, 1, 6, 0];
const k = 4;
console.log(maxSlidingWindow(array, k));
// [3, 3, 5, 5, 6, 7]
