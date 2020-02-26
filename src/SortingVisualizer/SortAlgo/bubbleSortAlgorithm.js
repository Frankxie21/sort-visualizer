export function bubbleSort(array) {
    const animations = getBubbleSortAnimation(array);
    for (var i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = ((i % 4 !== 2) && (i % 4 !==3));
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            console.log(animations[i]);
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? 'red' : 'blue';
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

function getBubbleSortAnimation(array) {
    const animations = [];
    if (array.length === 1) return array;
    for (var round = 0; round < array.length; round++) {
        for (var currentIndex = 0; currentIndex < (array.length-1-round); currentIndex++) {
            animations.push([currentIndex,currentIndex+1]);
            animations.push([currentIndex,currentIndex+1]);
            if (array[currentIndex] > array[currentIndex+1]) {
                var temp = array[currentIndex];
                array[currentIndex] = array[currentIndex+1];
                array[currentIndex+1] = temp;
            }
            var lHeight = array[currentIndex];
            var hHeight = array[currentIndex+1];
            animations.push([currentIndex, lHeight]);
            animations.push([currentIndex+1, hHeight]);
        }
    }
    return animations;
}