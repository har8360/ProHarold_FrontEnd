import React, { useState } from 'react';
import CounterWrapper from "./CounterWrapper";
import MessageDisplayer from "./MessageDisplayer";
import CountsDisplay from "./CountsDisplay";
import CounterButton from "./CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("React Counter");

  const getData = () => {
    console.log("test");
    fetch("http://localhost:3001/msg")
      .then(response => response.json())
      .then(response => setMsg(response.message));
    //.then(response=>console.log(response))
  };

  const handleResetClick = ()=>{
    setCount(0);
    setMsg("React Counter");
  }
  const handleCounterClick = ()=>{
    setCount(count + 1);
  }

  return (
    <CounterWrapper>
      <MessageDisplayer>{msg} </MessageDisplayer>
        <CountsDisplay>You clicked {count} times</CountsDisplay>
        <CounterButton onClick={handleCounterClick}>Click me</CounterButton>
        <CounterButton onClick={handleResetClick}>Reset</CounterButton>
        <CounterButton primary onClick={getData}>Get a msg</CounterButton>
    </CounterWrapper>
  );
};
    export default Counter;
