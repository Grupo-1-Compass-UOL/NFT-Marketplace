import PropTypes from "prop-types";
import TopCreatorItem from "./TopCreatorItem";
import TopCreatorHeader from "./TopCreatorHeader";
import styles from "./TopCreatorList.module.css";

export const TopCreatorList = ({creators}) => {
  return (
    <ol className={styles.top_creators}>
      <TopCreatorHeader />
      {creators.map((creator, index) => (
        <TopCreatorItem
          key={index}
          position={creator.position}
          image={creator.image}
          name={creator.name}
          change={creator.change}
          numberSold={creator.numberSold}
          volumeSold={creator.volumeSold}
        />
      ))}
    </ol>
  );
}

TopCreatorList.propTypes = {
  creators: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      image: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired,
      change: PropTypes.string.isRequired,
      numberSold: PropTypes.number.isRequired,
      volumeSold: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopCreatorList;
