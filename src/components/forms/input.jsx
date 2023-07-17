import { useState } from 'react';
import styles from "./Input.module.css";
import PropTypes from 'prop-types';

export function Input(props) {
    const [inputValue, setInputValue] = useState('');
    const selectClass = props.isClass ? styles.inputFooter : styles.inputForm;
    const image = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: 'cover',
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            className={`${styles.inputForm} ${selectClass} `}
            type={props.type}
            name={props.name}
            value={inputValue}
            style={image}
            placeholder={props.placeholder}
            onChange={handleInputChange}

        />
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isClass: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
