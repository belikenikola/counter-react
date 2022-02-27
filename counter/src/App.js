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
          <span>-</span> decrement
        </button>
        <p> Counter : {counter}</p>
        <button className="increment" disable onClick={increment}>
          <span>+</span> increment
        </button>
      </div>
      <div className="desc">
        {loading ? (
          <div> Loading repostories... </div>
        ) : (
          <p>
            {' '}
            <span className="title">Full Name: </span>
            <span>{fetchData.full_name}</span>
            <br /> <span className="title">Description: </span>
            <span>{fetchData.description}</span>
            <br /> <span className="title">Amount of stars: </span>
            <span>{fetchData.stargazers_count}</span>
            <br />
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
