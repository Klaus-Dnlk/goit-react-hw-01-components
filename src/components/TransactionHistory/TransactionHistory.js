import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss'


function TransactionHistory ({ items }) {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.tableHead}>
                <tr >
                    <th className={s.th}>Type</th>
                    <th className={s.th}>Amount</th>
                    <th className={s.th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(element => (
                    <tr key={element.id} className={s.element}>
                        <td className={s.td}>{element.type}</td>
                        <td className={s.td}>{element.amount}</td>
                        <td className={s.td}>{element.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
}


export default TransactionHistory 