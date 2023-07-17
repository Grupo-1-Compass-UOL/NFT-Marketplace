import PropTypes from 'prop-types';
import './title.css'

export function Title({ title }) {

    return <h5 className="title" >{title}</h5>;
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};
