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

export enum buttonType {
    button = 'button',
    submit= 'submit',
    reset='reset'
}

export type signButtonProps = {
    typeButton: buttonType | undefined
    text: string
}

export type registerProps = {
    email: string
    password: string
    firstname: string
}