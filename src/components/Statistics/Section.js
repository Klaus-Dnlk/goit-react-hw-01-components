import PropTypes from 'prop-types';

function Section({ title }) {
    return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
    </section> 
    )
}

Section.prototype = {
    title: PropTypes.string,
}

export default Section