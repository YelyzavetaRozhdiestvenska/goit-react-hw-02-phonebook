import styled from "styled-components";
import { Form } from "formik";


export const Phonebook = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
margin: auto;
padding: 30px;
background-color: #FDEAA8;
border: 2px solid #808080;
border-radius: 10px;
box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
`;

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 20px;
width: 500px;
padding: 10px;
background-color: #FFFDD0;
border: 2px solid #808080;
`;


export const ContactList = styled.ul`

`;

export const ContactItem = styled.li`

`;