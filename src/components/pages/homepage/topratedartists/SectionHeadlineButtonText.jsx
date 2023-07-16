import PropTypes from "prop-types";

function SectionHeadlineButtonText(props) {
  return (
    <div className="SectionHeadlinebuttontext">
        <h1>{props.title}</h1>
        <p className="TextHeadline">{props.text}</p>
    </div>
  )
}

SectionHeadlineButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default SectionHeadlineButtonText