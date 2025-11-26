import React, { useEffect } from 'react';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    const initSpline = async () => {
      const splineCanvas = document.getElementById('spline-canvas');
      const splineLoader = document.getElementById('spline-loader');
      
      if (!splineCanvas || !splineLoader) {
        console.log('Canvas or loader not found');
        return;
      }

      try {
        // Load the Spline runtime script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/runtime@1.2.6/build/runtime.js';
        script.type = 'module';
        
        script.onload = () => {
          // Use setTimeout to ensure the script is fully loaded
          setTimeout(() => {
            const initScript = document.createElement('script');
            initScript.type = 'module';
            initScript.innerHTML = `
              import { Application } from 'https://unpkg.com/@splinetool/runtime@1.2.6/build/runtime.js';
              const canvas = document.getElementById('spline-canvas');
              const loader = document.getElementById('spline-loader');
              if (canvas && loader) {
                const app = new Application(canvas);
                app.load('https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode')
                  .then(() => {
                    loader.style.display = 'none';
                    canvas.style.display = 'block';
                    console.log('3D Robot loaded!');
                  })
                  .catch(err => {
                    console.error('Robot load error:', err);
                    loader.innerHTML = '<div style="color: #ff7a00; text-align: center;">Robot loading failed</div>';
                  });
              }
            `;
            document.head.appendChild(initScript);
          }, 100);
        };
        
        script.onerror = () => {
          console.error('Failed to load Spline runtime');
          if (splineLoader) {
            splineLoader.innerHTML = '<div style="color: #ff7a00; text-align: center;">3D Engine failed to load</div>';
          }
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading robot:', error);
      }
    };
    
    // Delay initialization to ensure DOM is ready
    setTimeout(initSpline, 500);
  }, []);
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'KSR COLLEGE OF ENGINEERING',
      period: '2024 - 2028',
      description: 'Currently pursuing Bachelor of Computer Science with focus on software engineering and web development.'
    },
    {
      degree: 'Higher Secondary Education',
      school: 'SR MATRIC HR SEC SCHOOL UTHUKULI',
      period: '2023 - 2024',
      description: 'Completed higher secondary education with focus on science and mathematics.'
    }
  ];

  const certifications = [
    {
      title: 'Ideathon - AI Trainer Tool',
      issuer: 'Tech Competition',
      date: '2025'
    },
    {
      title: 'Hackathon (TANCAM)',
      issuer: 'TANCAM',
      date: '2024'
    }
  ];

  return (
    <div className={styles.about}>
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
        <div className={styles.aboutContent}>
          <div className={styles.bookStyle}>
            <div className={styles.bookHeader}>
              <h3>About</h3>
              <div className={styles.decorativeLine}></div>
            </div>
            <div className={styles.bookText}>
              <p className={styles.paragraph}>
                I'm a second-year Computer Science Engineering student passionate about web development.
              </p>
              <p className={styles.paragraph}>
                I enjoy creating useful and interactive digital experiences.
              </p>
              <p className={styles.paragraph}>
                Every project helps me learn, improve, and explore new ideas in tech.
              </p>
            </div>
          </div>
          
          <div className={styles.robotContainer}>
            <div className={styles.splineContainer}>
              <div className={styles.splineLoader} id="spline-loader">
                <div className={styles.loader}></div>
              </div>
              <canvas className={styles.splineCanvas} id="spline-canvas"></canvas>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.singleCard}>
            <h2 className={styles.cardTitle}>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className={styles.cardItem}>
                <h3>{edu.degree}</h3>
                <h4 className={styles.schoolName}>{edu.school}</h4>
                <span className={styles.period}>{edu.period}</span>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.singleCard}>
            <h2 className={styles.cardTitle}>Certifications</h2>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.cardItem}>
                <h3>{cert.title}</h3>
                <h4 className={styles.schoolName}>{cert.issuer}</h4>
                <span className={styles.period}>{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;