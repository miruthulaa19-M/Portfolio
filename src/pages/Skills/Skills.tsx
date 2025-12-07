import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import VantaBackground from '../../components/VantaBackground/VantaBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    }
  ];

  return (
    <div className={styles.skills}>
      <VantaBackground />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Skills & Technologies</h1>
          
          <div className={styles.skillsContainer}>
            <div className={styles.skillsGrid}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className={styles.skillCategory}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className={styles.skillItem}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.5 
                      }}
                    >
                      <div className={styles.skillTag}>
                        {skill.icon.startsWith('http') ? (
                          <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                        ) : (
                          <span className={styles.skillIcon}>{skill.icon}</span>
                        )}
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;