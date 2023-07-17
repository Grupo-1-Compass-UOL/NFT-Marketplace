import RocketLaunch from "../../../assets/images/img/RocketLaunch";
import styled from "./style/HeroSection.module.css";
import { Link } from "react-router-dom";

function HeadlineSubheadButton() {
  return (
    <Link to='/createaccount'>
    <div className={styled.btnheadlinesubhead}>
      <button>
        <RocketLaunch />
        Get Started
      </button>
    </div>
    </Link >
  );
}

export default HeadlineSubheadButton;
