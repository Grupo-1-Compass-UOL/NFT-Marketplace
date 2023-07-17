import PropTypes from "prop-types";
import styled from "./style/SubscribeWidget.module.css";

function SubscribeHeadlineText(props) {
    return (
        <div className={styled.textframe}>
            <h1>{props.title}</h1>
            <p className="TextHeadline">{props.text}</p>
        </div>
    );
}

SubscribeHeadlineText.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SubscribeHeadlineText;