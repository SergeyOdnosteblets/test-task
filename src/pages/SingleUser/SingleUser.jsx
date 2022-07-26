import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cards } from '../Users/Cards/Cards';

import styles from './SingleUser.module.scss';
import image from '../../images/clark-van-der-beken.png';
import cat from '../../images/cat.png';

export const SingleUser = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then((res) => res.json())
      .then((result) => {
        setPost(result[id]);
      });
  }, [id]);



  return (
    <div className={styles.root}>
      <Cards />
      <div className={styles.info__block}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.avatar}>
          <img src={cat} alt="" />
        </div>
      </div>

      {post && (
        <div className={styles.about__user}>
          <div className={styles.about__user__title}>
            <div className={styles.user__title__name}>{post.name}</div>
            <div className={styles.user__title__catchPhrase}>{post.company.catchPhrase}</div>
          </div>
          <div className={styles.about__user__other}>
            <div className={styles.user__other__text__title}>Address</div>
            <div>
              <div
                className={
                  styles.user__other__text
                }>{`${post.address.street}, ${post.address.suite}`}</div>
              <div
                className={
                  styles.user__other__text
                }>{`${post.address.city}, ${post.address.zipcode}`}</div>
            </div>
            <div className={styles.user__other__text__title}>Phone</div>
            <div className={styles.user__other__text}>{`+${parseInt(
              post.phone.replace(/[\s.,%)(-]/g, ''),
            )}`}</div>
            <div className={styles.user__other__text__title}>Website</div>
            <div className={styles.user__other__text}>
              <Link  className={styles.user__other__text__website} to="/" alt="">
                {post.website}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
