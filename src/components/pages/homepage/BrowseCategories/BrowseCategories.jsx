import CategoryCard from "./CategoryCard";
import style from "./style/BrowseCategaries.module.css";

function BrowseCategories() {
  return (
    <div className={style.BrowseCategories}>
      <div className={style.BrowseCategories__container}>
        <h1>BrowseCategories</h1>
      </div>
      <div className={style.BrowseCategories__img}>
        <div className={style.BrowseCategories__table__desktop}>
          <div className={style.BrowseCategories__img__container}>
            <CategoryCard
              categoryImage="src/assets/images/Category Icon.png"
              categoryName="Art"
            />
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (1).png"
              categoryName="Collectibles"
            />
          </div>
          <div className={style.BrowseCategories__img__container2}>
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (2).png"
              categoryName="Music"
            />
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (3).png"
              categoryName="Photography"
            />
          </div>
        </div>
        <div className={style.BrowseCategories__table__desktop2}>
          <div className={style.BrowseCategories__img__container3}>
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (4).png"
              categoryName="Video"
            />
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (5).png"
              categoryName="Utility"
            />
          </div>
          <div className={style.BrowseCategories__img__container4}>
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (6).png"
              categoryName="Sport"
            />
            <CategoryCard
              categoryImage="src\assets\images\Category Icon (7).png"
              categoryName="Virtual Worlds"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
