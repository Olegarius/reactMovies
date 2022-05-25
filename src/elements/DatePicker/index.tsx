import React from 'react';
import { useFormContext, RegisterOptions } from "react-hook-form";
import useOnChangeValidate from "../../hooks/useOnChangeValidate";

import DatePicker from "./DatePicker";
type Props = {
    name: string;
    title: string;
    isOnChangeValidation?: boolean,
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
    [key: string]: any;
}
const SelectForm: React.FC<Props> = ({isOnChangeValidation, rules = {}, name, title, ...props}) => {
    const { setValue } = useFormContext();

    useOnChangeValidate({ name, isOnChangeValidation });

    return (<DatePicker {...props} name={name} title={title} onChange={(value: string) => setValue(name, value)}/>)
};

export default SelectForm;