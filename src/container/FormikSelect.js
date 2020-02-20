import React from 'react'
import { FormControl, MenuItem, InputLabel, Select, FormHelperText } from '@material-ui/core'
import { Field, ErrorMessage } from 'formik'

const MaterialUISelectField = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  )
}

const FormikSelect = ({ name, items, label, required = false }) => {
  return (
    <React.Fragment>
      <Field
        name={name}
        as={MaterialUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
        required={required}
      >
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </React.Fragment>
  )
}

export default FormikSelect
