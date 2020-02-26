
function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const selfSortedArray = getSelectionSortAnimation(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, selfSortedArray));
    }
  }

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (var i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}


function getSelectionSortAnimation (array) {
    const animations = [];
    if (array.length <= 1) return array;
    for (var i = 0; i < array.length; i++) {
        var selectionIndex = 0;
        for (var j = 0; j < array.length - i; j++) {
            if (array[selectionIndex] < array[j]) { 
                selectionIndex = j;
            }
            var temp = array[array.length-1-i];
            array[array.length-1-i] = array[selectionIndex];
            array[selectionIndex] = temp;
        }
    }
    return array;
}

// testSortingAlgorithms();


function getSelectionSortAnimation (array) {
    const animations = [];
    const swapIndex = [];
    if (array.length <= 1) return array;
    for (var i = 0; i < array.length; i++) {
        var selectionIndex = 0;
        for (var j = 0; j < array.length - i; j++) {
            animations.push([selectionIndex, j]);
            animations.push([selectionIndex, j]);
            if (array[selectionIndex] < array[j]) { 
                selectionIndex = j;
            }
        }
        var temp = array[array.length-1-i];
        array[array.length-1-i] = array[selectionIndex];
        array[selectionIndex] = temp;
        animations.push([selectionIndex, array.length-1-i, array[selectionIndex], array[array.length-1-i]]);
        swapIndex.push(animations.length-1);
    }
    return [animations, swapIndex];
}

console.log(getSelectionSortAnimation([1,2,3,4,12,3,4,2]));