import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-6">
                  We collect information to provide better services to our users. The types of information we collect include:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number when you create an account or contact us</li>
                  <li><strong>Travel Preferences:</strong> Destination interests, budget ranges, travel dates you provide when planning trips</li>
                  <li><strong>Usage Data:</strong> How you interact with our platform, pages visited, features used</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system for technical optimization</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your travel recommendations and experience</li>
                  <li>Communicate with you about your account or trips</li>
                  <li>Enhance platform security and prevent fraud</li>
                  <li>Analyze usage trends to improve our services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="mb-6">
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our platform (e.g., hosting, analytics)</li>
                  <li><strong>Travel Partners:</strong> Only when necessary to fulfill your travel requests (with your consent)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger or sale of company assets</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-6">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict certain processing</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
                <p className="mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can manage cookie preferences through your browser settings.
                </p>

                <h2 className="text-xl font-semibold mb-4">7. Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not directed to individuals under 16. We do not knowingly collect personal information from children without parental consent.
                </p>

                <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy periodically. We will notify you of significant changes through our platform or by email.
                </p>

                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or your personal data, please contact us at privacy@nepyatra.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (same as Terms & Conditions) */}
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
                <li><a href="https://theworldtravelguy.com/" className="text-gray-400 hover:text-white">Travel Blog</a></li>
                <li><a href="/destination-guide" className="text-gray-400 hover:text-white">Destination Guides</a></li>
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

export default PrivacyPolicy;