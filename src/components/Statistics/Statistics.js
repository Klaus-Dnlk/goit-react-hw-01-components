import PropTypes from 'prop-types';
import s from './Statistics.module.scss'

function Statistics ({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title ? <h2 className={s.title}>{title}</h2> : <h2 style={{display: 'none'}}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(itemStats => (
                    <li className={s.statListItem} key={itemStats.id} 
                    style={{backgroundColor:`rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})` }}
                    >
                        <span className={s.label}>{itemStats.label}</span>
                        <span className={s.percentage}>{itemStats.percentage}%</span>
                </li>  
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min)
  }


export default Statistics;