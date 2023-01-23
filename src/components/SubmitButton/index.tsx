import React from "react";
import { signButtonProps } from "../../typing";
import { ButtonStyled } from "./SubmitStyled";

const SubmitButton = ({ typeButton, text }: signButtonProps) => {
  return <ButtonStyled type={typeButton}>{text}</ButtonStyled>;
};

export default SubmitButton;
