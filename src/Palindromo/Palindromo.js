import React, { useState } from 'react';
import PalindromoWrapper from "./PalindromoWrapper";
import MessageDisplay from "./MessageDisplay";
import PalidromoInput from "./PalidromoInput";
import MessageDisplay2 from "./MessageDisplay2";
import SubmitButtonPalindromo from "./SubmitButtonPalindromo";

const Palindromo = () => {
  const [palabra, setPalabra] = useState("");
  const handlePalabraChange = (e) => {
    setPalabra(e.target.value);
  }
  console.log(palabra);
  
  const onSubmitPalabra = () => {
    fetch("http://localhost:3001/esPalindromo",{
      method: 'post',
      body: palabra
    })
      .then(response => response.json())
      .then(response => setPalabra(response.palindromoMsg));
    //.then(response=>console.log(response))
  };


  return (
    <PalindromoWrapper>
        <MessageDisplay>Palindromo React App</MessageDisplay>
        <PalidromoInput placeholder="Introduzca una palabra" type="text" onChange={handlePalabraChange} />
        <SubmitButtonPalindromo primary onClick={onSubmitPalabra}>Submit</SubmitButtonPalindromo>
        <MessageDisplay2>{}</MessageDisplay2>
    </PalindromoWrapper>
  );
};

export default Palindromo;