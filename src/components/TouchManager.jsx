import React, { useEffect } from 'react';

function TouchManager() {
  useEffect(() => {
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      console.log('Touch start:', touch.clientX, touch.clientY);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      console.log('Touch move:', touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      console.log('Touch end');
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return null;
}

export default TouchManager; 