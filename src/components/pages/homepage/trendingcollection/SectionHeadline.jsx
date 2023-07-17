import SectionHeadlineText from "./SectionHeadlineText";
import CollectionSlider from "./CollectionSlider";
import style from "./style/TrendingCollection.module.css";

function SectionHeadline() {
  return (
    <div className={style.sectionheadline}>
      <SectionHeadlineText
        title="Trending Collection"
        text="Checkout our weekly updated trending collection."
      />
      <div className={style.collectionMobile}>
        <CollectionSlider
          mainImage="src/assets/images/psychoDog.jpg"
          frameImage1="src/assets/images/catFromFuture.jpg"
          frameImage2="src/assets/images/designerBear.jpg"
          frameTitle="1025+"
          title="DSGN Animals"
          artistImage="src\assets\images\avatar\Artist Card-cat.png"
        />
      </div>
      <div className={style.collectionTablet}>
        <CollectionSlider
          mainImage="src\assets\images\Primary Photo Placeholder.png"
          frameImage1="src\assets\images\Secondary Photo Placeholder.png"
          frameImage2="src\assets\images\Secondary Photo Placeholder (1).png"
          frameTitle="6+"
          title="Magic Mushrooms"
          artistImage="src\assets\images\avatar\Artist Card.png"
        />
      </div>
      <div className={style.collectionDesktop}>
        <CollectionSlider
          mainImage="src\assets\images\dancingRobot0512.jpg"
          frameImage1="src\assets\images\dancingRobot0521.jpg"
          frameImage2="src\assets\images\dancingRobot0356-0987.jpg"
          frameTitle="1025+"
          title="Disco Machines"
          artistImage="src\assets\images\avatar\Artist Card (1).png"
        />
      </div>
    </div>
  );
}

export default SectionHeadline;
