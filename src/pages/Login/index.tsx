import React from "react";
import { useFormik } from "formik";
import Logo from "../../assets/logo.svg";
import Button from "../../components/SubmitButton";
import TextField from "../../components/TextField";
import {
  LoginContainer,
  LoginFormWrapper,
  SignForm,
  SignHeader,
  SignMainText,
  SignSecondaryText,
  SignText,
} from "./LoginStyled";
import { LoginType } from "../../typing";

const initialValues: LoginType = {
  email: "",
  password: "",
};

const Login = () => {
  const onSubmit = (values: LoginType) => {
    console.log(values);
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <LoginContainer>
      <LoginFormWrapper>
        <SignHeader>
          <img src={Logo} alt="" />
          <SignSecondaryText>Dashboard Kit</SignSecondaryText>
        </SignHeader>
        <SignHeader>
          <SignMainText>Log In to Dashboard Kit</SignMainText>
          <SignText>Enter your email and password below</SignText>
        </SignHeader>
        <SignForm onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={values.email}
            name="email"
            inputType="email"
            isPassword={false}
            label="email"
            placeholder="Email address"
          />
          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            isPassword={true}
            label="password"
            placeholder="Password"
          />
          <Button type={undefined} text="Log In" />
        </SignForm>
      </LoginFormWrapper>
    </LoginContainer>
  );
};

export default Login;
