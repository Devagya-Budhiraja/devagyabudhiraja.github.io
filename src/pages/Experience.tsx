import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <div id="experience" className="max-w-4xl mx-auto mb-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
