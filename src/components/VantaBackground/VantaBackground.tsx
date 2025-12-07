import React, { useEffect, useRef } from 'react';
import styles from './VantaBackground.module.css';

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!vantaEffect.current && vantaRef.current && (window as any).VANTA) {
        vantaEffect.current = (window as any).VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0a0a0a,
          shininess: 44.00,
          waveHeight: 15.00,
          waveSpeed: 0.50,
          zoom: 0.75
        });
      }
    }, 100);
    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className={styles.vantaBackground}></div>;
};

export default VantaBackground;
