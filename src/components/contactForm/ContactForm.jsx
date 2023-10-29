import React  from 'react';
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledButton } from './contactForm.styled';


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

export function ContactForm ({addContact}) {


      return (
        <>
        <Formik
      initialValues={{
        name: '',
        number: ''
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}

    >
      <StyledForm>
        <StyledLabel>Name     
        </StyledLabel>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div"/>
        <StyledLabel>Number
        </StyledLabel>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="div"/>
        <StyledButton type="" >Add contact</StyledButton>
      </StyledForm>
    </Formik>
        </>
      )




}