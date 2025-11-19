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
                I'm a web developer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. With expertise in 
                modern web technologies, I enjoy turning complex problems into simple, 
                beautiful designs.
              </p>
              <p>
                My journey in web development started several years ago, and I've been 
                constantly learning and evolving with the latest technologies. I believe 
                in writing clean, maintainable code and creating applications that provide 
                real value to users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community.
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