import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import s from './FriendList.module.scss'

function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            <h2 className={s.title}>Friendslist</h2>
            {friends.map(friend => (
                <li key={friend.id} className={s.firendListItem}>
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