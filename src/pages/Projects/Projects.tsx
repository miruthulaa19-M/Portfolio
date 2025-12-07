import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import VantaBackground from '../../components/VantaBackground/VantaBackground';

const Projects = () => {
  const projects = [
    {
      title: 'Event and Internship management system',
      description: 'A unified college communication system that enables seamless event posting, registration, and participation tracking.',
      technologies: ['React', 'TypeScript', 'CSS Modules', 'MongoDB'],
    
      liveUrl: 'https://miruthulaa-portfolio.netlify.app'
    }
  ];

  return (
    <div className={styles.projects}>
      <VantaBackground />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">My Projects</h1>
          
           <div className={`grid grid-3 ${styles.projectsGrid}`}>
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;