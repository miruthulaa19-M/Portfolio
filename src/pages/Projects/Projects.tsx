import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and animations.',
      technologies: ['React', 'TypeScript', 'CSS Modules', 'Framer Motion'],
      githubUrl: 'https://github.com/miruthulaa/myport',
      liveUrl: 'https://miruthulaa-portfolio.netlify.app'
    }
  ];

  return (
    <div className={styles.projects}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">My Projects</h1>
          <motion.p
            className={styles.projectsDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience.
          </motion.p>
          
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