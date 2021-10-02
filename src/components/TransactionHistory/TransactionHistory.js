import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
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
                  <tr key={element.id}>
                      <TransactionItem
                        type={element.type}
                        amount={element.amount}
                        currency={element.currency}
                      />
                  </tr>                      
               ))}
            </tbody>         
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired 
    }))   
}


export default TransactionHistory 