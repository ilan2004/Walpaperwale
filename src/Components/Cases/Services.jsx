'use client'

import { useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Card from './Cards/Card';
import all_items from './Provides';
import styles from './services.module.scss';

export default function Services() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
  // Optional: Add intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const title = document.querySelector(`.${styles.topic}`);
    if (title) observer.observe(title);
    
    return () => {
      if (title) observer.unobserve(title);
    };
  }, []);

  return (
    <main id="Services" ref={container} className={styles.main}>
      <div className={styles.topic}>
        <h1 className={styles.servicesTitle}>SERVICES</h1>

      </div>
      
      <div className={styles.cardsContainer}>
        {all_items.map((project, i) => {
          const targetScale = 1 - ((all_items.length - i) * 0.05);
          
          return (
            <Card 
              key={`service_${i}`} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}