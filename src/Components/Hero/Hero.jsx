import React from 'react';
import styles from './styles.module.scss';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.head}>Wallpaperwale</h1>
        <div className={styles.des}>
        <p className={styles.description}>
          Discover a world of stunning wallpapers that elevate your space. Explore designs that inspire and bring beauty to every screen.
        </p>
        </div>
      </div>
    </div>
  );
};
