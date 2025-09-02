"use client";

import { useEffect } from 'react';

export default function FlyonUIScript() {
  useEffect(() => {
    // Initialize FlyonUI components when the component mounts
    const initFlyonUI = () => {
      // Check if FlyonUI is available
      if (typeof window !== 'undefined') {
        // Wait for FlyonUI to load
        const checkFlyonUI = () => {
          if ((window as any).HSStaticMethods) {
            (window as any).HSStaticMethods.autoInit();
            console.log('FlyonUI initialized successfully');
            
            // Force carousel initialization after a delay
            setTimeout(() => {
              const carousel = document.getElementById('vertical-thumbnails');
              if (carousel) {
                console.log('Carousel element found:', carousel);
                // Trigger carousel initialization
                if ((window as any).HSStaticMethods && (window as any).HSStaticMethods.autoInit) {
                  (window as any).HSStaticMethods.autoInit();
                }
              }
            }, 500);
          } else {
            // Retry after a short delay
            setTimeout(checkFlyonUI, 100);
          }
        };
        checkFlyonUI();
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initFlyonUI, 100);
    
    // Also initialize on DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFlyonUI);
    } else {
      initFlyonUI();
    }

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener('DOMContentLoaded', initFlyonUI);
    };
  }, []);

  return null;
}
