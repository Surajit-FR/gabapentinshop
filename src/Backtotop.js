import React from 'react'
import { useState, useEffect } from "react";


const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);
    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
      }, []);


  return (
    <>
      {isVisible && (
        <button className='backtotp' onClick={scrollToTop}>
          <i className="fa-thin fa-arrow-up-to-line"></i>
        </button>
      )}
    </>
  )
}

export default Backtotop
