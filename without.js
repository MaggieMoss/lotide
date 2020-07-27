const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  if (arrayOne.length < 1 && arrayTwo.length < 1){
    return true
  }
  for (let i = 0; i < arrayOne.length; i++) {
    let index = i;
    if (arrayOne[i] === arrayTwo[index]) {
      TrueOrFalse = true;
    } else {
      return false;
    }
  } return TrueOrFalse;
};


const assertArraysEqual = function(firstArr, secondArr) {
  if (firstArr.length === secondArr.length && eqArrays(firstArr, secondArr)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};

const without = function(array, toRemove) {
  let modifiedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      modifiedArray.push(array[i]);
    }
  } console.log(modifiedArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]







