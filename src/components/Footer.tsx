// src/components/Footer.tsx

export function Footer() {
  // Get the current year dynamically.
  const currentYear = new Date().getFullYear();

  return (
    // We can also update the footer background to our new slate color
    <footer className="bg-slate-900 text-center p-4">
      <div className="container mx-auto">
        {/* The class goes inside the p tag like this */}
        <p className="text-slate-500">
          &copy; {currentYear} Rahul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}