import PropTypes from 'prop-types';
import styles from './text.module.css'

export function Text(props) {
    return (
        <p className={styles.styleText}>{props.text}</p>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
};
