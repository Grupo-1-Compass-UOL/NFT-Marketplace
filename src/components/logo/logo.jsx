import { LogoIcon } from '../../assets/images/img/logoIcon';
import logoStyles from './logo.module.css';
import footerTitleStyles from '../footer/footer.module.css'
import PropTypes from 'prop-types';

export function Logo(props) {
    return (
        <div className={logoStyles.logoContainer}>
            <LogoIcon isFooter={props.isFooter} />
            <img src="./nav-nav-storefront" alt="" />
            <h5 className={props.isFooter ? `${logoStyles.logoTitle} ${footerTitleStyles.footerTitle}` : logoStyles.logoTitle}>
                NFT Marketplace
            </h5>
        </div>
    );
}

Logo.propTypes = {
    isFooter: PropTypes.bool.isRequired,
};