import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';

function App() {
  const [counter, setCounter] = useState(0);
  const [fetchData, setFetchData] = useState({});
  const [loading, setLoading] = useState(false);

  const arr = [
    'eslint/eslint',
    'babel/babel',
    'webpack/webpack',
    'storybooks/storybook',
    'facebook/react',
    'reactjs/redux',
    'expressjs/express',
  ];

  useEffect(async () => {
    setLoading(true);
    const r = await Axios.get(`https://api.github.com/repos/${arr[counter]}`);
    setFetchData(r.data);
    setLoading(false);
  }, [counter]);

  const increment = () => {
    if (counter < arr.length - 1) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const decrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <button className="decrement" onClick={decrement}>
          - decrement
        </button>
        <p> Counter : {counter}</p>
        <button className="increment" disable onClick={increment}>
          + increment
        </button>
      </div>

      {loading ? (
        <div> Loading... </div>
      ) : (
        <p>
          {' '}
          <span>Full Name: {fetchData.full_name}</span>
          <br /> <span>Description: {fetchData.description}</span>
          <br /> <span>Amount of stars: {fetchData.stargazers_count}</span>
          <br />
        </p>
      )}
    </div>
  );
}

export default App;
