function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  O(n^2) — because of the nested loop.
*/

/* 
  
  - loop through each number in the array 
  - do a nested loop to go through  the rest of the numbers
  - for each pair of numbers add them together
  - if the result is equal the target, return true
  - if the loop finishes and it doesn't find the any pair that has the result equals target, returin false


*/

/*
  This function checks every pair in the array, if any pair adds up to the target, it returns true.
  If the pair doesn't exists, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
