import PropTypes from 'prop-types';
import styles from './TitleCreateAccount.module.css';

function TitleCreateAccount(props) {
    return <h3 className={styles.titleCreateAccount}>{props.title}</h3>;
}

TitleCreateAccount.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TitleCreateAccount