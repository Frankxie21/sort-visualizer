import React from 'react';
import './SortingVisualizer.css';

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
            array.push(randomIntFromInterval(5,1000));
        }
        this.setState({array});
    }

    mergeSort() {

    }

    render() {
        const {array} = this.state;

        return (
            <div className = "array-container">
                {array.map((value, idx) => (
                    <div className = "array-bar"
                         key = {idx}
                         style = {{backgroundColor: 'blue',
                                   height: `${value}px`, }}>
                    </div>
                ))}
            <button onClick={() => this.resetArray()}>Generate New array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            </div>
            );
    }
}

// function
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}