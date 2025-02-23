import styles from "./services.module.scss"

export default function Services() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Services</h1>

      <div className={styles.grid}>
        <div className={styles.introSection}>
          <h2 className={styles.subtitle}>What we Offer</h2>
          <p className={styles.description}>
            At WallpaperWale, we specialize in enhancing your spaces with a wide range of services. From premium wallpapers and customized designs to modern blinds, artificial grass, and vertical gardens, we provide everything you need to elevate your interiors. Our team also offers skilled labour and window glass film solutions for both decorative and protective needs, ensuring a complete transformation for your home or office.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Wallpapers</h2>
              <span className={styles.serviceDescription}>Stylish wallpapers to transform any space.</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Labour</h2>
              <span className={styles.serviceDescription}>Skilled manpower for seamless execution.</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Blinds</h2>
              <span className={styles.serviceDescription}>Modern blinds for light control and privacy.</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Artificial Grass</h2>
              <span className={styles.serviceDescription}>Lush, maintenance-free greenery for any space.</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Window Glass Film</h2>
              <span className={styles.serviceDescription}>Decorative and protective glass film solutions.</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Customized Wallpapers</h2>
              <span className={styles.serviceDescription}>Personalized designs tailored to your style.</span>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceName}>Vertical Garden</h2>
              <span className={styles.serviceDescription}>Bring nature indoors with space-saving greenery.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
