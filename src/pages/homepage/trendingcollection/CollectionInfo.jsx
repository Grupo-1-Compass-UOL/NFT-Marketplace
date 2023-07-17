// eslint-disable-next-line react/prop-types
function CollectionInfo({ title, artistImage }) {
  return (
    <div className="CollectionInfo">
      <div className="ArtistCard">
        {/* Your ArtistCard component content */}
      </div>
      <div>
        <h4>{title}</h4>
        <img src={artistImage} alt="Artist" />
      </div>
    </div>
  );
}

export default CollectionInfo;
