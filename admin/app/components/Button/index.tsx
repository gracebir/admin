import React from 'react'
import { signButtonProps } from '../../../typing'
import { ButtonStyled } from './buttonStyled'

const Button = ({
  type,
  text
}:signButtonProps) => {
  return (
    <ButtonStyled type={type}>
      {text}
    </ButtonStyled>
  )
}

export default Button
