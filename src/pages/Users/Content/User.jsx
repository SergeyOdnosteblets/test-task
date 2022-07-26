import React from 'react';
import { Link } from 'react-router-dom';
import { geo } from '../../../utils/geo';
import { randomAvatar } from '../../../utils/randomAvatar';
import styles from './User.module.scss';
import moreInfo from '../../../images/Users/Vector.png';

export const User = ({ state, coordinate }) => {
  return (
    <div>
      {state.map((item, id) => (
        <Link to={`/users/${id}`} className={styles.users} key={id}>
          <div className={styles.user__info}>
            <div className={styles.user__avatar}>
              <img src={require(`../../../images/Users/avatars/${randomAvatar()}.png`)} alt="" />
            </div>
            <div className={styles.user__details}>
              <div className={styles.user__name}>{item.name}</div>
              <div className={styles.user__city}>{item.address.city}</div>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.company__name}>{item.company.name}</div>
            <div className={styles.company__catchPhrase}>{item.company.catchPhrase}</div>
          </div>
          <div className={styles.email}>
            <div className={styles.email__info}>{item.email}</div>
            <div className={styles.email__website}>{item.website}</div>
          </div>
          <div className={styles.distance}>
            <div>
              {geo(
                coordinate.latitude,
                coordinate.longitude,
                item.address.geo.lat,
                item.address.geo.lng,
              )}
            </div>
            <div className={styles.moreInfo}>
              <img src={moreInfo} alt="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
