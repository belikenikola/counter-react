import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [fetchData, setFetchData] = useState({});

  const arr = [
    "eslint/eslint",
    "oakwood/front-end-questions",
    "babel/babel",
    "webpack/webpack",
    "storybooks/storybook",
    "facebook/react",
    "reactjs/redux",
    "expressjs/express",
  ];

  useEffect(() => {
    Axios.get(`https://api.github.com/repos/${arr[counter]}`).then((r) => {
      setFetchData(r.data);
      console.log(r.data);
    });
  }, [arr, counter]);

  const increment = () => {
    if (counter === arr.length - 1) {
      setCounter("End");
    } else {
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
      <button onClick={decrement}>decrement</button>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <p>
        {" "}
        <span>Full Name: {fetchData.full_name}</span>
        <br /> <span>Description: {fetchData.description}</span>
        <br /> <span>Amount of stars: {fetchData.stargazers_count}</span>
        <br />
      </p>
    </div>
  );
}

export default App;
