import PropTypes from "prop-types";
import styled from "./style/TrendingCollection.module.css";

function SectionHeadlineText(props) {
  return (
    <div className={styled.textframe}>
      <h1>{props.title}</h1>
      <p className="TextHeadline">{props.text}</p>
    </div>
  );
}

SectionHeadlineText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SectionHeadlineText;