import PropTypes from 'prop-types';

//import './HeadlineSubheadText.css';

function HeadlineSubheadText(props) {
    return (
        <div className='hero-section-frame'>
            <h1>{props.title}</h1>
            <p className='NFT-text'>{props.text}</p>
        </div>
    );
}

HeadlineSubheadText.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default HeadlineSubheadText;
