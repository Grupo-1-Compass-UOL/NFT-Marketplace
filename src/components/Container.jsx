import styles from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({children}) => {
  return <div style={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
