import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';


function TransactionHistory ({ items }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
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