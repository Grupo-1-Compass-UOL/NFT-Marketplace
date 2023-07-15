function TrendingCollection() {
  return (
    <div className="TrendingCollection">
      <div className="sectionHeadline">
        <h1>Trending Collection</h1>
        <h4>Checkout our weekly updated trending collection.</h4>
      </div>
      <div className="CollectionSlider">
        <div className="CollectionCard">
          <div className="PhotosNumbers">
            <img src="src\assets\images\psychoDog.jpg"></img>
          </div>
          <div className="CollectionInfo">
            <div className="ArtistCard">
              <img src="src\assets\images\catFromFuture.jpg"></img>
              <img src="src\assets\images\designerBear.jpg"></img>
            </div>
            <div>
              <h4>DSGN Animals</h4>
              <img src='src\assets\images\avatar\Artist Card-cat.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCollection;
