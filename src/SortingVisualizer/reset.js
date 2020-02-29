export function resetArrayColor(array) {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (var i = 0; i < array.length; i++) {
        var barStyle = arrayBars[i].style;
        barStyle.backgroundColor = 'blue';
    }
}

export function resetButton() {
    const btn = document.getElementsByTagName('button');
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
    }
}