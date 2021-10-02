import PropTypes from 'prop-types';

function FriendItem({ name, avatar, status }) {
    return (
        <div>
            <span className="status">{status}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </div>
    )
}

FriendItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.bool,
}


export default FriendItem