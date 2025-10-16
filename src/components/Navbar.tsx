// src/components/Navbar.tsx

// A React component is just a function that returns JSX (HTML-like code).
export function Navbar() {
  return (
    // The main container for the navbar with a dark background and padding.
    <nav className="fixed top-0 left-0 w-full bg-slate-800 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* This is the "brand" or logo section on the left. */}
        <a href="#" className="text-xl font-bold">
          Rahul.
        </a>

        {/* This is the container for our navigation links on the right. */}
        <div className="flex gap-4">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#projects" className="hover:text-emerald-400">Projects</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </div>

      </div>
    </nav>
  );
}