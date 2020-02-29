export function bubbleSort(array) {
    const btn = document.getElementsByTagName('button');
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
    }
    var [animations, doneIndex] = getBubbleSortAnimation(array);
    console.log(doneIndex);
    for (var i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = ((i % 4 !== 2) && (i % 4 !==3));
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? 'red' : 'blue';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 15);
        } else {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const color = i === doneIndex[0] ? 'green' : 'blue';
            if (i === doneIndex[0]) {
                doneIndex.shift();
            };
            setTimeout(() => {
                barOneStyle.height = `${newHeight}px`;
                barOneStyle.backgroundColor = color;
            }, i * 15);
        }
    }
    const arrayBars = document.getElementsByClassName('array-bar');
    setTimeout(() => {
        arrayBars[0].style.backgroundColor = 'green';
        for (var i = 0; i < btn.length; i++) {
            btn[i].disabled = false;
        }
    }, animations.length * 15);

}

function getBubbleSortAnimation(array) {
    const animations = [];
    const doneIndex = [];
    if (array.length === 1) return array;
    for (var round = 0; round < array.length; round++) {
        for (var currentIndex = 0; currentIndex < (array.length-1-round); currentIndex++) {
            animations.push([currentIndex,currentIndex+1]);
            animations.push([currentIndex,currentIndex+1]);
            if (array[currentIndex] > array[currentIndex+1]) {
                [array[currentIndex], array[currentIndex+1]] = [array[currentIndex+1], array[currentIndex]]
            }
            animations.push([currentIndex, array[currentIndex]]);
            animations.push([currentIndex+1, array[currentIndex+1]]);
        }
        doneIndex.push(animations.length-1);
    }
    return ([animations, doneIndex]);
}