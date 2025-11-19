import React from 'react';
import { motion } from 'framer-motion';
import styles from './Resume.module.css';

const Resume = () => {
  const experience = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Led web development for multiple applications using React and TypeScript. Improved application performance by 40% and mentored junior developers.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products.'
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Built responsive websites and web applications. Gained experience in modern web technologies and agile development methodologies.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated with honors. Focused on software engineering and web development.'
    }
  ];

  return (
    <div className={styles.resume}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Resume</h1>
          
          <div className={styles.resumeActions}>
            <motion.a
              href="/resume.pdf"
              download
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PDF
            </motion.a>
          </div>
          
          <div className={styles.resumeContent}>
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.timeline}>
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  >
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <span className={styles.period}>{exp.period}</span>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  >
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h3>{edu.degree}</h3>
                      <h4>{edu.school}</h4>
                      <span className={styles.period}>{edu.period}</span>
                      <p>{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;