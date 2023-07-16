import PropTypes from "prop-types";
import styled from './style/TopRatedArtists.module.css'

function SectionHeadlineButtonText(props) {
  return (
    <div className={styled.SectionHeadlinebuttontext}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
  )
}

SectionHeadlineButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default SectionHeadlineButtonText