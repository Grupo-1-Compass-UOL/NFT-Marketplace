import RocketLaunch from "../../../../assets/images/img/RocketLaunch";
import styled from "./style/HeroSection.module.css";

function HeadlineSubheadButton() {
  return (
    <div className={styled.btnheadlinesubhead}>
      <button>
        <RocketLaunch />
        Get Started
      </button>
    </div>
  );
}

export default HeadlineSubheadButton;
