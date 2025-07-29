import React from 'react';
import './StickyButtons.css';

const StickyButtons = () => {
  const handleCall = () => {
    window.location.href = 'tel:+918123688974'; // Replace with your phone number
  };
  
  const handleWhatsApp = () => {
    // Replace with your WhatsApp number and optional pre-filled message
    window.open('https://wa.me/8123688974?text=Hello,%20I%20have%20a%20question', '_blank');
  };
  
  return (
    <div className="sticky-buttons-container">
      <button 
        className="sticky-button call-button"
        onClick={handleCall}
        aria-label="Call us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      </button>
      <button 
        className="sticky-button whatsapp-button"
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.56-7.93 7.93 0 1.4.37 2.77 1.07 3.97L4 20l4.18-1.1a7.95 7.95 0 0 0 3.87 1c4.38 0 7.93-3.56 7.93-7.93 0-2.11-.82-4.1-2.32-5.6l-.06-.05zM12.05 18.33c-1.18 0-2.33-.32-3.33-.92l-.24-.14-2.46.64.66-2.4-.16-.25a6.56 6.56 0 0 1-1.01-3.47 6.37 6.37 0 0 1 6.54-6.54c1.76 0 3.4.68 4.64 1.93a6.58 6.58 0 0 1 1.93 4.66c0 3.5-2.85 6.35-6.54 6.35l-.03.14zm3.63-4.75c-.2-.1-1.17-.57-1.35-.64-.18-.06-.31-.1-.44.1-.12.2-.49.63-.6.76-.1.13-.22.15-.41.05a5.13 5.13 0 0 1-1.54-.95c-.57-.51-1-1.22-1.12-1.45-.11-.24-.01-.37.08-.48.09-.12.2-.31.29-.46.1-.15.13-.26.2-.44.06-.17.03-.32-.02-.45-.05-.15-.44-1.06-.6-1.45-.16-.38-.33-.32-.45-.32l-.4-.01c-.12 0-.3.06-.46.26-.16.2-.62.62-.62 1.5s.63 1.75.71 1.87c.09.12 1.24 1.9 3.01 2.65 1.13.48 1.36.53 1.86.45.3-.05.96-.4 1.09-.77.13-.38.13-.7.09-.77-.05-.08-.18-.12-.37-.21z"/>
        </svg>
      </button>
    </div>
  );
};

export default StickyButtons;