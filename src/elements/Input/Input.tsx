import React, { useCallback } from 'react';
import * as Styled from './styles';

type Props = {
    name: string;
    onChange?: (value: string | number) => void;
    width?: string;
    height?: string;
    className?: string;
    value?: string | number;
    type?: string;
    placeholder?: string;
    title?: string;
    wrapperClassName?: any;
}

const Input:React.FC<Props> = ({name, value, onChange = () => {}, width, height, wrapperClassName = '', placeholder='', title = '', type = 'text', value: defaultValue = '', className = '', ...props}) => {
    const onChangeHandler = useCallback((e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const currentValue = String(e?.currentTarget?.value || '');
        onChange(currentValue);
    }, []);

    const extendedStyles = {
        ...(width && {width}),
        ...(height && {height}),
    };
        return (
            <Styled.Wrapper className={wrapperClassName}>
                <Styled.Title>{title}</Styled.Title>
                {type === 'textarea' ? <Styled.Textarea name={name} className={className} style={extendedStyles} placeholder={placeholder} value={value} onChange={onChangeHandler} {...props} />
                : <Styled.Input name={name} type={type} className={className} style={extendedStyles} placeholder={placeholder} value={value} onChange={onChangeHandler} {...props} />}
            </Styled.Wrapper>
        )
};

export default Input;