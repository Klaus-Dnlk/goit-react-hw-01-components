import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

function Statisctics ({ stats }) {
    return (
        <section className="statistics">
            <ul className="stat-list">
                {stats.map(item => (
                    <li key={item.id}>
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