export function quickSort(array) {
    const defaultColor = 'blue';
    const pivotColor = 'green';
    const comparingColor = 'red';
    const resultColor = 'blue';
    const animations = getQuickSortAnimation(array);
    for (var i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        if (animations[i][0] === 0) {
            const [_, barOneIdx, barTwoIdx, pivotIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const pivotStyle = arrayBars[pivotIdx].style;
            setTimeout (() => {
                barOneStyle.backgroundColor = comparingColor;
                barTwoStyle.backgroundColor = comparingColor;
                pivotStyle.backgroundColor = pivotColor;
            }, i * 10);
        } else if (animations[i][0] === 1) {
            const [_, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout (() => {
                barOneStyle.height = `${barOneHeight}px`;
                barOneStyle.backgroundColor = defaultColor;
                barTwoStyle.height = `${barTwoHeight}px`;
                barTwoStyle.backgroundColor = defaultColor;
            }, i * 10);
        } else if (animations[i][0] === 2) {
            const [_, barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout (() => {
                barOneStyle.height = `${barOneHeight}px`;
                barTwoStyle.height = `${barTwoHeight}px`;
                barTwoStyle.backgroundColor = defaultColor;
                barOneStyle.backgroundColor = resultColor;
            }, i * 10);
        }
    }
}

function getQuickSortAnimation(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, low, high, animations) {
    if (low < high) {
        var pi = partition(array, low, high, animations);
        quickSortHelper(array, low, pi - 1, animations);
        quickSortHelper(array, pi + 1, high, animations);
    } else if (low === high) {
        // when low == high, turn the arrayBar[low] to resultColor
        animations.push([2, low, low, array[low], array[low]]);
    }
}

function partition(array, low, high, animations) {
    var pivot = array[high];
    var i = low;
    for (var j = low; j <= high - 1; j++) {
        animations.push([0, i, j, high]);
        if (array[j] < pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            animations.push([1, i, j, array[i], array[j]]);
            i++;
        } else {
            animations.push([1, i, j, array[i], array[j]]);
        }
    }
    [array[i], array[high]] = [array[high], array[i]];
    animations.push([2, i, high, array[i], array[high]]);
    return i;
}