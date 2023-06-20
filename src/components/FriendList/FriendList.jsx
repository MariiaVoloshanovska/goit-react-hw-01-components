
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};



// import PropTypes from 'prop-types';
// import { FriendListItem } from 'components/FriendListItem/FriendListItem';
// export const FriendList = ({ friends }) => {
//   return (
//     <ul >
//       FriendList
//     </ul>
//   );
// };
// FriendList.propTypes = {
//   friends: PropTypes.array.isRequired,
// };


