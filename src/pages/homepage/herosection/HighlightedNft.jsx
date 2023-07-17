import styled from "./style/HeroSection.module.css";

function HighlightedNft() {
  return (
    <div className={styled.box}>
      <div className={styled.highlightedNFTwrapper}>
        <div className={styled.highlightedNFT} />
      </div>
    </div>
  );
}

export default HighlightedNft;
