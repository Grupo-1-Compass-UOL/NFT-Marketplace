import PropTypes from "prop-types";
import styled from "./style/HeroSection.module.css";

function HeadlineSubheadText(props) {
  return (
    <div className={styled.textframe}>
      <h1>{props.title}</h1>
      <p className="NFT-text">{props.text}</p>
    </div>
  );
}

HeadlineSubheadText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeadlineSubheadText;
