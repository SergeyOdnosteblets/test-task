import React from 'react';
import styles from './Header.module.scss';
import avatar from '../../images/Header/ava.svg';
import search from '../../images/Header/search.png';
import notifications from '../../images/Header/new.png';

const menu = [
  'Overview',
  'Users',
  'Ideas',
  'Contacts',
  'Agents',
  'Articles',
  'Settings',
  'Subscription',
];

export const Header = ({ item }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{menu[item]}</div>
      <div className={styles.header__icons}>
        <div className={styles.search}>
          <img src={search} alt="search" />
        </div>
        <div className={styles.notifications}>
          <img src={notifications} alt="notifications" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Jones Ferdinand</div>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
