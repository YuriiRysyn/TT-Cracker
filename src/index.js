import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';



// const a = (positions, index, value) => {
//   const arr = [...positions];
//   const currentValue = positions[index];
//   arr[index] = value;
//   arr[3] = positions[3] - value + currentValue;
//   return arr;
// }
// console.log(a([20, 20, 20, 40], 0, 50)); // [50, 20, 20, 10]
// console.log(a([30, 30, 40, 0], 2, 5)); // [30, 30, 5, 35]
// console.log(a([30, 30, 35, 5], 2, 5)); // [30, 30, 5, 35]
// console.log(a([0, 0, 0, 100], 1, 15)); // [30, 30, 5, 35]

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)