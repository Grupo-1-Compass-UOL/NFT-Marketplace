import SectionHeadline from "./SectionHeadline";
import style from "./style/TrendingCollection.module.css";
import { Link } from "react-router-dom";

function TrendingCollection() {
  return (
    <Link to="/NFTPage">
    <div className={style.TrendingCollection}>
      <SectionHeadline />
    </div>
    </Link>
  );
}

export default TrendingCollection;
