import React from 'react'
import { signButtonProps } from '../../typing'
import { ButtonStyled } from './SubmitStyled'


const SubmitButton = ({
  type,
  text
}:signButtonProps) => {
  return (
    <ButtonStyled type={type}>
      {text}
    </ButtonStyled>
  )
}

export default SubmitButton