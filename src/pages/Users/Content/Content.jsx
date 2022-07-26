import React, { useState, useEffect } from 'react';
import styles from './Content.module.scss';
import { User } from './User';
import sort from '../../../images/Users/sort.png';

export const Content = () => {
  const [state, setstate] = useState();
  const [loading, setLoading] = useState(false);
  const [coordinate, setCoordinate] = useState();
  const [loadingCoordinate, setLoadingCoordinate] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => {
        setstate(result);
        setLoading(true);
      });
  }, []);

  useEffect(() => {
    fetch(
      'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en',
    )
      .then((res) => res.json())
      .then((result) => {
        setCoordinate(result);
        setLoadingCoordinate(true);
      });
  }, []);

  return (
    <div className={styles.table}>
      <div className={styles.table__info}>
        <div className={styles.table__info__text}>All users</div>
        <div className={styles.table__info__sort}>
          <div className={styles.sort__icon}>
            <img src={sort} alt="sort" />
          </div>
          <div className={styles.sort__text}>Sort</div>
        </div>
      </div>
      <div className={styles.table__title}>
        <div className={styles.table__title__details}>User details</div>
        <div className={styles.table__title__company}>Company name</div>
        <div className={styles.table__title__email}>Email</div>
        <div className={styles.table__title__distance}>Distance</div>
      </div>
      {loading && loadingCoordinate && <User state={state} coordinate={coordinate} />}
    </div>
  );
};
