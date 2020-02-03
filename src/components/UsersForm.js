import React from 'react';
import {Formik , Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export function UserForm(props){

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required()
    });

return <Formik 
  enableReinitialize = {true}
  initialValues= {props.values}
  onSubmit = {props.onSubmit}
  validationSchema = {schema}
  render= {
      props => {
          return <Form > 
            <label>name</label>
            <Field name = "name"/>
            <ErrorMessage name="name" />

            <label>email</label>
            <Field name = "email"/>
            <ErrorMessage name="email" />

            <button type="submit">Send</button>
          </Form>
      }
  }
/>

}
