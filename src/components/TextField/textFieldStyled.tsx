import styled from 'styled-components'

export const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 316px;
    gap: 0.6em;
    color: #9FA2B4;
`

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Eye = styled.span`
    margin-left: -1.5em;
    cursor: pointer;
`

export const TextFieldLabel = styled.label`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.3px;
`

export const ForgetPassword = styled.span`
    font-size: .625rem;
`

export const TextFieldInput = styled.input`
    height: 2.625em;
    outline: none;
    border: 1px solid #F0F1F7;
    color: #9FA2B4;
    background-color: #FCFDFE;
    font-family: 'Mulish', sans-serif;
    font-size: .825rem;
    border-radius: 8px;
    width: 100%;
    padding: 0 1rem;
`