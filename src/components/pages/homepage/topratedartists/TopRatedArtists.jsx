import ArttistCadarsRow from "./ArtistCardsRow";
import Button from "./Button";
import SectionHeadlineButton from "./SectionHeadlineButton";

function TopRatedArtists() {
  return (
    <div className="TopRatedArtists">
        <SectionHeadlineButton />
        <ArttistCadarsRow />
        <Button />
    </div>
  )
}

export default TopRatedArtists