import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const DOT_SIZE = 12; // px
const DOT_OFFSET = 5; // px to lower the dot
const LINE_LEFT = 1.5; // px from left for the line and dot alignment

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const numRoles = experience.roles.length;

  return (
    <motion.div 
      className="bg-dark-800 p-6 rounded-lg border border-dark-700"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-white">{experience.company}</h3>
          <p className="text-primary font-medium">{experience.period}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-400">{experience.description}</p>
      <div className="mt-6 relative">
        {/* Only render the timeline line if there are multiple roles */}
        {numRoles > 1 && (
          <div
            className="absolute bg-primary"
            style={{
              left: LINE_LEFT + DOT_SIZE / 2 - 1,
              top: `calc(${DOT_OFFSET + DOT_SIZE / 2}px)`,
              width: '3px',
              height: `calc(100% - ${DOT_OFFSET + DOT_SIZE / 2 + 40 * (numRoles - 1)}px)`,
              zIndex: 0,
              borderRadius: '2px',
            }}
          />
        )}
        <div className="space-y-8 relative z-10">
          {experience.roles.map((role, idx) => (
            <div key={role.title + role.period} className="relative flex items-start">
              {/* Dot, centered on the line */}
              <div
                className="w-4 flex flex-col items-center relative"
                style={{ minWidth: `${DOT_SIZE + LINE_LEFT}px` }}
              >
                <div
                  className="w-3 h-3 bg-primary rounded-full z-10"
                  style={{ marginTop: DOT_OFFSET }}
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{role.title}</span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{role.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
