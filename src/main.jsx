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


const router = createBrowserRouter([{
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
}
,

{
  path:'/create-trip',
  element: <CreateTrip />
},
{
  path: '/view-trip/:tripId',
  element: <Viewtrip />
},
{
  path: '/my-trips',
  element: <MyTrips />
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="149859274442-t2ldpebc37ihcd2tt3t2gr9oobe2jqvk.apps.googleusercontent.com">
      <Header />
      <Toaster/>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
