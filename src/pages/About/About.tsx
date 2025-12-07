import React, { useEffect } from 'react';
import styles from './About.module.css';

import Lottie from "lottie-react";
import badgeAnimation from "../../assets/Badge.json"; 
import bookAnimation from "../../assets/books 5_Lottie.json";
import VantaBackground from '../../components/VantaBackground/VantaBackground';


const About = () => {

  useEffect(() => {
    const initSpline = async () => {
      const splineCanvas = document.getElementById("spline-canvas");
      const splineLoader = document.getElementById("spline-loader");

      if (!splineCanvas || !splineLoader) return;

      try {
        const script = document.createElement("script");
        script.src =
          "https://unpkg.com/@splinetool/runtime@1.2.6/build/runtime.js";
        script.type = "module";

        script.onload = () => {
          setTimeout(() => {
            const initScript = document.createElement("script");
            initScript.type = "module";
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
                  })
                  .catch(err => {
                    loader.innerHTML = 'Robot loading failed';
                  });
              }
            `;
            document.head.appendChild(initScript);
          }, 100);
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error(error);
      }
    };

    setTimeout(initSpline, 500);
  }, []);

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "KSR COLLEGE OF ENGINEERING",
      period: "2024 - 2028",
      description:
        "Currently pursuing Bachelor of Computer Science with focus on software engineering and web development."
    },
    {
      degree: "Higher Secondary Education",
      school: "SR MATRIC HR SEC SCHOOL UTHUKULI",
      period: "2023 - 2024",
      description:
        "Completed higher secondary education with focus on science and mathematics."
    }
  ];

  const certifications = [
    { title: "Ideathon - AI Trainer Tool", issuer: "Tech Competition", date: "2025" },
    { title: "Hackathon (TANCAM)", issuer: "TANCAM", date: "2024" }
  ];

  return (
    <div className={styles.about}>
      <VantaBackground />
      <div className="container">
        <h1 className="section-title">About Me</h1>

        <div className={styles.bottomSection}>

          {/* EDUCATION */}
          <div className={styles.singleCard}>
            <div className={styles.titleWithIcon}>
              <h2 className={styles.cardTitle}>Education</h2>
              <Lottie animationData={bookAnimation} className={styles.bookAnimation} loop />
            </div>

            {education.map((edu, index) => (
              <div key={index} className={styles.cardItem}>
                <h3>{edu.degree}</h3>
                <h4 className={styles.schoolName}>{edu.school}</h4>
                <span className={styles.period}>{edu.period}</span>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className={styles.singleCard}>
            <div className={styles.certHeader}>
              <h2 className={styles.cardTitle}>Certifications</h2>

              <div className={styles.certLottie}>
                <Lottie animationData={badgeAnimation} loop autoplay />
              </div>
            </div>

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
