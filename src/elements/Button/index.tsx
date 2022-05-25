import React from 'react';
import { useFormState, useFormContext } from "react-hook-form";
import Button from "./Button";

type Props = {
    onClick?: any;
    type?: 'submit' | 'reset' | 'button' | undefined;
    children: JSX.Element | string;
    disabled?: boolean;
    [key: string]: any;
}

const ButtonForm: React.FC<Props> = ({children, onClick = () => {}, type = 'submit', disabled = false, ...props}) => {
    const formMethods = useFormContext();
    const { isDirty, isValid, isSubmitting } = useFormState();
    const disabledFlag = disabled || (type !== "reset" && (isDirty || !isValid || isSubmitting));

    return <Button disabled={disabledFlag} onClick={() => onClick(formMethods)} type={type} {...props}>{children}</Button>
};

export default ButtonForm;