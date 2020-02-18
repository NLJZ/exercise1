// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.
let array = ["dogs", "mustard", "fox", "stardust", "application"];

const sortStrings = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let newIndex = arr[i];
        arr[i] = arr[j];
        arr[j] = newIndex;
      }
    }
  }
  console.log(arr);
};

sortStrings(array);
