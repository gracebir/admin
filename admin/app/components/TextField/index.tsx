'use client'
import React, {useState} from "react";
import { textFieldProps } from "../../../typing";
import { BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'
import {
    Eye,
  ForgetPassword,
  InputWrapper,
  LabelWrapper,
  TextFieldInput,
  TextFieldLabel,
  TextFieldWrapper,
} from "./textFieldStyled";

const TextField = ({
  label,
  inputType,
  value,
  name,
  placeholder,
  onChange,
  isPassword = false,
}: textFieldProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const handleVisible = () => setIsVisible(!isVisible);
  return (
    <TextFieldWrapper>
      <LabelWrapper>
        <TextFieldLabel>{label}</TextFieldLabel>
        {isPassword ? <ForgetPassword>Forgot password?</ForgetPassword> : null}
      </LabelWrapper>
      <InputWrapper>
        {isPassword ?  <TextFieldInput
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={isVisible ? "text": "password"}
        /> :  <TextFieldInput
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
      />}
        {isPassword ? <Eye onClick={handleVisible}>
            {isVisible ? <BsEyeFill/> : <BsEyeSlashFill/>}
        </Eye>: null}
      </InputWrapper>
    </TextFieldWrapper>
  );
};

export default TextField;
