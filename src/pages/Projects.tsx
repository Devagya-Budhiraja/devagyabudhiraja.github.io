import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { projects, Project } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects" className="mb-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white pr-8">{selectedProject.title}</h3>
              <div className="flex items-center space-x-4 flex-shrink-0">
                {selectedProject.repoUrl && (
                  <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Github size={22} />
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
            {/* Dates below heading */}
            <div className="text-xs text-gray-400 mb-2">
              {selectedProject.startDate} - {selectedProject.endDate}
            </div>
            
            <p className="text-gray-400 mb-6">{selectedProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="bg-dark-700 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Gallery</h4>
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-1 px-1">
              {selectedProject.images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-auto">
                  <img src={image} alt={`${selectedProject.title} screenshot ${index + 1}`} className="rounded-lg max-w-full sm:max-w-md md:max-w-lg h-auto object-cover border border-dark-700" />
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
