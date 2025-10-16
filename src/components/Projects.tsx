// src/components/Projects.tsx
import { ProjectCard } from './ProjectCard';

// Updated project data with better placeholders and links
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce platform built with React and a Supabase backend.',
    image: 'https://placehold.co/600x400/161B22/6366F1?text=E-Commerce',
    tags: ['React', 'Supabase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive app to help users manage their daily tasks and boost productivity.',
    image: 'https://placehold.co/600x400/161B22/6366F1?text=Task+App',
    tags: ['React', 'TypeScript', 'Vite'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'The very portfolio you are looking at now, designed to be fast, clean, and modern.',
    image: 'https://placehold.co/600x400/161B22/6366F1?text=Portfolio',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-display">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}