import SectionHeadlineButtonText from "./SectionHeadlineButtonText";
import syled from "./style/TopRatedArtists.module.css";

function SectionHeadlineButton() {
  return (
    <div className={syled.SectionHeadlineButton}>
      <SectionHeadlineButtonText
        title="Top creators"
        text="Checkout Top Rated Creators on the NFT Marketplace"
      />
    </div>
  );
}

export default SectionHeadlineButton;
