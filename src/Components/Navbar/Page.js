'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import styles from './Navbar.module.scss';

export default function NavbarV() {
  // Color palette based on #40422f
  const colors = {
    primary: '#40422f',    // Dark olive green for brand text
    secondary: '#5a5c46',  // Lighter variant for hover states
    light: '#6c6e58',      // Even lighter for subtle elements
  };

  return (
    <Navbar className="bg-white shadow-sm">
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/logo.png" alt="Wallpaperwale" className={styles.logo} />
          <p className="font-bold" style={{ color: colors.primary }}>Wallpaperwale</p>
        </Link>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link href="/" style={{ color: colors.primary }} className={`hover:text-[${colors.secondary}] transition-colors`}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/services" style={{ color: colors.primary }} className={`hover:text-[${colors.secondary}] transition-colors`}>
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/portfolio" style={{ color: colors.primary }} className={`hover:text-[${colors.secondary}] transition-colors`}>
            Portfolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/contact"
            variant="flat"
            style={{ backgroundColor: colors.primary }}
            className="text-white hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}