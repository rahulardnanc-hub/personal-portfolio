// src/components/ProjectCard.tsx
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

// Define the type for a single project's data
type ProjectProps = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string; // Optional link to live site
    repoUrl?: string; // Optional link to code repository
  };
};

export function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Image or Placeholder */}
      <div className="bg-slate-700 h-48 flex items-center justify-center">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-indigo-900 text-indigo-300 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-400 hover:underline">
              <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-400 hover:underline">
              <CodeBracketIcon className="w-5 h-5 mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}