// src/App.tsx

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'; // Import Hero
import { About } from './components/About';
import { Services } from './components/Services'; // Import Services
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;