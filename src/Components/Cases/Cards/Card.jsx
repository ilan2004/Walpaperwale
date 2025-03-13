'use client'

import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './Card.css';

const Card = ({ i, title, font, description, src, url, detail, color, progress, range, targetScale }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="cardContainer">
      <div className="cardContainer-inside">
        <motion.div
          style={{
            background: `linear-gradient(to bottom, ${color}, #fff)`,
            color: font,
            scale, 
            top: `calc(-5vh + ${i * 25}px)`
          }}
          className="card"
        >
          <h2 className="card-title">{title}</h2>
          <div className="body">
            <div className="description">
              <p className="desp">{description}</p>
              <span className="detail-text">{detail}</span>
            </div>
            
            <div className="imageContainer">
              <motion.div
                className="inner"
                style={{ scale: imageScale }}
              >
                <img
                  src={src}
                  alt={title}
                  className="imaged"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;