import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sparkles, MapPin, Smartphone, FileDown, Wand2, Share2, Mountain, Globe, Heart, Star } from 'lucide-react';

import VideoPromo from './VideoPromo';


const Hero = () => {



  
  // Image carousel state
  const images = [
    '/asset/world1.png',
    '/asset/world2.webp',
    '/asset/world3.jpg',
    '/asset/world4.jpg',
    '/asset/world5.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);


    // Reviews state
    const testimonials = [
      {
        name: "Elena Hartley",
        title: "Adventure Enthusiast @Wanderlust Trails",
        text: "This app makes organizing travel plans a breeze! All the must-see spots are right at your fingertips. Definitely a game changer for trip planning.",
        rating: 5,
        image: "/asset/h.jpg"
      },
      {
        name: "Liam Foster",
        text: "Absolutely love this app! So intuitive and the AI features make it incredibly convenient to plan trips effortlessly.",
        rating: 5,
        initial: "L"
      },
      {
        name: "Maya Linton",
        text: "This is officially my go-to travel app! It’s super user-friendly, and the recommendations for local attractions are spot on. Big thanks to the developers! 👏👏",
        rating: 5,
        image: "/asset/g.jpg"
      },
      
      {
        name: "Eric Franco",
        text: "Absolutely love this app! It is so helpful when planning my trips. I especially love the optimize route option. When I have all my information in place it is fabulous!",
        rating: 5,
        image: "/asset/a.jpg"
      },
      {
        name: "Belinda and Kathy Kohles",
        text: "I have used several trip planning apps. This one by far is the best. The interaction between google maps makes the planning so much easier.",
        rating: 5,
        image: "/asset/b.jpg"
      },
      {
        name: "Lydia Yang",
        title: "Founder @LydiaScapes Adventures",
        text: "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.",
        rating: 5,
        initial: "L"
      },
      
        {
          name: "Nadim",
          title: "Travel Blogger @CoupleTravels",
          text: "Planning your trip by having all the attractions already plugged into a map makes trip planning so much easier.",
          rating: 5,
          image: "/asset/f.jpeg"
        },
        {
          name: "Sharon Brewster",
          text: "Amazing app! Easy to use, love the AI functionality.",
          rating: 5,
          initial: "S"
        },
        {
          name: "Jayson Oite",
          text: "It seems to be this is my new travel app buddy. Very handy, convenient and very easy to use. It also recommends tourist destinations and nearby places. Kudos to the programmer! 👏👏",
          rating: 5,
          image: "/asset/d.webp"
        },
        
        {
          name: "Marcus Chen",
          title: "Solo Traveler @WanderWithMarcus",
          text: "This app is a game-changer for solo travel. The itinerary suggestions and real-time updates helped me discover hidden gems effortlessly.",
          rating: 5,
          image: "/asset/e11.jpg"
        },
        {
          name: "Talia Rivera",
          text: "The app’s interface is so intuitive! I love how it syncs my plans across devices and suggests dining options near my stops.",
          rating: 5,
          initial: "T"
        },
        {
          name: "Amir Hassan",
          text: "Perfect for family vacations! The app made it simple to plan kid-friendly activities and keep everyone’s preferences in one place.",
          rating: 5,
          image: "/asset/i.jpg"
        }
      ];
    const [visibleReviews, setVisibleReviews] = useState(6);

    const handleSeeMoreReviews = () => {
      setVisibleReviews((prev) => Math.min(prev + 3, testimonials.length));
    };



 
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow text-center py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="bg-white p-2 rounded-full shadow-md mb-4">
            <Mountain size={48} className="text-[#f56551]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Explore World with <span className="text-[#f56551]">AI-Powered</span> Travel Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            NepYatra creates personalized itineraries tailored to your preferences, budget, and travel style - all with the magic of artificial intelligence.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/create-trip">
              <Button className="px-6 py-3 rounded-lg bg-[#f56551] hover:bg-[#e05544] text-lg">Start Planning</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="px-6 py-3 rounded-lg border-[#f56551] text-[#f56551] hover:bg-[#f56551]/10 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Image Carousel Section */}
          <div className="mt-10 w-full max-w-4xl relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-white" style={{ height: '400px' }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Travel destination ${index + 1}`}
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-[#f56551]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your existing code remains the same */}
       {/* Features Section */}

       <VideoPromo />
       <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Complete Travel Companion</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              NepYatra combines cutting-edge technology with local expertise to revolutionize your travel experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <Wand2 size={24} className="text-[#f56551]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI-Powered Itineraries</h3>
              <p className="text-gray-600">
                Get customized day-by-day plans generated instantly based on your preferences, budget, and travel style.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <MapPin size={24} className="text-[#f56551]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hidden Gems</h3>
              <p className="text-gray-600">
                Discover off-the-beaten-path locations and authentic experiences that most travelers miss.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <Smartphone size={24} className="text-[#f56551]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Smart Recommendations</h3>
              <p className="text-gray-600">
                Hotels, restaurants, and activities curated specifically for your travel profile.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <Globe size={24} className="text-[#f56551]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Local Insights</h3>
              <p className="text-gray-600">
              Tips on the best times to visit each destination, ensuring you experience the key spots at their most convenient and enjoyable.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <Share2 size={24} className="text-[#f56551]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Easy Sharing</h3>
              <p className="text-gray-600">
                Share your travel plans with companions or download them for offline access.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <FileDown size={24} className="text-[#f56551]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Delete Plans</h3>
              <p className="text-gray-600">
                Easily Delete the planned trips after visiting and add the new ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore hundreds of places to visit</h2>
          <p className="text-xl text-gray-600">for every corner of the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* First row - 4 cities */}
          <div className="relative rounded-xl overflow-hidden h-80 group">
            <img
              src="/asset/paris.jpg"
              alt="Paris"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">Paris</h3>
              <p className="text-sm opacity-90">Eiffel Tower · Louvre Museum · Notre-Dame Cathedral</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 group">
            <img
              src="/asset/tokyo.jpg"
              alt="Tokyo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">Tokyo</h3>
              <p className="text-sm opacity-90">Tokyo Tower · Sensō-ji Temple · Shibuya Crossing</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 group">
            <img
              src="/asset/rome.jpg"
              alt="Rome"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">Rome</h3>
              <p className="text-sm opacity-90">Colosseum · Vatican City · Pantheon</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 group">
            <img
              src="/asset/bangkok.jpg"
              alt="Bangkok"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">Bangkok</h3>
              <p className="text-sm opacity-90">Grand Palace · Wat Arun · Chatuchak Weekend Market</p>
            </div>
          </div>

          {/* Second row - 2 wider cities */}
          <div className="relative rounded-xl overflow-hidden h-80 md:col-span-2 group">
            <img
              src="/asset/newyork.jpg"
              alt="New York"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">New York</h3>
              <p className="text-sm opacity-90">Statue of Liberty · Central Park · Times Square</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 md:col-span-2 group">
            <img
              src="/asset/london.jpg"
              alt="London"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">London</h3>
              <p className="text-sm opacity-90">Tower of London · British Museum · Buckingham Palace</p>
            </div>
          </div>

          {/* Third row - Dubai and Sydney */}
          <div className="relative rounded-xl overflow-hidden h-80 md:col-span-1 lg:col-span-2 group">
            <img
              src="/asset/dubai.jpg"
              alt="Dubai"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">Dubai</h3>
              <p className="text-sm opacity-90">Burj Khalifa · Dubai Mall · Palm Jumeirah</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 md:col-span-1 lg:col-span-2 group">
            <img
              src="/asset/sydney.jpg"
              alt="Sydney"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-2xl font-bold">Sydney</h3>
              <p className="text-sm opacity-90">Opera House · Harbour Bridge · Bondi Beach</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/create-trip">
            <Button className="px-6 py-3 rounded-lg bg-[#f56551] hover:bg-[#e05544] text-lg">
              Explore More Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>


           {/* Testimonial/CTA Section */}
           <section className="bg-[#f56551] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Travel Smarter, Not Harder</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            "NepYatra saved me hours of research and helped me discover places I never would have found on my own." - One of Traveller
          </p>
          <Link to="/create-trip">
            <Button className="px-8 py-4 rounded-lg bg-white text-[#f56551] hover:bg-gray-100 text-lg font-bold">
              Create Your Free Itinerary
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What travelers are raving about</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Over 1 thousand people have already tried NepYatra and loved its easy trip planning features.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.slice(0, visibleReviews).map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full mr-4 object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xl mr-4">
                          {testimonial.initial}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.title && <p className="text-sm text-gray-500">{testimonial.title}</p>}
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm">{testimonial.text}</p>
                  </div>
                ))}
              </div>
              {visibleReviews < testimonials.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleSeeMoreReviews}
                    className="text-[#f56551] font-semibold hover:underline"
                  >
                    See more reviews
                  </button>
                </div>
              )}
            </div>
          </section>
    




      {/* Custom Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#f56551]">NepYatra</h3>
              <p className="text-gray-400">
                Your AI-powered travel companion for exploring World's beauty with ease and confidence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
               
                <li><Link to="/create-trip" className="text-gray-400 hover:text-white">Plan a Trip</Link></li>
                <li><Link to="/terms-&-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
                <li><Link to="/Privacy-Policy" className="text-gray-400 hover:text-white">Privacy policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="https://theworldtravelguy.com/" className="text-gray-400 hover:text-white">Travel Blog</Link></li>
                <li><Link to="/destination-guide" className="text-gray-400 hover:text-white">Destination Guides</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
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
      
export default Hero;