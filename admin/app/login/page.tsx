import React from 'react'
import { ButtonType } from '../../typing'
import Button from '../components/Button'
import TextField from '../components/TextField'

const Login = () => {
  return (
    <div>
      <TextField label='Password' placeholder='Enter your password' isPassword={true}/>
      <Button type={undefined} text='Log In'/>
    </div>
  )
}

export default Login
