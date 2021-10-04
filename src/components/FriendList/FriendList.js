import PropTypes from 'prop-types';
import s from './FriendList.module.scss'

function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li className={s.friendListItem} key={friend.id} >
                    {friend.isOnline ?
                        <span className={s.status} style={{ backgroundColor: 'green' }} > </span>
                        : <span className={s.status} style={{ backgroundColor: 'red' }} ></span>}
                    <img className="avatar" src={friend.avatar} alt={friend.name} width="48"/>
                    <p className={s.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
} 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
    }))
}


export default FriendList