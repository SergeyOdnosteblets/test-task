import React from 'react';
import { Cards } from './Cards/Cards';
import { Content } from './Content/Content';
import { Tasks } from './Tasks/Tasks';
import { Tickets } from './Tickets/Tickets';

import styles from './index.module.scss';

export const Users = () => {
  return (
    <div>
      <Cards />
      <Content />
      <div className={styles.ticketsAndTasks}>
        <Tickets />
        <Tasks />
      </div>
    </div>
  );
};
