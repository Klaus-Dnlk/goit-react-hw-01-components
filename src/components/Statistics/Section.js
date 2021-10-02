import PropTypes from 'prop-types';
import s from './Statistics.module.scss'

function Section({ title }) {
    return (
    <section className={s.title}>
        {title && <h2>{title}</h2>}
    </section> 
    )
}

Section.prototype = {
    title: PropTypes.string,
}

export default Section