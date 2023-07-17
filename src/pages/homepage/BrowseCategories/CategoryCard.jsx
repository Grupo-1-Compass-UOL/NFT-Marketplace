import style from './style/BrowseCategaries.module.css'

// eslint-disable-next-line react/prop-types
function CategoryCard({ categoryImage, categoryName }) {
  return (
    <div className={style.CategoryCard}>
      <img src={categoryImage} alt="Category" />
      <h6>{categoryName}</h6>
    </div>
  );
}

export default CategoryCard;
