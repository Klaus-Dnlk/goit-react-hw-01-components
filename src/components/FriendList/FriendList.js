import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendItem
                      name={friend.name}
                      avatar={friend.avatar}
                      status={friend.isOnline}  
                    />
                </li>
            ))}
        </ul>
    )
} 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })) 
}


export default FriendList