"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "./hero.css";
import AnimatedH1 from "../Animation/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../Animation/AnimatedCopy/AnimatedCopy";
import CloudinaryImage from "../CloudinaryImage";

export const Hero = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="page">
      <section className="project-hero">
        {/* CloudinaryImage as a background */}
        <CloudinaryImage
          publicId="wall2_iybooi" // Replace with your Cloudinary public ID for the image
          className="hero-background"
          alt="Background wallpaper"
          fill // Assuming CloudinaryImage supports a 'fill' prop for full coverage
        />
        <div className="col">
          <div className="container">
            <div className="project-page-title">
              <AnimatedH1 delay={1}>Wallpaperwale</AnimatedH1>
            </div>
            <div className="row">
              <div className="sub-col"></div>
              <div className="sub-col">
                <AnimatedCopy delay={1.5}>
                  Discover a world of stunning wallpapers that elevate your space.
                  Explore designs that inspire and bring beauty to every screen.
                </AnimatedCopy>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};