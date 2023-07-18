import styles from './Works.module.css';
import PropTypes from 'prop-types';
import Icon from './../../../assets/images/Icon.png';

const InfoCard = (props) => {

    return (
        <div className={styles.infoCard}>
            <div className={styles.imgContainer}>
                <img src={Icon} className={styles.SizeImage} />
            </div>
            <div className={styles.CardDetails}>
                <h6>{props.title}</h6>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default InfoCard;
