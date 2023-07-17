import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TabBar.module.css';

const TabBar = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
      <ul className={styles.tab_bar}>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? styles.active : ''}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
  );
};

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultTab: PropTypes.string.isRequired,
};

export default TabBar;

