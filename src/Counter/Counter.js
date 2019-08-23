import React, { useState } from 'react';
import CounterWrapper from "./CounterWrapper";
import MessageDisplayer from "./MessageDisplayer";
import CountsDisplay from "./CountsDisplay";
import CounterButton from "./CounterButton";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("React Counter");

  const getData = () => {
    console.log("test");
    fetch("http://localhost:3001/msg")
      .then(response => response.json())
      .then(response => setMsg(response.message));
    //.then(response=>console.log(response))
  };

  return (
    <CounterWrapper>
      <MessageDisplayer>{msg} </MessageDisplayer>
        <CountsDisplay>You clicked {count} times</CountsDisplay>
        <CounterButton onClick={() => setCount(count + 1)}>Click me</CounterButton>
        <CounterButton onClick={() => setCount(0)}>Reset</CounterButton>
        <CounterButton primary onClick={getData}>Get a msg</CounterButton>
    </CounterWrapper>
  );
};
    export default Counter;
