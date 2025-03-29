'use client'

import { useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Card from './Cards/Card';
import all_items from './Provides';
import styles from './services.module.scss';

export default function Services() {
  const container = useRef(null);
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main id="Services" ref={container} className={styles.main}>
      <div className={styles.topic} ref={titleRef}>
        <h1 className={styles.servicesTitle}>SERVICES</h1>
      </div>

      <div className={styles.cardsContainer}>
        {all_items.slice(0, 7).map((project, i) => {
          const targetScale = 1 - ((7 - i) * 0.03); // Optimized scaling

          return (
            <Card 
              key={`service_${i}`} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.2, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}
