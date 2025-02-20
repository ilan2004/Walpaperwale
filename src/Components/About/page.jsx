import styles from "./style.module.scss"

export const About = () => {
  return (
    <section className={styles.aboutus}>
      <div className={styles.container}>
        <h2 className={styles.head}>About us</h2>
        <h3 className={styles.heading}>Wallpaper wala is the best wallpaper design store in Bangalore</h3>
        <p className={styles.about}>
          Wallpaperwale stands out as Bangalore's premier interior design studio, setting the standard for excellence in
          creating sophisticated and innovative living spaces.
        </p>
      </div>
    </section>
  )
}

