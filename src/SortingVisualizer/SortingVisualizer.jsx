import React from 'react';
import './SortingVisualizer.css';
// import {mergeSortAnimation} from './SortAlgo/sortingAlgorithms.js'
import {mergeSort} from './SortAlgo/mergeSortAlgorithm.js';
import {bubbleSort} from './SortAlgo/bubbleSortAlgorithm.js';
import {selectionSort} from './SortAlgo/selectionSortAlgorithm.js';

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

    render() {
        const {array} = this.state;

        return (
            <div className = "array-container">
            <div>
                <button onClick={() => this.resetArray()}>Generate New array</button>
                <button onClick={() => mergeSort(this.state.array)}>Merge Sort</button>
                <button onClick={() => bubbleSort(this.state.array)}>Bubble Sort</button>
                <button onClick={() => selectionSort(this.state.array)}>Selection Sort</button>
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