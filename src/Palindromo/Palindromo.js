import React, { useState } from 'react';
import PalindromoWrapper from "./PalindromoWrapper";
import Row from "./Row";
import Button from "./Button";


const Palindromo = ()=>{
    return (
        <ThemeProvider>
            <PalindromoWrapper>
                <Row label='Name'>
                    <input type="text"/>
                </Row> 
                <Button>Submit</Button>
            </PalindromoWrapper>
        </ThemeProvider>
    );
}

export default Palindromo;