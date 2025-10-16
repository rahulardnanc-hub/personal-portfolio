// src/components/Contact.tsx

export function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8" font-display>Contact Me</h2>
        <form className="max-w-xl mx-auto text-left">
          
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
            <input type="text" id="name" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="Rahul Chandra" required/>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
            <input type="email" id="email" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="name@example.com" required/>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
            <textarea id="message" rows={4} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="Let's talk about..."></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">
            Send Message
          </button>
          
        </form>
      </div>
    </section>
  );
}