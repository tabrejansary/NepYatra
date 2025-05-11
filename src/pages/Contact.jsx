import React, { useState } from 'react';
import { Mail, Smartphone, MapPin } from 'lucide-react';
import { Button } from "../components/ui/button";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const name = encodeURIComponent(e.target.name.value);
    const email = encodeURIComponent(e.target.email.value);
    const message = encodeURIComponent(e.target.message.value);
  
    const url = `https://script.google.com/macros/s/AKfycbw9WoSvZniCaTHfKZZIqsXIabgmsTRHtdCT0s5gYpaASZWiR6D4VkqPuWDTgUcdmjOH/exec?name=${name}&email=${email}&message=${message}`;
  
    try {
      await fetch(url, { method: "GET", mode: "no-cors" });
      setSubmitStatus("success");
      setSubmitMessage("Message sent!");
      e.target.reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Error sending message (but it might still work)");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-16">
          
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl font-bold text-[#f56551] mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have a question or need help planning your trip? Our team is here to assist you with anything related to your travel journey. Feel free to reach out!
            </p>
          </section>

          {/* Contact Info */}
          <section className="grid md:grid-cols-3 gap-8 text-center mb-20">
            <div className="flex flex-col items-center">
              <Mail className="text-[#f56551] mb-4" size={36} />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
              <p className="text-gray-600">support@nepyatra.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="text-[#f56551] mb-4" size={36} />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-600">+977-9800000000</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-[#f56551] mb-4" size={36} />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
              <p className="text-gray-600">Kathmandu, Nepal</p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
            
            {/* Submission Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f56551]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f56551]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5" 
                  placeholder="Write your message here..." 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f56551]"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-[#f56551] text-white px-6 py-2 rounded-lg hover:bg-[#e15445] text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </section>
        </div>
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
                <li><a href="/destination-guide" className="text-gray-400 hover:text-white">Destination Guides</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
export default Contact;
