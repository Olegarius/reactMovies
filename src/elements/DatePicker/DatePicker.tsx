import React, { useEffect, useState } from 'react';
import CoreDatePicker from 'react-date-picker';

import {formatDate} from "helpers/converters";
import calendarIcon from './Calendar.svg';
import * as Styled from './styles';

type Props = {
    onChange: (value: string) => void;
    className?: string;
    value?: Date;
    title?: string;
    name: string;
    [key: string]: any;
}
const CalendarIcon:React.FC = () => <img src={calendarIcon} />;
const DatePicker:React.FC<Props> = ({onChange, name, title = '', value: defaultValue = new Date(), className = ''}) => {
    const [value, setValue] = useState<Date | null | undefined>(defaultValue);
    useEffect(() => {
        value && onChange(formatDate(value));
    }, [value]);
        return (
            <Styled.Wrapper>
                <Styled.Title>{title}</Styled.Title>
                <CoreDatePicker name={name} format="MM/dd/yyyy" onChange={setValue} value={value} className={className} clearIcon={null} calendarIcon={<CalendarIcon/>} />
            </Styled.Wrapper>
        )
};

export default DatePicker;