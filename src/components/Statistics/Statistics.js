import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import Section from './Section';
import s from './Statistics.module.scss'

function Statisctics ({ stats }) {
    return (
        <section className={s.statistics}>
            <Section title="Upload stats"/>
            <ul className={s.statList}>
                {stats.map(item => (
                    <li key={item.id} className={s.statListItem}>
                        <StatisticItem
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statisctics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}


export default Statisctics;