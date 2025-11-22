import React from 'react';
import styles from './Hero3DBackground.module.css';

const Hero3DBackground: React.FC = () => {
  return (
    <div className={styles.background3D}>
      {/* Floating geometric shapes */}
      <div className={styles.shape} style={{ '--delay': '0s', '--x': '10%', '--y': '20%' } as React.CSSProperties}>
        <div className={styles.cube}></div>
      </div>
      <div className={styles.shape} style={{ '--delay': '2s', '--x': '80%', '--y': '10%' } as React.CSSProperties}>
        <div className={styles.pyramid}></div>
      </div>
      <div className={styles.shape} style={{ '--delay': '4s', '--x': '20%', '--y': '70%' } as React.CSSProperties}>
        <div className={styles.sphere}></div>
      </div>
      <div className={styles.shape} style={{ '--delay': '1s', '--x': '70%', '--y': '60%' } as React.CSSProperties}>
        <div className={styles.torus}></div>
      </div>
      <div className={styles.shape} style={{ '--delay': '3s', '--x': '90%', '--y': '80%' } as React.CSSProperties}>
        <div className={styles.octahedron}></div>
      </div>
      
      {/* Animated particles */}
      {Array.from({ length: 50 }, (_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            '--delay': `${Math.random() * 10}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${Math.random() * 4 + 2}px`
          } as React.CSSProperties}
        ></div>
      ))}
      
      {/* Gradient overlay */}
      <div className={styles.gradientOverlay}></div>
    </div>
  );
};

export default Hero3DBackground;