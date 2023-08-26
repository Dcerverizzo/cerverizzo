"use client";

import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import React from 'react';

function experience() {
  const experiences = [
    {
      company: 'Cobre Fácil',
      date: 'Mar 2020 - Present · 3 yrs 6 mos',
      role: 'Software Development Engineer',
      description: 'Designed and developed intuitive user interfaces using CSS, JavaScript frameworks, and PHP frameworks to enhance web application user experience, while ensuring seamless integration between frontend and backend, and adhering to UX/UI design principles and collaboration with stakeholders.',
      skills: [
        "User Experience (UX)",
        "Mobile Interface Design",
        "User Interface Design",
        "CSS",
        "HTML5",
        "JavaScript",
        "Scrum",
        "HTML",
        "JQuery",
        "PHP",
        "MySQL",
        "SQL",
        "Linux",
        "Git",
        "GitHub",
        "php",
      ],
    },
    {
      company: 'Didáctica - Tudo sobre aprender',
      date: 'Jun 2018 - Jan 2020 · 1 yr 8 mos',
      role: 'Engineer Front End',
      description: "Designed and developed user-facing features for web applications using industry-standard technologies, creating reusable code and libraries for enhanced scalability and reduced development time. Collaborated closely with UI/UX designers, optimized applications for speed and performance, implemented robust data validation techniques, and worked collaboratively with team members to achieve project goals efficiently. Thoroughly tested and ensured high-quality, reliable products for end-users.",
      skills: [
        "User Experience (UX)",
        "Mobile Interface Design",
        "User Interface Design",
        "CSS",
        "HTML5",
        "JavaScript",
        "Scrum",
        "HTML",
        "SCSS",
        "JQuery",
        "MySQL",
        "SQL",
        "MacOS",
        "GitHub",
        "Ruby",
        "Rails",
        "SasS"
      ],
    },
    {
      company: 'SistemasBR',
      date: 'Sep 2016 - Jun 2018 · 1 yr 10 mos',
      role: 'Support Analyst',
      description: "Assists in the company's Support and Customer Service sector, creating and editing manuals and institutional materials for commercial software.",
      skills: [
        "Interpersonal Communication",
        "Technical Proficiency",
        "Customer Service",
        "Problem Solving",
        "Training",
        "Organization",
        "Adaptability",
        "Empathy",
        "Teamwork",
        "Quick Learning",
        "Patience",
        "Time Management"
      ],
    },
    {
      company: 'Fiorilli Software',
      date: 'Aug 2015 - Dec 2015 · 5 mos',
      role: 'Junior Java Software Engineer',
      description: "Designed and developed user-facing features for web applications using industry-standard technologies, creating reusable code and libraries for enhanced scalability and reduced development time. Collaborated closely with UI/UX designers, optimized applications for speed and performance, implemented robust data validation techniques, and worked collaboratively with team members to achieve project goals efficiently. Thoroughly tested and ensured high-quality, reliable products for end-users.",
      skills: [
        "User Experience (UX)",
        "Mobile Interface Design",
        "User Interface Design",
        "CSS",
        "HTML5",
        "JavaScript",
        "Scrum",
        "HTML",
        "SCSS",
        "JQuery",
        "MySQL",
        "SQL",
        "MacOS",
        "GitHub",
        "Ruby",
        "Rails",
        "SasS"
      ],
    },
  ];

  const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };

  return (
    <div className={`${styles.backgroundColor} z-10 p-10`} id='exp'>
      <span className={`text-left p-10 mt-10 text-4xl font-bold text-black-500 block ${styles.colorMain}`}>Experience</span>
      <div className={`flex justify-center items-center ${styles.backgroundColor}`}>
        <div className='p-5'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='mt-8 space-y-12'>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {experiences.map((experience, index) => (
                  <motion.li
                    key={index}
                    className="mb-10 ml-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * index }}
                  >
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {experience.date}
                    </time>
                    <h3 className={`text-lg font-semibold text-gray-900 ${styles.colorMain}`}>
                      {experience.role} at {experience.company}
                    </h3>
                    <p className={`mb-4 text-base font-normal text-gray-500 dark:${styles.colorMain}`}>
                      {experience.description}
                    </p>
                    <div className={`mt-2 text-sm ${styles.colorMain}`}>{experience.skills.join(" · ")}</div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-black-600'></hr>
    </div>
  );
}

function TimelineCard({ company, date, role, description, skills }) {
  return (
    <li class="mb-10 ml-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{role} at {company}</h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
      <div className='mt-2 text-sm text-gray-700'>{skills}</div>
    </li>
  );
}

export default experience;
