import React, { useCallback, useState } from 'react';
import styles from './index.module.css';

type Props = {
    onChange: (value: string) => void;
    width?: string;
    height?: string;
    className?: string;
    value?: string | number;
    type?: string;
    placeholder?: string;
    title?: string;
    wrapperClassName?: string;
}

const Input:React.FC<Props> = ({onChange, width, height, wrapperClassName = '', placeholder='', title = '', type = 'text', value: defaultValue = '', className = '', ...props}) => {
    const [value, setValue] = useState(defaultValue);
    const onChangeHandler = useCallback((e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const currentValue = e.currentTarget.value || '';
        setValue(currentValue);
        onChange(currentValue);
    }, [setValue]);

    const extendedStyles = {
        ...(width && {width}),
        ...(height && {height}),
    };
        return (
            <div className={`${styles.wrapper} ${wrapperClassName}`}>
                <div className={styles.title}>{title}</div>
                {type === 'textarea' ? <textarea className={`${styles.base} ${styles.textarea} ${className}`} style={extendedStyles} placeholder={placeholder} value={value} onChange={onChangeHandler} {...props} />
                : <input type={type} className={`${styles.base} ${className}`} style={extendedStyles} placeholder={placeholder} value={value} onChange={onChangeHandler} {...props} />}
            </div>
        )
};

export default Input;