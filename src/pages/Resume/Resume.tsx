import React from 'react';
import { motion } from 'framer-motion';
import styles from './Resume.module.css';

const Resume = () => {
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

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      technologies: 'React, CSS Modules'
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
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
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
            
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Projects</h2>
              <div className={styles.timeline}>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  >
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <span className={styles.period}>{project.technologies}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Certifications</h2>
              <div className={styles.timeline}>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  >
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h3>{cert.title}</h3>
                      <h4>{cert.issuer}</h4>
                      <span className={styles.period}>{cert.date}</span>
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