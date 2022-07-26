import React from 'react';
import styles from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.cards__list}>
        <li className={styles.card__item}>
          <div className={styles.card__text}>Active</div>
          <div className={styles.card__number}>60</div>
        </li>
        <li className={styles.card__item}>
          <div className={styles.card__text}>Online</div>
          <div className={styles.card__number}>16</div>
        </li>
        <li className={styles.card__item}>
          <div className={styles.card__text}>Filtered</div>
          <div className={styles.card__number}>43</div>
        </li>
        <li className={styles.card__item}>
          <div className={styles.card__text}>Banned</div>
          <div className={styles.card__number}>64</div>
        </li>
      </ul>
    </div>
  );
};
