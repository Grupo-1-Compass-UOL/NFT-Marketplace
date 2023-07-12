import styled from "./style/HeroSection.module.css";

function HighlightedNft() {
  return (
    <div className={styled.nft}>
      <div className={styled.nftimag}>
        <img
          className="NFT"
          src=".\src\assets\images\image-placeholder-homepage.png"
          alt="NTF-homepage"
        ></img>
      </div>
      <div className={styled.avatar}>
        <p>Space Walking</p>
        <img
          className="avatar"
          src=".\src\assets\images\avatar\artist-card.png"
          alt="Avatar-Animakid"
        ></img>
      </div>
    </div>
  );
}

export default HighlightedNft;
