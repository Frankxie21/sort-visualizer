import React from 'react';
import './SortingVisualizer.css';
import {resetArrayColor} from './resetColor.js';
import {mergeSort} from './SortAlgo/mergeSortAlgorithm.js';
import {bubbleSort} from './SortAlgo/bubbleSortAlgorithm.js';
import {selectionSort} from './SortAlgo/selectionSortAlgorithm.js';
import {quickSort} from './SortAlgo/quickSortAlgorithm.js';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArrayNumber();
    }

    resetArrayNumber() {
        const array = [];
        for (var i = 0; i < 50; i++) {
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array});
    }

    resetView() {
        this.resetArrayNumber();
        resetArrayColor(this.state.array);
    }

    render() {
        const {array} = this.state;

        return (
            <div className = 'container'>
            <div>
                <button onClick={() => this.resetView()} className='btn btn-lg btn-primary'>Generate New array</button>
                <button onClick={() => mergeSort(this.state.array)} className='btn btn-lg btn-secondary'>Merge Sort</button>
                <button onClick={() => bubbleSort(this.state.array)} className='btn btn-lg btn-secondary'>Bubble Sort</button>
                <button onClick={() => selectionSort(this.state.array)} className='btn btn-lg btn-secondary'>Selection Sort</button>
                <button onClick={() => quickSort(this.state.array)} className='btn btn-lg btn-secondary'>Quick Sort</button>
            </div>
                {array.map((value, idx) => (
                    <span className = 'array-bar'
                         key = {idx}
                         style = {{backgroundColor: 'blue',
                                   height: `${value}px`, }}>
                    </span>
                ))}
                    <span style={{height: '600px', width:'1px', display: 'inline-block'}}>
                    </span>
            </div>
            );
    }
}

// function
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}