import HeroTextButtons from "../herosection/HeroTextButtons";
import styled from "./style/HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styled.herosection}>
      <div className={styled.herosectionframe}>
        <div className={styled.herotextbuttons}>
          <HeroTextButtons />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
