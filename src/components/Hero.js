import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedBackground from './AnimatedBackground';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([logoRef.current, titleRef.current, subtitleRef.current], { opacity: 0 });
    gsap.set(logoRef.current, { y: -50, scale: 0.8 });
    gsap.set(titleRef.current, { y: 50 });
    gsap.set(subtitleRef.current, { y: 30 });
    gsap.set(buttonsRef.current.children, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.5 });

    // Animate logo
    tl.to(logoRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)"
    });

    // Animate title with typing effect
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.5");

    // Add typing cursor animation
    tl.to(titleRef.current, {
      borderRight: "3px solid #6478f5",
      duration: 0.1
    }, "-=0.3");

    // Blinking cursor effect
    tl.to(titleRef.current, {
      borderRightColor: "transparent",
      duration: 0.5,
      repeat: 3,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Remove cursor
    tl.to(titleRef.current, {
      borderRight: "none",
      duration: 0.1
    });

    // Animate subtitle
    tl.to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Animate buttons
    tl.to(buttonsRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.6");

  }, []);

  return (
    <section className="hero">
      <AnimatedBackground />
      
      {/* Hero Images */}
      <div className="hero-images">
        <div className="hero-image study-image">
          <img src={`${process.env.PUBLIC_URL}/study.jpeg`} alt="Study" />
        </div>
        <div className="hero-image spectacles-image">
          <img src={`${process.env.PUBLIC_URL}/spectacles.png`} alt="Spectacles" />
        </div>
        <div className="hero-image grocery-image">
          <img src={`${process.env.PUBLIC_URL}/grocery.jpg`} alt="Grocery" />
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo" ref={logoRef}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="ureminders logo" className="hero-logo-image" />
          </div>
          
          <h1 className="hero-title" ref={titleRef}>
            yuriminders
          </h1>
          
          <p className="hero-subtitle" ref={subtitleRef}>
             <span className="strikethrough">smart</span> average-intelligence productivity tool for <span className="snapchat-yellow">Yuri and Yaoi</span> powered by AI and spatial detection
          </p>
          
          <div className="scroll-indicator" ref={buttonsRef}>
            <div className="scroll-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

