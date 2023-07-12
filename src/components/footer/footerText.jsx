import PropTypes from 'prop-types';
import footerTextStyles from './footer.module.css'

export function FooterText(props) {
    return (
        <p className={footerTextStyles.footerText}>{props.text}</p>
    );
}

FooterText.propTypes = {
    text: PropTypes.string.isRequired,
};
