import PropTypes from 'prop-types';
import styles from './text.module.css'

export function Text(props) {
    const fontSize = props.isSize ? styles.fontSize : styles.styleText;

    const color = {
        color: props.color
    }
    return (
        <p className={`${styles.styleText} ${fontSize}`} style={color}>{props.text}</p>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    isSize: PropTypes.string.isRequired,
};
