import React from 'react';
import './SortingVisualizer.css';
import {mergeSortAnimation} from './SortAlgo/sortingAlgorithms.js'

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (var i = 0; i < 300; i++) {
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = mergeSortAnimation(this.state.array);
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

    render() {
        const {array} = this.state;

        return (
            <div className = "array-container">
            <div>
            <button onClick={() => this.resetArray()}>Generate New array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            </div>
                {array.map((value, idx) => (
                    <div className = "array-bar"
                         key = {idx}
                         style = {{backgroundColor: 'blue',
                                   height: `${value}px`, }}>
                    </div>
                ))}

            </div>
            );
    }
}

// function
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}