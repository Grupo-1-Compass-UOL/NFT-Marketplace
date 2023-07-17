import style from './style/TrendingCollection.module.css';
import PhotoNumbersFrame from './PhotoNumbersFrame';

// eslint-disable-next-line react/prop-types
function PhotosNumbers({ mainImage, frameImage1, frameImage2, frameTitle }) {
  return (
    <div className={style.PhotosNumbers}>
      <img src={mainImage} alt="Main Image" />
      <PhotoNumbersFrame
        image1={frameImage1}
        image2={frameImage2}
        title={frameTitle}
      />
    </div>
  );
}

export default PhotosNumbers;
