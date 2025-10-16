// src/components/About.tsx

export function About() {
  return (
    // Updated the section background to the new slate color
    <section id="about" className="bg-slate-900 text-white text-center py-16">
      <div className="container mx-auto">
        
        <h2 className="text-3xl font-bold mb-4" font-display>About Me</h2>

        {/* Change text-gray-400 to text-slate-400 inside the className */}
        <p className="text-slate-400 max-w-2xl mx-auto">
          I am a passionate frontend developer specializing in creating modern,
          responsive, and user-friendly web applications. With a strong foundation
          in React and Tailwind CSS, I love turning complex problems into{' '}
          <span className="text-indigo-400 font-semibold">
            elegant, simple, and beautiful designs
          </span>.
        </p>

      </div>
    </section>
  );
}