import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextField from '@material-ui/core/TextField'

const FormikField = ({ name, label, type = 'text', required = false }) => {
  return (
    <React.Fragment>
      <Field
        required={required}
        as={TextField}
        fullWidth
        label={label}
        name={name}
        type={type}
        helperText={<ErrorMessage name={name} />}
      />
    </React.Fragment>
  )
}

export default FormikField
