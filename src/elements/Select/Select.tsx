import React from 'react';
import ReactSelect, { components, DropdownIndicatorProps, GroupBase, ActionMeta } from 'react-select';
import DownIcon from './Down.svg';
import styles from './index.module.css';

export interface OptionType {
    value: string;
    label: string;
}

const IndicatorSeparator = () => null

const DropdownIndicator = (props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={DownIcon} className={styles.downIcon} />
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
        <div className={`${styles.wrapper} ${wrapperClassName}`}>
            <div className={styles.title}>{title}</div>
            <ReactSelect
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
                className={`${styles.base} ${className}`}
                styles={colourStyles}
            />
        </div>
    );
}

export default Select;