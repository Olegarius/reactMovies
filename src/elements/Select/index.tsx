import React, { useEffect } from 'react';
import { useFormContext, RegisterOptions, Controller } from "react-hook-form";
import useOnChangeValidate from "../../hooks/useOnChangeValidate";

import Select, { OptionType } from "./Select";
type Props = {
    name: string;
    title: string;
    value: OptionType[] | null
    isOnChangeValidation?: boolean,
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
    options: OptionType[] | null;
    [key: string]: any;
}
const SelectForm: React.FC<Props> = ({isOnChangeValidation, rules = {}, name, title, value, options, ...props}) => {
    const { setValue, control } = useFormContext();
    useEffect(()=>{
        setValue(name, value);
    },[name, value, setValue]);
    useOnChangeValidate({ name, isOnChangeValidation });

    return (<Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: { value }, fieldState: { error }}) => {return(
        <div style={error ? {border: "1px solid red"} : {}}>
            <Select {...props} name={name} title={title} options={options} value={value} onChange={(selected: OptionType[]) => setValue(name, selected)}/>
        </div>)}}
    />)
};

export default SelectForm;