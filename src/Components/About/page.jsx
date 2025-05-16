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
      <div className={styles.overlay}>
        <motion.h1 className={styles.title} variants={itemVariants}>
          About WallpaperWale
        </motion.h1>

        <motion.p className={styles.introduction} variants={itemVariants}>
          WallpaperWale is dedicated to transforming spaces with creative and functional design solutions. We offer a wide range of services, from premium wallpapers and customized designs to modern blinds, artificial grass installations, and vertical gardens. Our passion lies in enhancing every environment with personalized touches that reflect your unique style.
        </motion.p>

        <motion.div
          className={styles.divider}
          variants={itemVariants}
          whileInView={{ scaleX: [0, 1] }}
          transition={{ duration: 0.8 }}
        />

        <motion.div className={styles.missionWrapper} variants={itemVariants}>
          <p className={styles.mission}>
            At WallpaperWale, we believe design should inspire and elevate every space. Our mission is to provide innovative interior solutions—whether it's through decorative glass films, lush artificial grass, or personalized wallpapers—that transform homes and offices into vibrant, welcoming environments.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
