import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tickets.module.scss';

export const Tickets = () => {
  return (
      <div className={styles.tickets}>
        <div className={styles.tickets__header}>
          <div className={styles.tickets__title}>
            <div className={styles.tickets__title__text}>Unresolved tickets</div>
            <div className={styles.tickets__title__support}>
              Group: <strong>Support</strong>
            </div>
          </div>
          <Link className={styles.tickets__details} to="">
            View details
          </Link>
        </div>
        <div className={styles.unresolved_tickets}>
          <div className={styles.unresolved_tickets__item}>
            <div className={styles.tickets__item__text}>Waiting on Feature Request</div>
            <div className={styles.tickets__item__number}>4238</div>
          </div>

          <div className={styles.unresolved_tickets__item}>
            <div className={styles.tickets__item__text}>Awaiting Customer Response</div>
            <div className={styles.tickets__item__number}>1005</div>
          </div>

          <div className={styles.unresolved_tickets__item}>
            <div className={styles.tickets__item__text}>Awaiting Developer Fix</div>
            <div className={styles.tickets__item__number}>914</div>
          </div>

          <div className={styles.unresolved_tickets__item}>
            <div className={styles.tickets__item__text}>Pending</div>
            <div className={styles.tickets__item__number}>281</div>
          </div>
        </div>
      </div>
  );
};
