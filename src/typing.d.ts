export type LoginType = {
    email: string
    password: string
}

export type textFieldProps = {
    isPassword?: boolean
    label: string
    value?: string
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void
    placeholder: string
    inputType?: string   
}

export enum ButtonType {
    submit='submit',
    button='button',
    reset='reset',
}

export type signButtonProps = {
    type: ButtonType | undefined
    text: string
}