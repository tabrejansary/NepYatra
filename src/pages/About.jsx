import React, { useState } from 'react';
import { Globe, Github, Linkedin, Mail, Smartphone, Code, Award } from 'lucide-react';
import { Button } from "../components/ui/button";




const developers = [
  {
    name: "Tabrez Ansari",
    photo: "/asset/tbrz3.jpeg",
    role: "Team Lead | Backend Development",
    bio: "Experienced backend developer with a strong foundation in full-stack technologies. Leads the team with a vision for scalable and secure web architecture.",
    skills: ["Javascript","React", "Node.js", "MongoDB", "MySQL"],
    social: {
      github: "github.com/Tabrejansary",
      linkedin: "linkedin.com/in/tabrej-ansari",
      email: "contactwithtabrej@gmail.com"
    }
  },
  {
    name: "Suraj Gupta",
    photo: "/asset/suraj.png",
    role: "UI/UX Designer | Frontend Assist",
    bio: "Innovative UI/UX designer crafting intuitive and elegant interfaces. Assists in frontend to ensure design consistency and user satisfaction.",
    skills: ["Figma", "Adobe XD", "User Research","HTML/CSS","Javascript"],
    social: {
      github: "github.com/shyamsundarsah123",
      linkedin: "linkedin.com/in/sitasharma",
      email: "Surajgupta@nepyatra.com"
    }
  },
  {
    name: "Karunesh Kumar Tiwari",
    photo: "/asset/karunesh.png",
    role: "Frontend Development",
    bio: "Dedicated frontend developer passionate about responsive and performant web interfaces. Converts design into reality using modern tools.",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    social: {
      github: "github.com/Karuneshtiwari",
      linkedin: "linkedin.com/in/karunesh-kumar-tiwari-72474a330",
      email: "karunesh789tiwari@gmail.com"
    }
  },
  {
    name: "Shyam Sundar Shah",
    photo: "/asset/shyam.jpeg",
    role: "UI/UX Assist | Backend Assist",
    bio: "Bridges the gap between technical implementation and user needs. Supports both UI/UX and backend development to deliver well-rounded features.",
    skills: ["MySQL", "API Integration", "Documentations"],
    social: {
      github: "github.com/shyamsundarsah123",
      linkedin: "linkedin.com/in/shyamsundar",
      email: "shyamsundar@gmail.com"
    }
  },
];

const About = () => {
  const [selectedDev, setSelectedDev] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl font-bold text-[#f56551] mb-6">About NepYatra</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              NepYatra revolutionizes travel planning with AI-powered itineraries, connecting travelers with authentic experiences worldwide. Our platform combines cutting-edge technology with local expertise to make every journey unforgettable.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize travel planning by making personalized, AI-powered itineraries accessible to everyone, from solo backpackers to family vacationers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Globe className="text-[#f56551] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Global Coverage</h3>
                      <p className="text-gray-600">From the Himalayas to tropical beaches, we've got you covered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Code className="text-[#f56551] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Tech-Driven</h3>
                      <p className="text-gray-600">Powered by advanced algorithms and machine learning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="text-[#f56551] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Local Expertise</h3>
                      <p className="text-gray-600">Authentic recommendations from locals and frequent travelers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <img 
                  src="/asset/missionNepYatra.png" 
                  alt="Travel planning" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet The Team | SSTK Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {developers.map((dev, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedDev(dev)}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                      src={dev.photo}
                      alt={dev.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#f56551]"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800">{dev.name}</h3>
                      <p className="text-[#f56551] font-medium mb-2">{dev.role}</p>
                      <p className="text-gray-600 line-clamp-2">{dev.bio}</p>
                      <div className="flex justify-center md:justify-start gap-3 mt-4">
                        <a href={`https://${dev.social.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#f56551]">
                          <Github />
                        </a>
                        <a href={`https://${dev.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#f56551]">
                          <Linkedin />
                        </a>
                        <a href={`mailto:${dev.social.email}`} className="text-gray-500 hover:text-[#f56551]">
                          <Mail />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-[#f56551] text-white py-12 px-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who trust NepYatra for their perfect itinerary.
            </p>
            <Button className="px-8 py-4 rounded-lg bg-white text-[#f56551] hover:bg-gray-100 text-lg font-bold" onClick={() => window.location.href = '/create-trip'}>
              Start Planning Now
            </Button>
          </section>
        </div>

        {/* Developer Detail Modal */}
        {selectedDev && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedDev.name}</h3>
                    <p className="text-[#f56551] font-medium">{selectedDev.role}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedDev(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <img
                    src={selectedDev.photo}
                    alt={selectedDev.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-[#f56551] mx-auto md:mx-0"
                  />
                  <div>
                    <p className="text-gray-700 mb-6">{selectedDev.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedDev.skills.map((skill, i) => (
                          <span key={i} className="bg-blue-50 text-[#f56551] px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Connect</h4>
                      <div className="flex gap-4">
                        <a 
                          href={`https://${selectedDev.social.github}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-[#f56551]"
                        >
                          <Github size={20} /> GitHub
                        </a>
                        <a 
                          href={`https://${selectedDev.social.linkedin}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-[#f56551]"
                        >
                          <Linkedin size={20} /> LinkedIn
                        </a>
                        <a 
                          href={`mailto:${selectedDev.social.email}`}
                          className="flex items-center gap-2 text-gray-700 hover:text-[#f56551]"
                        >
                          <Mail size={20} /> Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer (from previous design) */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#f56551]">NepYatra</h3>
              <p className="text-gray-400">
                Your AI-powered travel companion for exploring the world's beauty with ease and confidence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
               
                <li><a href="/create-trip" className="text-gray-400 hover:text-white">Plan a Trip</a></li>
                <li><a href="/terms-&-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                <li><a href="/Privacy-Policy" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-400 hover:text-white">Travel Blog</a></li>
                <li><a href="/guides" className="text-gray-400 hover:text-white">Destination Guides</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/nepyatraofficial" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://instagram.com/nepyatraofficial" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://x.com/nepyatraofficial" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">Email: info@nepyatra.com</p>
                <p className="text-gray-400">Phone: +977-1-1234567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NepYatra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;