import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
// import Hero3DBackground from '../components/Hero3DBackground';

const skills = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 
  'Framer Motion', 'Git & GitHub', 'REST APIs', 'HTML5', 'CSS3'
];

const About: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Devagya Budhiraja";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="mb-24">
      <section id="hero" className="flex items-center justify-center min-h-screen relative overflow-hidden">
        {/* <Hero3DBackground /> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          >
            {displayedText}
            <span className="inline-block w-2 h-7 align-middle bg-primary animate-pulse ml-1" style={{ verticalAlign: 'middle' }} />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-8"
          >
            A passionate Mechatronics Engineer building innovative solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-focus transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-dark-700 text-base font-medium rounded-md text-white bg-dark-800 hover:bg-dark-700 hover:border-gray-600 transition-all duration-300"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <motion.section 
        id="more-about" 
        className="py-16 sm:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="text-gray-400 space-y-4 text-lg text-left md:text-center">
            <p>
              I’m a third-year Mechatronics Engineering student at The University of Sydney, driven by a fascination with robotics particularly in the realms of space exploration and biomechatronics. From a young age, I’ve been captivated by how mechanical systems and intelligent software come together to create real-world impact. That fascination has now grown into a focused academic and career pursuit.
            </p>
            <p>
              Throughout my university journey, I’ve actively contributed to robotics projects that span embedded systems, motion control, and sensor integration. Being part of STEM-focused societies and technical teams has not only refined my engineering skill set but also given me the opportunity to collaborate with like-minded innovators. These experiences have shaped my approach to problem-solving balancing analytical thinking with creative exploration.
            </p>
            <p>
              I’m always looking to push boundaries and stay aligned with cutting-edge developments in robotics and automation. Whether I’m prototyping a wearable system or exploring robotic locomotion, I aim to build technologies that are not just functional but also intuitive and human-centered. The journey so far has been inspiring, and I’m excited about what lies ahead.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <div key={skill} className="bg-dark-700 text-primary font-medium px-4 py-2 rounded-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
