import styled from './style/TrendingCollection.module.css';
import CollectionCard from './CollectionCard';

// eslint-disable-next-line react/prop-types
function CollectionSlider({ mainImage, frameImage1, frameImage2, frameTitle, title, artistImage }) {
  return (
    <div className={styled.CollectionSlider}>
      <CollectionCard
        mainImage={mainImage}
        frameImage1={frameImage1}
        frameImage2={frameImage2}
        frameTitle={frameTitle}
        title={title}
        artistImage={artistImage}
      />
    </div>
  );
}

export default CollectionSlider;

