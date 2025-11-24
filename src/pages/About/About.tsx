import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">About Me</h1>
          
          <div className={styles.aboutContent}>
            <motion.div
              className={styles.aboutText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2>Hello! I'm a passionate developer</h2>
              <p>
                I'm a second-year Computer Science Engineering student passionate about web development.
                I enjoy creating useful and interactive digital experiences.
                Every project helps me learn, improve, and explore new ideas in tech.
              </p>
              
              <div className={styles.aboutPoints}>
                <div className={styles.point}>
                  <span className={styles.bullet}>•</span>
                  Learning modern web technologies and tools
                </div>
                <div className={styles.point}>
                  <span className={styles.bullet}>•</span>
                  Building creative and user-friendly websites
                </div>
                <div className={styles.point}>
                  <span className={styles.bullet}>•</span>
                  Exploring how tech can solve real-life problems
                </div>
                <div className={styles.point}>
                  <span className={styles.bullet}>•</span>
                  Enjoy teamwork, coding, and continuous learning
                </div>
                <div className={styles.point}>
                  <span className={styles.bullet}>•</span>
                  Aiming to grow as a developer and contribute to impactful projects
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.aboutImage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className={styles.imageContainer}>
                <div className={styles.placeholder}>
                  👨‍💻
                </div>
              </div>
            </motion.div>
          </div>
          

        </motion.div>
      </div>
    </div>
  );
};

export default About;