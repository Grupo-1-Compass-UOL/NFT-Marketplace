import PropTypes from 'prop-types';
import styles from './ButtonWallet.module.css'


export function ButtonWallet(props) {
    return (
        <button className={styles.btnWallet}>{props.image}{props.name}</button>
    )
}

ButtonWallet.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

}
