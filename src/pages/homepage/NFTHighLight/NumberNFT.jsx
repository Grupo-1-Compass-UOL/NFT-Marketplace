import classes from './nfthighlight.module.css';
import PropTypes from 'prop-types';

const NumberNFT = (props) => {
    return (
        <div className={classes.styleNumber}>
            <h3>{props.number}</h3>
            <p>{props.text}</p>
        </div>
    );
};

NumberNFT.propTypes = {
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default NumberNFT;
