import PropTypes from "prop-types";

function ArtistCard(props) {
  return (
    <div className="ArtistsCard">
        <img src={props.avatar} alt="Artist" />
        <h4>{props.name}</h4>
        <p>{props.totalsales}</p>
        <span>{props.ranking}</span>
            </div>
  )
}

ArtistCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalsales: PropTypes.string.isRequired,
    ranking: PropTypes.string.isRequired,
}

export default ArtistCard