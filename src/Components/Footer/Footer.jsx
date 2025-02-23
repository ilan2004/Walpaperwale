import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import styles from "./footer.module.scss"

const Footer = () => {
  const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: ["About Wallpaper wale", "Jobs", "Privacy Policy", "Contact Us"],
    },
  ]

  const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Phone number", value: "91 8123688974", towards: "tel:+918123688974" },
      { label: "Email", value: "Ravi001@acharya", towards: "mailto:Ravi001@acharya" },
      {
        label: "Address",
        value: "shop no 12, Gorivegere gate, Vibez gully, Sannatammanahalli, Bengaluru, Karnataka 560067",
        towards: "https://maps.app.goo.gl/S5ChtreR5emgkBSZA?g_st=com.google.maps.preview.copy",
      },
    ],
  }

  const SOCIALS = {
    title: "Social",
    links: [
      { icon: Facebook, href: "https://facebook.com" },
      { icon: Instagram, href: "https://www.instagram.com/wallpaperwale_kadugodi/" },
      { icon: Linkedin, href: "https://linkedin.com" },
    ],
  }

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Link href="/" className={styles.logo}>
            Wallpaperwala
          </Link>

          <div className={styles.linksContainer}>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className={styles.linkList}>
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className={styles.link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className={styles.contactSection}>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href={link.towards} key={link.label} className={styles.contactLink}>
                    <p className={styles.contactLabel}>{link.label}:</p>
                    <p className={styles.contactValue}>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className={styles.socialsSection}>
              <FooterColumn title={SOCIALS.title}>
                <ul className={styles.socialIcons}>
                  {SOCIALS.links.map(({ icon: Icon, href }) => (
                    <li key={href}>
                      <Link href={href} className={styles.socialLink}>
                        <Icon size={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className={styles.divider} />
        <p className={styles.copyright}>2025 Wallpaperwala | All rights reserved</p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className={styles.footerColumn}>
      <h4 className={styles.columnTitle}>{title}</h4>
      {children}
    </div>
  )
}

export default Footer

