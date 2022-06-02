import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import useOnChangeValidate from "../../hooks/useOnChangeValidate";

import Input from "./Input";
type Props = {
    name: string;
    title: string;
    isOnChangeValidation?: boolean,
    rules?: object;
    [key: string]: any;
}
const InputForm: React.FC<Props> = ({isOnChangeValidation, rules = {}, name, title, ...props}) => {
    const { setValue, control, formState: { errors } } = useFormContext();

    useOnChangeValidate({ name, isOnChangeValidation });

    return (<Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: { value }, fieldState: { error }}) => (
            <div style={error ? {border: "1px solid red"} : {}}>
                <Input {...props} name={name} title={title} value={value} onChange={(value: string | number) => {setValue(name, value);}} />
            </div>
        )}
    />)
};

export default InputForm;