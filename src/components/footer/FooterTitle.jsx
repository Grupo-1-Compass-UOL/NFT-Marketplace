import PropTypes from 'prop-types';
import footerTitleStyles from './footer.module.css'

export function FooterTitle(props) {

    return <h5 className={footerTitleStyles.footerTitle} >{props.title}</h5>;
}

FooterTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
