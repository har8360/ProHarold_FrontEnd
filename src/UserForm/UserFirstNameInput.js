import styled from "styled-components";
export default styled.input`  
    display: block;
    appearance: none;
    outline: 0;
    border: 1px solid rgb(230, 230, 230, 0.4);
    background-color: rgb(230, 230, 230, 0.2);
    width: 250px;

    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;

    color: white;
    transition-duration: 0.25s;
    font-weight: 300;

    &:hover{
        background-color: rgb(230, 230, 230, 0.4);
    }

    &:focus{
        background-color: white;
        width: 300px;
        color: #53e3a6;
    }
    &::-webkit-input-placeholder {
        font-family: sans-serif;
		color:    white;
  }
        
`;