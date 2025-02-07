import React from 'react';
import UserStat from '../UserStat/UserStat';
import styles from './UserCard.module.scss';
import { LocalGithubUser } from '../../types/user';
import UserTitle from '../UserTitle/UserTitle';
import UserInfo from '../UserInfo/UserInfo';

interface UserCardProps extends LocalGithubUser {}

const UserCard: React.FC<UserCardProps> = (props) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />

    <UserTitle name={props.name} login={props.login} created={props.created} />

    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>

    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />

    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);

export default UserCard;
