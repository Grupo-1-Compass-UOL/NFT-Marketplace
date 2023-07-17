import RocketLaunchNevativo from "../../../../assets/images/img/RocketLaunchNegativo";
import styled from "./style/TopRatedArtists.module.css";

function Button() {
  return (
    <div className={styled.button}>
      <button>
          <RocketLaunchNevativo />
          View Rankings
      </button>
    </div>
  );
}

export default Button;
