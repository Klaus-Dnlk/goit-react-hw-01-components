import PropTypes from 'prop-types';

function TransactionItem({ type, amount, currency }) {
   return (
       <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
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