'use client';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function skills() {
  const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };

  return (
    <div className={`${styles.backgroundColor} p-10`} id='skills'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

      {/* Portfolio */}
      <div className={`text-left p-10 mt-10 ${styles.backgroundColor}`}>
        <div className='mb-4 inline-block bg-gray-200 rounded-full px-3 py-1'>
          <span className={`text-black-700 text-xs`}>
            Skills & Experience
          </span>
        </div>
        <span className={`text-4xl font-bold text-black-500 block ${styles.colorMain}`}>Skills</span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'left' }}
        >
          <div className='flex flex-wrap justify-center mt-8'>

            <div className='flex flex-col items-center rounded-lg border-4 p-4 m-2'>
              {/* Conteúdo do primeiro quadrado */}
              <p className={`text-lg font-bold ${styles.colorMain}`}>Programming Languages</p>

              <div className="flex flex-wrap justify-center mt-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="PHP"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
                  alt="Ruby"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-20 h-20 m-2"
                />
              </div>
            </div>

            <div className='flex flex-col items-center rounded-lg border-4 p-4 m-2'>
              {/* Conteúdo do segundo quadrado */}
              <p className={`text-lg font-bold ${styles.colorMain}`}>Frameworks & Libraries</p>

              <div className="flex flex-wrap justify-center mt-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node.js"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="React.js"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
                  alt="Ruby on Rails"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
                  alt="Laravel"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                  alt="Symfony"
                  className="w-20 h-20 m-2"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg"
                  alt="Yii"
                  className="w-20 h-20 m-2"
                />

              </div>

            </div>

            <div className='flex flex-col items-center rounded-lg border-4 p-4 m-2'>
              {/* Conteúdo do terceiro quadrado */}
              <p className={`text-lg font-bold ${styles.colorMain}`}> Tools, Platforms</p>

              <div className="flex flex-wrap justify-center mt-4">
                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Apache Kafka" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" alt="Composer" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="Docker" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original-wordmark.svg" alt="Grunt" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="NGINX" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" />

                <img className="w-16 h-16 m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio Code" />
              </div>
            </div>

          </div>
        </motion.div>
        {/* End Portfolio */}
      </div>
      <hr className='border-black-600'></hr>
    </div >
  )
}
