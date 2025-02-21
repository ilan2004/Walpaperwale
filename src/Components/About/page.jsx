import styles from "./style.module.scss"

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About Wallpaper wala</h1>

      <p className={styles.introduction}>
      Wallpaper wala is a visionary interior designer known for her unique approach to design. With a keen eye for
        detail and a passion for creating spaces that reflect individuality, Wallpaper wala brings a fresh perspective to every
        project.
      </p>

      <div className={styles.divider} />

      <div className={styles.missionWrapper}>
        <p className={styles.mission}>
          At Wallpaper wala, we believe that design is more than just aesthetics; it's about enhancing the way people live
          and interact with their surroundings. Our mission is to craft environments that inspire and elevate the human
          experience.
        </p>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Explore More</button>
      </div>
    </section>
  )
}

