import styled from "styled-components";

export default styled.button`
	
	color: #53e3a6;
	appearance: none;
	outline: 0;
	background-color: white;
	border: 0;
	padding: 10px 15px;
	border-radius: 3px;
	width: 283px;
	cursor: pointer;
	font-family: s;
	font-size: 18px;
	transition-duration: 0.25s;
	
	&:hover{
	background-color: rgb(230, 230, 230, 0.95);
}

	&:focus{
		background-color: white;
		width: 300px;
	}
`;