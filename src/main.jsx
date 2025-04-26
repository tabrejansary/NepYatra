import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips/index.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import DestinationGuide from './pages/DestinationGuide.jsx'
import FAQ from './pages/faq.jsx' // 
import TermsConditions from './pages/termsconditions.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/create-trip',
    element: <CreateTrip />
  },
  {
    path: '/view-trip/:tripId',
    element: <Viewtrip />
  },
  {
    path: '/my-trips',
    element: <MyTrips />
  },
  {
    path: '/destination-guide',
    element: <DestinationGuide />
  },
  {
    path: 'faq',
    element: <FAQ />
  },
  {
    path: 'terms-&-conditions',
    element: <TermsConditions />
  },
  {
    path: 'Privacy-Policy',
    element: <PrivacyPolicy />
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster/>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
