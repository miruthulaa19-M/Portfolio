import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://your-ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/taskmanager',
      liveUrl: 'https://your-taskmanager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts for multiple cities.',
      technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://your-weather-demo.com'
    },
    {
      title: 'Social Media App',
      description: 'A social media platform with user profiles, posts, comments, and real-time messaging.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      githubUrl: 'https://github.com/yourusername/social-app',
      liveUrl: null
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and animations.',
      technologies: ['React', 'Framer Motion', 'CSS Modules'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.com'
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with content management, user authentication, and SEO optimization.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/blog-platform',
      liveUrl: 'https://your-blog-demo.com'
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