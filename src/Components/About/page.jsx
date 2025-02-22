"use client"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import styles from "./style.module.scss"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function About() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h1 className={styles.title} variants={itemVariants}>
        About Wallpaper wala
      </motion.h1>

      <motion.p className={styles.introduction} variants={itemVariants}>
        Wallpaper wala is a visionary interior designer known for her unique approach to design. With a keen eye for
        detail and a passion for creating spaces that reflect individuality, Wallpaper wala brings a fresh perspective
        to every project.
      </motion.p>

      <motion.div
        className={styles.divider}
        variants={itemVariants}
        whileInView={{ scaleX: [0, 1] }}
        transition={{ duration: 0.8 }}
      />

      <motion.div className={styles.missionWrapper} variants={itemVariants}>
        <p className={styles.mission}>
          At Wallpaper wala, we believe that design is more than just aesthetics; it's about enhancing the way people
          live and interact with their surroundings. Our mission is to craft environments that inspire and elevate the
          human experience.
        </p>
      </motion.div>

      <motion.div className={styles.buttonWrapper} variants={itemVariants}>
        <motion.button className={styles.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Explore More
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

