import React from 'react';
import UserStat from '../UserStat/UserStat';
import styles from './UserCard.module.scss';
import { LocalGithubUser } from '../../types/user';

interface UserCardProps extends LocalGithubUser {}

const UserCard: React.FC<UserCardProps> = (props) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);

export default UserCard;
