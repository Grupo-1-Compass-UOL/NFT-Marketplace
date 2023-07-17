import styled from './style/TrendingCollection.module.css';
import PhotosNumbers from './PhotosNumbers';
import CollectionInfo from './CollectionInfo';

// eslint-disable-next-line react/prop-types
function CollectionCard({ mainImage, frameImage1, frameImage2, frameTitle, title, artistImage }) {
  return (
    <div className={styled.CollectionCard}>
      <PhotosNumbers
        mainImage={mainImage}
        frameImage1={frameImage1}
        frameImage2={frameImage2}
        frameTitle={frameTitle}
      />
      <CollectionInfo
        title={title}
        artistImage={artistImage}
      />
    </div>
  );
}

export default CollectionCard;
