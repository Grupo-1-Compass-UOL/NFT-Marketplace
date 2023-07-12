import styled from "./style/HeroSection.module.css";

function AddInfo() {
  return (
    <div className={styled.addinfo}>
      <div className={styled.addinfoframe1}>
        <h3>240k+ </h3>
        <p>Total Sale</p>
      </div>
      <div className={styled.addinfoframe2}>
        <h3>100k+ </h3>
        <p>Auctions</p>
      </div>
      <div className={styled.addinfoframe3  }>
        <h3>240k+ </h3>
        <p>Artists</p>
      </div>
    </div>
  );
}

export default AddInfo;
