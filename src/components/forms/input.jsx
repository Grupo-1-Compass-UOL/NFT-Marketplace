import styles from "./Input.module.css";
import PropTypes from 'prop-types';

function Input(props) {
    const selectClass = props.isClass ? styles.inputFooter : styles.inputForm;
    const image = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: 'cover',
    };


    return (
        <input
            className={`${styles.inputForm} ${selectClass} `}
            type={props.type}
            name={props.name}
            value={props.value}
            style={image}
            placeholder={props.placeholder}
            onChange={props.onChange}
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
    onChange: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
