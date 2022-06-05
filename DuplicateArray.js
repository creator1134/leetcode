// https://leetcode.com/problems/contains-duplicate/

//by bruteforce TC: O(n^2)

function containsDuplicate(nums) {
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] == nums[j]) {
        final.push(nums[i]);
        // return true;
      }
    }
  }
  console.log(final);
  // return false;
}

// by sorting O(n.log(n))

function dup(num) {
  let sorted = num.sort();
  let final = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) final.push(sorted[i]);
  }
  return final;
}

// by using hashSet,Set  TC: O(n), SC: O(n)

function containsDuplicate(num) {
  let final = [];
  let set = [];
  for (let i = 0; i < num.length; i++) {
    if (set.includes(num[i])) {
      final.push(num[i]);
    }
    set.push(num[i]);
  }
  return [...new Set(final)];
}
