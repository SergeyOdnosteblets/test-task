import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tasks.module.scss';

import inactive from '../../../images/Users/inactive.png';

import gray from '../../../images/Users/gray.png';
import success from '../../../images/Users/success.png';
import warning from '../../../images/Users/warning.png';

export const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__header}>
        <div className={styles.tasks__title}>
          <div className={styles.tasks__title__text}>Tasks</div>
          <div className={styles.tasks__title__support}>Today</div>
        </div>
        <Link className={styles.tasks__details} to="">
          View all
        </Link>
      </div>
      <div className={styles.unresolved_tasks}>
        <div className={styles.unresolved_tasks__item}>
          <div className={styles.create__new__task}>Create new task</div>
          <div className={styles.create__new__task__icon}>
            <img src={inactive} alt="" />
          </div>
        </div>

        <div className={styles.unresolved_tasks__item}>
          <div className={styles.unresolved_tasks__item__info}>
            <input className={styles.tasks__item__checkbox} type="checkbox" value=""></input>
            <div className={styles.tasks__item__text}>Finish ticket update</div>
          </div>
          <div className={styles.tasks__item__button}>
            <img src={warning} alt="" />
          </div>
        </div>

        <div className={styles.unresolved_tasks__item}>
          <div className={styles.unresolved_tasks__item__info}>
            <input className={styles.tasks__item__checkbox} type="checkbox" value=""></input>
            <div className={styles.tasks__item__text}>Create new ticket example</div>
          </div>
          <div className={styles.tasks__item__button}>
            <img src={success} alt="" />
          </div>
        </div>

        <div className={styles.unresolved_tasks__item}>
          <div className={styles.unresolved_tasks__item__info}>
            <input className={styles.tasks__item__checkbox} type="checkbox" value=""></input>
            <div className={styles.tasks__item__text}>Update ticket report</div>
          </div>
          <div className={styles.tasks__item__button}>
            <img src={gray} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
