import React, { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './demo.pcss';

// // O(2^n)
// const floorAlgorithm = (n) => {
//     if (n < 1) {
//         alert('no kidding');
//         return 0;
//     }
//
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//
//     return floorAlgorithm(n - 1) + floorAlgorithm(n - 2);
// };

// // O(n)
// const PathMemo = {};       // 备忘录
// const floorAlgorithm = (n) => {
//     if (n < 1) {
//         alert('no kidding');
//         return 0;
//     }
//
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//
//     if (PathMemo[n] !== undefined) {
//         return PathMemo[n];
//     }
//
//     const value = floorAlgorithm(n - 1) + floorAlgorithm(n - 2);
//     PathMemo[n] = value;
//     return value;
// };

// time: O(n)  space: O(1)
const floorAlgorithm = (n) => {
    if (n < 1) {
        alert('no kidding');
        return 0;
    }

    if (n === 1) return 1;
    if (n === 2) return 2;

    let value = 0;
    let a = 1;
    let b = 2;
    for (let i = 2; i < n; i++) {
        value = a + b;
        a = b;
        b = value;
    }

    return value;
};

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            result: 0,
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleClick = () => {
        const {
            value,
        } = this.state;

        this.setState({
            result: floorAlgorithm(Number(value)),
        });
    };

    render() {
        const {
            value,
            result,
        } = this.state;

        return (
            <div>
                <h3>Dynamic Planning</h3>
                <Input
                    style={{ margin: '20px 10px 0 0', width: '50px' }}
                    value={value}
                    onChange={this.handleChange}
                />
                级台阶，每次只能走1步或2步，求共有几种走法？
                <Button style={{ marginTop: '20px', display: 'block' }} onClick={this.handleClick}>求解</Button>
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    共 <span style={{ color: 'red' }}>{result}</span> 种走法
                </p>
            </div>
        );
    }
}
