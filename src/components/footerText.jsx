import PropTypes from 'prop-types';

export function FooterText(props) {
    return (
        <p className='footer-text'>{props.text}</p>
    );
}

FooterText.propTypes = {
    text: PropTypes.string.isRequired,
};
