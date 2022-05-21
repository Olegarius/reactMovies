import React, { useCallback, useState } from 'react';
import CoreDatePicker from 'react-date-picker';
import calendarIcon from './Calendar.svg';
import styles from './index.module.css';

type Props = {
    onChange: (value: string) => void;
    className?: string;
    value?: Date;
    title?: string;
}
const CalendarIcon:React.FC = () => <img src={calendarIcon} />;
const DatePicker:React.FC<Props> = ({onChange, title = '', value: defaultValue = new Date(), className = ''}) => {
    const [value, setValue] = useState<Date | null | undefined | [Date | null, Date | null]>(defaultValue);

        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                <CoreDatePicker format="MM/dd/yyyy" onChange={setValue} value={value} className={className} clearIcon={null} calendarIcon={<CalendarIcon/>} />
            </div>
        )
};

export default DatePicker;