import React, { Component } from 'react';
import GlobalStyle from './globalStyle';
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
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
   contacts: [
   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
   filter: '',
   name: '',
   number: ''
  }

  getContact = evt => {
    this.setState({filter: evt.target.value});
  };

  getVisibleContact = ({contacts, filter}) => {
    this.setState ({contacts: this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.name.toLowerCase()) ),
    });
  };
    
   
  handleDeleteContact = contactId => {
    this.setState ({contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };


  addContact = ({name, number}) => {
    let newContact = {
      name,
      number,
      id: nanoid()
    }

    this.addName({name, number})

    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
    // alert(newContact.name)
    // alert(this.state.contacts)
    this.setState({contacts: [ ...this.state.contacts, newContact]});
  }

  addName = ({name, number}) => {
    this.setState({name, number})
  }
  
  
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
      onSubmit={(values, actions) => {
        this.addContact(values);
        actions.resetForm();
      }}

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
    <input type="text" name="name" value={this.filter}
        onChange={this.getContact}></input>
    <ContactList handleDelete = {this.state.handleDelete}  visibleContact={this.getVisibleContact}>
      {this.state.contacts.map(contact => {
        return (
          <ContactItem key={this.state.contacts.id}>
            <p>
            {contact.name}: {contact.number}
            </p>
            <button onClick={() => this.handleDeleteContact(contact.id)}>Delete</button>
          </ContactItem>
        );
      })}
    </ContactList>
    </div>
     <GlobalStyle /> 
  </Phonebook>
    );
  };
};

