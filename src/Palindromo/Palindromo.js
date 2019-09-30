import React, { useState } from 'react';
import PalindromoWrapper from "./PalindromoWrapper";
import MessageDisplay from "./MessageDisplay";
import PalidromoInput from "./PalidromoInput";
import MessageDisplay2 from "./MessageDisplay2";
import SubmitButtonPalindromo from "./SubmitButtonPalindromo";

const Palindromo = () => {
  const [palabra, setPalabra] = useState("");
  const [msg, setMsg] = useState("");
  const handlePalabraChange = (e) => {
    setPalabra(e.target.value);
  }
  console.log(palabra);
  
  const onSubmitPalabra = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/esPalindromo",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({palabra : palabra})
    })
      .then((res) => res.json())
      .then((res) => setMsg(res.result))
      .catch((err)=> console.log(err))
    //.then(response=>console.log(response))
  };
  
  return (
    <PalindromoWrapper>
        <MessageDisplay>Palindromo React App</MessageDisplay>
        <PalidromoInput placeholder="Introduzca una palabra" type="text" onChange={handlePalabraChange} />
        <SubmitButtonPalindromo primary onClick={onSubmitPalabra}>Submit</SubmitButtonPalindromo>
        <MessageDisplay2>{msg}</MessageDisplay2>
    </PalindromoWrapper>
  );
};

export default Palindromo;