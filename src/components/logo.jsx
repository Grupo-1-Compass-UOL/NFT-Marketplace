import { LogoIcon } from './img/logoIcon';
import PropTypes from 'prop-types';
import './logo.css';
import './title.css';

export function Logo(props) {
    return (
        <div className='logo-container'>
            <LogoIcon />
            <img src="./nav-nav-storefront" alt="" />
            <h5 className={`logo-title ${props.isFooter ? 'title' : ''}`}>
                NFT Marketplace
            </h5>
        </div>
    );
}

Logo.propTypes = {
    isFooter: PropTypes.bool, // Add this line to validate the 'isFooter' prop
};