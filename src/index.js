import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { reset } = props;
  return (
    <button
      onClick={props.reset}>
      Reset
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("")
  // your code here

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeHolder="typeYourName" />
      <Button reset={reset} />
      {name ? <h1> Hello {name}</h1> : <h1></h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
