import React, { Component } from 'react';
import GlobalStyle from './globalStyle';
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { StyledForm, Phonebook, ContactList, ContactItem } from './App.styled';



const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.number()
    .max(999999999, 'Too Long!')
    .min(0, 'Too Short!')
    .required('Required')
});


export class App extends Component {
  state = {
   contacts: [],
   name: '',
   number: ''
  }
  

  addContact = newContact => {
    this.setState(prevState => {
      return {contacts: [ ...prevState.contacts, newContact]}
      })};



  render() {
    return (
      <Phonebook >
      <h1>Phonebook</h1>
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}
      validationSchema={schema}
      // onSubmit={(values, actions) => {
      //   onAdd ({ ...values, id: nanoid() });
      //   actions.resetForm();
      // }}
    >
      <StyledForm>
        <label>Name     
        </label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div"/>
        <label>Number
        </label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="div"/>
        <button type="" >Add contact</button>
      </StyledForm>
    </Formik>
    <div className='contactlist'><h2>Contacts</h2>
    <p>Find contacts by name</p>
    <input type="text" name="name"></input>
    <ContactList>
    <ContactItem key={this.state.contacts.id}>
            <p>
              {this.state.contacts.name}: {this.state.contacts.number}
            </p>
            <button>Delete</button>
          </ContactItem>
         </ContactList>
    </div>
     <GlobalStyle /> 
  </Phonebook>
    );
  };
};
