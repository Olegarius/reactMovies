import React from 'react';
import * as Styled from './styles';

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
    return <Styled.Button disabled={disabled} type={type} className={className} style={extendedStyles} {...extProps}>{children}</Styled.Button>
};

export default Button;