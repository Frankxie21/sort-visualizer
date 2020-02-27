export function selectionSort(array) {
    var [animations, swapIndex] = getSelectionSortAnimation(array);
    var prevSelectedBarIndex = 0;
    for (var i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isChangeHeight = (i === swapIndex[0]);
        const colorChange = ((swapIndex[0]-i) % 2 === 1); // True for 'blue', False for 'red'
        if (isChangeHeight) {
            swapIndex.shift();
            const [barOneIdx, barTwoIdx, lHeight, hHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${lHeight}px`;
                barTwoStyle.height = `${hHeight}px`;
                barTwoStyle.backgroundColor = 'pink';
            }, i * 1);
        } else {
            const color = colorChange === true ? 'blue' : 'red';
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = `red`;
                barTwoStyle.backgroundColor = color;
                // change the barColor if the selected bar changed.
                if (barOneIdx !== prevSelectedBarIndex) {
                    const barPrevStyle = arrayBars[prevSelectedBarIndex].style;
                    if (barPrevStyle.backgroundColor !== 'pink') {
                        barPrevStyle.backgroundColor = `blue`;
                    }
                    prevSelectedBarIndex = barOneIdx;
                }
            }, i * 1);
        }
    }
}

function getSelectionSortAnimation (array) {
    const animations = [];
    const swapIndex = [];
    if (array.length <= 1) return array;
    for (var i = 0; i < array.length; i++) {
        var selectionIndex = 0;
        for (var j = 0; j < array.length - i; j++) {
            if (array[selectionIndex] <= array[j]) { 
                selectionIndex = j;
            }
            animations.push([selectionIndex, j]);
            animations.push([selectionIndex, j]);
        }
        [array[array.length-1-i], array[selectionIndex]] = [array[selectionIndex], array[array.length-1-i]]
        animations.push([selectionIndex, array.length-1-i, array[selectionIndex], array[array.length-1-i]]);
        swapIndex.push(animations.length-1);
    }
    return [animations, swapIndex];
}