import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Button,
} from '@material-ui/core'

import './userForm.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: '30ch',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function MultilineTextFields() {
  const classes = useStyles()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    dob: '2017-05-24',
    country: '',
    about: '',
    gender: 'male',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    let value = e.target.value
    let name = e.target.name
    debugger
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleValidation()) {
      console.log(userData)
    }
  }
  const handleValidation = () => {
    let fields = userData
    let errors = {}
    let formIsValid = true

    //Name Validation
    if (fields['name'] === '') {
      formIsValid = false
      errors['name'] = '* Cannot be empty'
    } else {
      if (fields['name'].length < 4) {
        errors['name'] = '* it should be minimum 4 letter'
      }
    }

    //User Email Validation
    if (fields['email'] === '') {
      formIsValid = false
      errors['email'] = '* Cannot be empty'
    } else {
      if (!fields['email'].match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
        formIsValid = false
        errors['email'] = '*invalid email id'
      }
    }
    //country Validation
    if (fields['country'] === '') {
      formIsValid = false
      errors['country'] = '* Cannot be empty'
    }
    //about Validation
    if (fields['about'] === '') {
      formIsValid = false
      errors['about'] = '* Cannot be empty'
    } else {
      if (fields['about'].length < 8) {
        errors['about'] = '* it should be minimum 8 letter'
      }
    }

    setErrors(errors)
    return formIsValid
  }

  return (
    <div className='user-form-main-container'>
      <h1 className='user-header'>User Form</h1>
      <form
        className={`${classes.root} user-form-container`}
        noValidate
        autoComplete='off'
      >
        <div>
          <div>
            <TextField
              id='name'
              label='Name'
              multiline
              maxRows={4}
              fullWidth
              value={userData.name}
              name='name'
              required
              onChange={handleChange}
              variant='outlined'
            />
            <p className='error-msg default-font'>{errors['name']}</p>
          </div>
          <div>
            <TextField
              id='email'
              label='Email'
              name='email'
              required
              multiline
              maxRows={4}
              value={userData.email}
              onChange={handleChange}
              variant='outlined'
            />
            <p className='error-msg default-font'>{errors['email']}</p>
          </div>
          <div>
            <TextField
              id='dob'
              label='DOB'
              type='date'
              name='dob'
              value={userData.dob}
              onChange={handleChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className='country-gender-container'>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Country</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='country'
                  value={userData.country}
                  required
                  name='country'
                  onChange={handleChange}
                >
                  <MenuItem value='india'>India</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='UK'>UK</MenuItem>
                </Select>
              </FormControl>
              <FormControl component='fieldset' className='gender-container'>
                <FormLabel component='legend'>Gender</FormLabel>
                <RadioGroup
                  aria-label='gender'
                  name='gender'
                  value={userData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value='female'
                    control={<Radio />}
                    label='Female'
                  />
                  <FormControlLabel
                    value='male'
                    control={<Radio />}
                    label='Male'
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <p className='error-msg default-font'>{errors['country']}</p>
          <div>
            <TextField
              id='about'
              label='About'
              name='about'
              required
              multiline
              rows={4}
              value={userData.about}
              onChange={handleChange}
              variant='outlined'
            />
          </div>
          <p className='error-msg default-font'>{errors['about']}</p>
          <div className='submit-button'>
            <Button variant='outlined' onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
