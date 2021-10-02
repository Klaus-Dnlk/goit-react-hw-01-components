import PropTypes from 'prop-types';
import s from './FriendList.module.scss'

function FriendItem({ name, avatar, status }) {
    
return (
<>
{status ?   <div className={s.online}>
                <img className={s.avatar} src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </div>
        :   <div className={s.offline}>
                <img className={s.avatar} src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </div>}
    
</>
)
}

FriendItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.bool,
}


export default FriendItem