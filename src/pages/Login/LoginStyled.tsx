import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #363740;
`

export const LoginFormWrapper = styled.div`
    width: 23.75em;
    height: 36.375em;
    background-color: #fff;
    border-radius: 8px;
    padding: 2.5em 2em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2em;

`

export const SignMainText = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color:#252733;
    letter-spacing: 0.3px;
    text-align: center;
`

export const SignHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75em;
`

export const SignSecondaryText = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color:#A4A6B3;
    letter-spacing: 0.3px;
    text-align: center;
`

export const SignText = styled.p`
    font-weight: 400;
    color: #A4A6B3;
    font-size: 0.875em;
    text-align: center;
`

export const SignForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`
