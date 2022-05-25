import React from 'react';
import styles from './index.module.css';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    width?: string;
    height?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
    children: JSX.Element | string;
    disabled?: boolean;
}

const Button:React.FC<Props> = ({disabled = false, children, onClick, width = '233px', height = '57px', type = 'submit', className = ''}) => {
    const extendedStyles = {
        ...(width && {width}),
        ...(height && {height}),
    };
    const extProps = {
        ...(onClick && {onClick})
    };
    return <button disabled={disabled} type={type} className={`${styles.base} ${styles[type]} ${className}`} style={extendedStyles} {...extProps}>{children}</button>
};

export default Button;