import PropTypes from "prop-types";
import styles from "./TopCreatorItem.module.css";

const TopCreatorItem = (props) => {
  const {position, image, name, change, numberSold, volumeSold} = props;

  return (
    <li className={styles.creator}>
      <div className={styles.creator__position}>{position}</div>
      <div className={styles.creator__card}>
        <div className={styles.creator__avatar}>
          <img src={image.src} alt={image.alt} />
        </div>
        <div className={styles.creator__name}>{name}</div>
      </div>
      <div className={styles.creator__change}>{change}</div>
      <div className={styles.creator__number_sold}>{numberSold}</div>
      <div className={styles.creator__volume_sold}>{volumeSold}</div>
    </li>
  );
};

TopCreatorItem.propTypes = {
  position: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  numberSold: PropTypes.number.isRequired,
  volumeSold: PropTypes.string.isRequired,
};

export default TopCreatorItem;

