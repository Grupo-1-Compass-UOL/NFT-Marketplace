import ArttistCadarsRow from "./ArtistCardsRow";
import Button from "./Button";
import SectionHeadlineButton from "./SectionHeadlineButton";
import style from "./style/TopRatedArtists.module.css";

function TopRatedArtists() {
  return (
    <div className={style.TopRatedArtists}>
      <SectionHeadlineButton />
      <div className={style.TopRatedArtists_1}>
      <ArttistCadarsRow
        rank="1"
        artistImage="src\assets\images\avatar\Avatar1.png"
        artistName="Keepitreal"
        totalSales="34.53"
      />
      <ArttistCadarsRow
        rank="2"
        artistImage="src\assets\images\avatar\Avatar-2 (2).png"
        artistName="DigiLab"
        totalSales="32.13"
      />
      </div>
      <div className={style.TopRatedArtists_2}>
      <ArttistCadarsRow
        rank="3"
        artistImage="src\assets\images\avatar\Avatar-2 (1).png"
        artistName="GravityOne"
        totalSales="28.93"
      />
      <ArttistCadarsRow
        rank="4"
        artistImage="src\assets\images\avatar\Avatar (2).png"
        artistName="Juanie"
        totalSales="25.30"
      />
      </div>
      <div className={style.TopRatedArtists_3}>
      <ArttistCadarsRow
        rank="5"
        artistImage="src\assets\images\avatar\Avatar (3).png"
        artistName="BlueWhale"
        totalSales="22.22"
      />
      <div className={style.TopRatedArtists_tablet}>
      <ArttistCadarsRow
        rank="6"
        artistImage="src\assets\images\avatar\Avatarcat.png"
        artistName="Mr Fox"
        totalSales="19.28"
      />
      </div>
      </div>
      <Button />
    </div>
  );
}

export default TopRatedArtists;
