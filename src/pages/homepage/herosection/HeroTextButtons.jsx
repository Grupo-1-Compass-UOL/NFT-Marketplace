import HeadlineSubhead from "../herosection/HeadlineSubhead";
import HighlightedNft from "./HighlightedNft";
import HeadlineSubheadButton from "./HeadlineSubheadButton";
import AddInfo from "./AddInfo";
import styled from "./style/HeroSection.module.css";

function HeroTextButtons() {
  return (
    <div className={styled.HeadlineSubheadButton}>
      <HeadlineSubhead />
      <HighlightedNft />
      <HeadlineSubheadButton />
      <AddInfo />
    </div>
  );
}

export default HeroTextButtons;
