// src/components/Services.tsx
import { CodeBracketIcon, PaintBrushIcon, CircleStackIcon } from '@heroicons/react/24/outline';

// Data for the services section, now with imported icons
const servicesData = [
  {
    id: 1,
    icon: CodeBracketIcon,
    title: 'Frontend Development',
    description: 'Building responsive, high-performance websites using modern frameworks like React.',
  },
  {
    id: 2,
    icon: PaintBrushIcon,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces with a focus on user experience.',
  },
  {
    id: 3,
    icon: CircleStackIcon,
    title: 'Backend Integration',
    description: 'Connecting web applications to data and services using REST APIs and backend tools.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-800 text-white text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-display">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon; // Assign the component to a variable with a capital letter
            return (
              <div key={service.id} className="bg-slate-900 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <Icon className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold mb-2 font-display">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}