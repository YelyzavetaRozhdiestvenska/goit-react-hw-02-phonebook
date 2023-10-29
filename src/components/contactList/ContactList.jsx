import React from 'react';
import {StyledList, ContactItem, DeleteButton} from './contactList.styled';



export const ContactList = ({handleDelete, contacts, filter}) => {
    return <StyledList>
        {contacts.map(contact => <ContactItem>{contact.name}: {contact.number} <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton></ContactItem>)}
        
    </StyledList>  

        
    
};



    