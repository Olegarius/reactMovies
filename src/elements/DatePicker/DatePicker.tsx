import React, { useCallback, useEffect, useState } from 'react';
import CoreDatePicker from 'react-date-picker';

import {formatDate} from "../../helpers/converters";
import calendarIcon from './Calendar.svg';
import styles from './index.module.css';

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
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                <CoreDatePicker name={name} format="MM/dd/yyyy" onChange={setValue} value={value} className={className} clearIcon={null} calendarIcon={<CalendarIcon/>} />
            </div>
        )
};

export default DatePicker;