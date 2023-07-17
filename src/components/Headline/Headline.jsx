import styles from "./Headline.module.css";
import PropTypes from "prop-types";

const Headline = ({ title, description }) => { 
  return (
    <div className={styles.headline}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Headline;

