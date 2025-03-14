"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import styles from "./Navbar.module.scss"

const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/Portfolio", key: "Portfolio", label: "Portfolio" },
  { href: "#services", key: "services", label: "Services" },
  { href: "#contact", key: "contact_us", label: "Contact Us" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={74} height={29} className={styles.logo} />
        </Link>

        <div className={`${styles.navbarCollapse} ${isOpen ? styles.show : ""}`}>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.button}>
            Contact Us
          </a>
        </div>

        <button
          className={`${styles.navbarToggler} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.indexOf(link) * 0.1 }}
              >
                <Link href={link.href} className={styles.mobileNavLink} onClick={toggleMenu}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="#contact"
              className={`${styles.button} ${styles.mobileButton}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.1 }}
              onClick={toggleMenu}
            >
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

