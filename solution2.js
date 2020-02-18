// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.
let array = ["dogs", "mustard", "fox", "stardust", "application"];

const sortStrings = arr => {
  arr.sort((a, b) => a.length - b.length);
  console.log(arr);
};

sortStrings(array);
