import low from '../images/Users/low.png';
import high from '../images/Users/high.png';
import normal from '../images/Users/normal.png';

import styles from './geo.module.scss'

function deg2rad(num) {
  return (num * Math.PI) / 180;
}

export const geo = (lat_1, lon_1, lat_2, lon_2) => {
  const radius_earth = 6371;

  const lat1 = deg2rad(lat_1);
  const lon1 = deg2rad(lon_1);
  const lat2 = deg2rad(lat_2);
  const lon2 = deg2rad(lon_2);

  const result =
    2 *
    radius_earth *
    Math.asin(
      Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2,
      ),
    );

  if (result < 10000) {
    return (
        <img className={styles.distance} src={low} alt="low" />
    );
  }
  if (result >= 10000 && result < 13000) {
    return (
        <img className={styles.distance} src={normal} alt="normal" />
    );
  } else {
    return (
        <img className={styles.distance} src={high} alt="high" />
    );
  }
};
