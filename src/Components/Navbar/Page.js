'use client'

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import styles from './Navbar.module.scss';

export default function Navbars() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  // Color palette for scrolled and non-scrolled states
  const colors = {
    primary: '#40422f',    // Dark olive green for scrolled state
    secondary: '#5a5c46',  // Lighter variant for hover states
    light: '#6c6e58',      // Even lighter for subtle elements
    white: '#ffffff',      // White for non-scrolled text
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Dynamic styles based on scroll state
  const navbarStyle = {
    backgroundColor: scrolled ? 'white' : 'transparent',
    backgroundImage: scrolled ? 'none' : 'url("/images/wall2.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 0.5s ease-in-out',
  };

  const textColor = scrolled ? colors.primary : colors.white;
  const buttonBgColor = scrolled ? colors.primary : 'transparent';
  const buttonTextColor = colors.white;
  const buttonClass = `text-white hover:opacity-90 transition-all duration-500 ease-in-out ${!scrolled ? 'border border-white' : ''}`;

  return (
    <Navbar className="shadow-sm" style={navbarStyle}>
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/wallpaper.png" alt="Wallpaperwale" className={styles.logo} />
          <p className="font-bold" style={{ color: textColor, transition: 'color 0.5s ease-in-out' }}>
            Wallpaperwale
          </p>
        </Link>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link 
            href="/" 
            style={{ color: textColor, transition: 'color 0.5s ease-in-out' }} 
            className="hover:opacity-80 transition-opacity duration-300"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/#Services" 
            onClick={(e) => {
              if (pathname !== '/') {
                e.preventDefault();
                router.push('/#Services');
              }
            }}
            style={{ color: textColor, transition: 'color 0.5s ease-in-out' }}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/portfolio" 
            style={{ color: textColor, transition: 'color 0.5s ease-in-out' }}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            Portfolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://wa.me/918123688974" target="_blank" rel="noopener noreferrer"
            variant="flat"
            style={{ 
              backgroundColor: buttonBgColor, 
              color: buttonTextColor,
              transition: 'all 0.5s ease-in-out'
            }}
            className={buttonClass}
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}