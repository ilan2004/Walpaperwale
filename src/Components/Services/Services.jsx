import styles from "./services.module.scss"

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Services</h1>

      <div className={styles.grid}>
        <div className={styles.introSection}>
          <h2 className={styles.subtitle}>What we Offer</h2>
          <p className={styles.description}>
            Our services range from full-scale interior design projects to consultations and space planning. Whether
            you're looking to revamp your home or office, Rachel Resch has the expertise to bring your vision to life.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Wallpapers</h2>
              <span className={styles.serviceDescription}>Personalized Wallpapers</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Labour</h2>
              <span className={styles.serviceDescription}>Man power</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

