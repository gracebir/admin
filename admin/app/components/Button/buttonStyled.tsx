'use client'
import styled from "styled-components";

export const ButtonStyled = styled.button`
    border: 1px solid #3751FF;
    height: 3em;
    width: 316px;
    cursor: pointer;
    background-color: #fff;
    font-weight: 700;
    font-family: 'Mulish', sans-serif;
    font-size: .825rem;
    transition: .3s ease-in-out;
    color: #3751FF;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 8px;
    &:hover{
        background-color: #3751FF;
        color: #fff;
    }
`