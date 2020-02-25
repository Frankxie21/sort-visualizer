export function mergeSort(array) {
    const animations = getAnimation(array);
    for (var i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'blue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 10);
        } else {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${newHeight}px`;
            }, i * 10);
            }
        }
    }

function getAnimation(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiArray, animations);
    return animations;
}

function mergeSortHelper(array, startIndex, endIndex, auxiliaryArray, animations){
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, array, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, array, animations);
    doMerge(array, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

function doMerge(array, startIndex, middleIndex, endIndex, auxiliaryArray, animations){
    var i = startIndex;
    var j = middleIndex+1;
    var k = startIndex;
    while (i <= middleIndex && j <= endIndex) {
        animations.push([i,j]);
        animations.push([i,j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            array[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            array[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIndex) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        array[k++] = auxiliaryArray[i++]
    }
    while (j <= endIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        array[k++] = auxiliaryArray[j++]
    }
}