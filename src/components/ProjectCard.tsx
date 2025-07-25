import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      onClick={onSelect}
      className="relative bg-dark-800/80 backdrop-blur-md rounded-2xl border border-dark-700 overflow-hidden flex flex-col h-full cursor-pointer group shadow-xl hover:border-primary transition-all duration-300"
      whileHover={{ y: -10, scale: 1.03, boxShadow: '0 8px 32px 0 rgba(20,184,166,0.25)' }}
      transition={{ duration: 0.3, type: 'spring' }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    >
      {/* Project image (if available) */}
      {project.images && project.images[0] && (
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-40 object-cover object-top rounded-t-2xl border-b border-dark-700"
        />
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-3">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Github size={22} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-primary transition-colors duration-300">
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-300 text-base mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-primary/20 transition-all duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        {/* Dates */}
        <div className="text-xs text-gray-400 mb-2 mt-auto">
          {project.startDate} - {project.endDate}
        </div>
        <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
          <span>View Project</span>
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
