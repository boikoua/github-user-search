import React from 'react';
import { ReactComponent as CompanyIcon } from './../../assets/icon-company.svg';
import { ReactComponent as LocationIcon } from './../../assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from './../../assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from './../../assets/icon-website.svg';

import { LocalGithubUser } from '../../types/user';
import styles from './UserInfo.module.scss';
import { InfoItemProps } from '../InfoItem';
import InfoItem from '../InfoItem/InfoItem';

interface UserInfoProps
  extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

const UserInfo: React.FC<UserInfoProps> = ({
  blog,
  company,
  location,
  twitter,
}) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location || 'Not Available',
    },
    {
      icon: <BlogIcon />,
      text: blog || 'Not Available',
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter || 'Not Available',
    },
    {
      icon: <CompanyIcon />,
      text: company || 'Not Available',
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserInfo;
