export function mergeSortAnimation(array) {
    const animations = [];
    if (array.length <= 1) return;
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