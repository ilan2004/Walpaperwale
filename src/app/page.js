'use client'
import Zoomparallax from "@/Components/Zoomparallax";
import {useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import styles from './page.module.scss'
import Navsite from "@/Components/Navbar/Page";
import { Hero } from "@/Components/Hero/Hero";
import About from "@/Components/About/page";
import Footer from "@/Components/Footer/Footer";
import Services from "@/Components/Services/Services";
import { ServerIcon } from "lucide-react";
import Cases from "@/Components/Cases/Services";
import Contact from "@/Components/Contact/Contact";
import StickyButtons from "@/Components/Sticky/Sticky";
// import Projects from "@/Components/MouseServices/Projects";
// import Scene from "@/Components/MouseServices/Scene";

export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])
const [activeMenu, setActiveMenu] = useState(null)
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (

    <div className={styles.main}>
      
      <Navsite/>
      <Hero/>
      <Zoomparallax/>
      <About/>
      <Cases/>
      <Contact/>
      <Footer/>
      <StickyButtons/>
    </div>
  );
}
