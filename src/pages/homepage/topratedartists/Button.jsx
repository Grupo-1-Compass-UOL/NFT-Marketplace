import RocketLaunchNevativo from "../../../assets/images/img/RocketLaunchNegativo";
import styled from "./style/TopRatedArtists.module.css";
import { Link } from "react-router-dom"
function Button() {
  return (
    <div className={styled.button}>
      <Link to="/rankings">
        <button>
            <RocketLaunchNevativo />
            View Rankings
        </button>
      </Link>
    </div>
  );
}

export default Button;
