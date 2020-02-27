function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const selfSortedArray = getQuickSortAnimation(array.slice());
      // quickSort(array, 0, array.length - 1);
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


function getQuickSortAnimation(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return array;
}

function quickSortHelper(array, low, high, animations) {
    // const animations = [];
    if (low < high) {
        const pi = partition(array, low, high, animations);
        quickSortHelper(array, low, pi - 1, animations);
        quickSortHelper(array, pi + 1, high, animations);
    }
}

function partition(array, low, high, animations) {
    const pivot = array[high];
    var i = low;
    for (var j = low; j <= high - 1; j++) {
        animations.push([0, i, j, high]);
        if (array[j] < pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            animations.push([1, i, j, array[i], array[j]]);
        }
        animations.push([2, i, j, high]);
    }
    [array[i], array[high]] = [array[high], array[i]];
    animations.push([3, i, high, array[i], array[high]]);
    return i;
}

testSortingAlgorithms();