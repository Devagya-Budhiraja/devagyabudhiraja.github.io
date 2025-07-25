import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="max-w-3xl mx-auto mb-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Get In Touch</h2>
      <p className="text-center text-gray-400 mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
      </p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <button
          onClick={() => {
            if (window.confirm('Would you like to open Gmail to send an email to devagya2015@gmail.com?')) {
              window.open('https://mail.google.com/mail/?view=cm&fs=1&to=devagya2015@gmail.com', '_blank');
            }
          }}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-focus transition-colors"
        >
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;
