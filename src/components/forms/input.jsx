import { useState } from 'react';
import styles from "./Input.module.css";
import PropTypes from 'prop-types';

export function Input(props) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const selectClass = props.isClass ? styles.inputFooter : styles.inputForm;


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <input
            className={`${styles.inputForm} ${selectClass} ${isFocused ? styles.inputTextCenter : ''} ${inputValue && styles.inputTextCenter}`}
            type={props.type}
            name={props.name}
            value={inputValue}
            placeholder={isFocused ? '' : props.placeholder}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
        />
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isClass: PropTypes.string.isRequired,

};
