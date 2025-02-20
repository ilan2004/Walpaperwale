import Image from 'next/image';
import React from 'react';
import styles from './services.module.scss';

export const FEATURES = [
    {
      title: 'Wallpaper Services',
      icon: '/wallpaper.svg',
      variant: 'green',
      points: [
        { title: 'Premium Wallpapers', description: 'High-quality wallpapers with unique designs.' },
        { title: 'Custom Wallpaper Printing', description: 'Personalized wallpaper printing for a unique touch.' },
        { title: 'Installation Service', description: 'Professional wallpaper installation by experts.' },
      ],
    },
    {
      title: 'Labor Services',
      icon: '/labor.svg',
      variant: 'green',
      points: [
        { title: 'Skilled Workers', description: 'Experienced professionals for flawless interior work.' },
        { title: 'Efficient Service', description: 'Quick and high-quality labor for all projects.' },
        { title: 'Affordable Pricing', description: 'Competitive rates with premium service quality.' },
      ],
    },
  ];
  

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <ul className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, points }) => {
  return (
    <li className={styles.featureItem}>
      <div className={styles.iconContainer}>
        <Image src={icon || "/placeholder.svg"} alt={title} width={28} height={28} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      {points.map((point, index) => (
        <p key={index} className={styles.featureDescription}>
          <strong>{point.title}</strong>: {point.description}
        </p>
      ))}
    </li>
  );
};

export default Services;
