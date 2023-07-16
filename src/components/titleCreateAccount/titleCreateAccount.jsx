import PropTypes from 'prop-types';
import styles from './titleCreateAccount.module.css';

export function TitleCreateAccount(props) {
    return <h3 className={styles.titleCreateAccount}>{props.title}</h3>;
}

TitleCreateAccount.propTypes = {
    title: PropTypes.string.isRequired,
}
