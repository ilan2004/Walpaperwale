"use client"
import { motion } from "framer-motion"
import styles from "./styles.module.scss"

export const Hero = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.content}
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className={styles.head}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Wallpaperwale
        </motion.h1>
        <motion.div
          className={styles.des}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className={styles.description}>
            Discover a world of stunning wallpapers that elevate your space. Explore designs that inspire and bring
            beauty to every screen.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

