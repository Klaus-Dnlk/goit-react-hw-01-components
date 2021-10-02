import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss'

function TransactionItem({ type, amount, currency }) {
   return (
       <>
        <td className={s.td}>{type}</td>
        <td className={s.td}>{amount}</td>
        <td className={s.td}>{currency}</td>
       </>
   ) 
}

TransactionItem.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default TransactionItem