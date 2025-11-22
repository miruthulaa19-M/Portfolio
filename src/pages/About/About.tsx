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
                Hi! I'm a Computer Science Engineering student currently in my second year, passionate about building the web of tomorrow.
              </p>
              <p>
                I love exploring how technology can solve real problems and bring creative ideas to life. From designing interactive websites to learning modern development frameworks, I'm constantly leveling up my skills to craft meaningful and user-focused digital experiences.
              </p>
              <p>
                I believe every project is a chance to learn, improve, and innovate. Whether it's experimenting with new tools, collaborating with others, or diving deep into code — I'm always excited to explore what's next.
              </p>
              <p>
                🌱 As I continue my journey in tech, I'm eager to contribute to impactful projects, grow in the developer community, and shape a future where technology makes life better for everyone.
              </p>
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