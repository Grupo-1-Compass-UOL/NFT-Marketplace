import style from "./style/TopRatedArtists.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ArtistCardsRow({ artistImage, artistName, totalSales, rank }) {
  return (
    <Link to="/artistpage">
    <div className={style.artistCard}>
      <span>{rank}</span>
      <img src={artistImage} alt="Artist" />
      <h2>{artistName}</h2>
      <p>Total Sales:</p>
      <h4>{totalSales} ETH</h4> 
    </div>
    </Link>
  );
}

export default ArtistCardsRow;
