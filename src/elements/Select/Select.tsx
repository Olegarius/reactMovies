import React from 'react';
import { components, DropdownIndicatorProps, GroupBase, ActionMeta } from 'react-select';
import DownIcon from './Down.svg';
import * as Styled from './styles';

export interface OptionType {
    value: string;
    label: string;
}

const IndicatorSeparator = () => null

const DropdownIndicator = (props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>) => {
    return (
        <components.DropdownIndicator {...props}>
            <Styled.DownIcon src={DownIcon} />
        </components.DropdownIndicator>
    );
};

type Props = {
    options: OptionType[] | null;
    placeholder?: string;
    onChange: (newValue: any, actionMeta: ActionMeta<unknown>) => void;
    title?: string;
    wrapperClassName?: string;
    className?: string;
    defaultValue?: OptionType[] | null;
    value?: OptionType[] | null;
    name: string;
}

const Select:React.FC<Props> = ({name, options, placeholder, onChange, className = '', defaultValue, value='', wrapperClassName = '', title = ''}) => {
    const defaultVal = !defaultValue ? options?.[0] : defaultValue;
    const colourStyles = {
        singleValue: (styles: any) => ({ ...styles, color: "#FFFFFF" }),
        option: (styles: any) => {
          return {
            ...styles,
            backgroundColor: "#424242",
            color: "#FFFFFF",
            "&:hover": {
                backgroundColor: "#FFFFFF",
                color: "#424242"
              }
          };
        }
      };

      return (
        <Styled.Wrapper className={wrapperClassName}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.ReactSelect
                name={name}
                value={value}
                defaultValue={defaultVal}
                components={{ IndicatorSeparator, DropdownIndicator }}
                placeholder={placeholder}
                options={options || []}
                onChange={onChange}
                isClearable={false}
                closeMenuOnSelect={false}
                isMulti
                className={className}
                styles={colourStyles}
            />
        </Styled.Wrapper>
    );
}

export default Select;