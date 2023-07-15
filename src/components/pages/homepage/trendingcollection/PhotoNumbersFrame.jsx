import style from './style/TrendingCollection.module.css';

// eslint-disable-next-line react/prop-types
function PhotoNumbersFrame({ image1, image2, title }) {
  return (
    <div className={style.Frame}>
      <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" />
      <p>{title}</p>
    </div>
  );
}

export default PhotoNumbersFrame;
