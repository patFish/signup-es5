// Signup.js

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const INITIALVALUES = {}
const emailAddresses = ['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com']
const lowercaseRegex = /(?=.*[a-z])/
const uppercaseRegex = /(?=.*[A-Z])/
const numericRegex = /(?=.*[0-9])/
const SIGNUPSCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .lowercase()
    .email('Must be a valid email!')
    .notOneOf(emailAddresses, 'Email already taken!')
    .required('Required!'),
  password: Yup.string()
    .matches(lowercaseRegex, 'one lowercase required!')
    .matches(uppercaseRegex, 'one uppercase required!')
    .matches(numericRegex, 'one number required!')
    .min(8, 'Minimum 8 characters required!')
    .required('Required!'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same!')
    .required('Required!'),
  position: Yup.string().required('Required'),
})

const Signup = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values))
  }

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <Formik
        initialValues={INITIALVALUES}
        onSubmit={handleSubmit}
        validationSchema={SIGNUPSCHEMA}
      >
        {({dirty, isValid})=> {
          return (
            <Form>
              
            </Form>
          )
        }}
      </Formik>
    </React.Fragment>
  )
}

export default Signup
