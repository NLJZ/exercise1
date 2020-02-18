///not a working solution yet

let array = ["dogs", "mustard", "fox", "stardust", "application"];

const sortStrings = arr => {
  let lengthArr = [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArr.push(arr[i].length);
  }
  lengthArr.sort((a, b) => a - b);
  console.log(arr);
  console.log(lengthArr);
};

sortStrings(array);
