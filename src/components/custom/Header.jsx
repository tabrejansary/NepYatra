import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  // List of all countries (alphabetical order)
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", 
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
    "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", 
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", 
    "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
    "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
    "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", 
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", 
    "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", 
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
    "Solomon Islands", "Somalia", "South Africa", "South Korea", 
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
    "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", 
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", 
    "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", 
    "United Arab Emirates", "United Kingdom", "United States of America", 
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", 
    "Zambia", "Zimbabwe"
  ];

  useEffect(() => {
    console.log(user)
  }, [user])

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json',
      },
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    }).catch((error) => {
      console.error("Error fetching user profile: ", error);
    });
  }

  return (
    <div className='shadow-sm sticky top-0 bg-white z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
        {/* Left side - Brand name only */}
        <h1 className='text-3xl font-bold text-[#f56551]'>NepYatra</h1>
        
        {/* Right side - Navigation and user controls */}
        <div className='flex items-center gap-8'>
          {/* Navigation links - moved to right */}
          <nav className='hidden md:flex gap-8'>
            <a href="/" className='text-gray-700 hover:text-[#f56551] font-bold'>Home</a>
            <a href="/about" className='text-gray-700 hover:text-[#f56551] font-bold'>About</a>
            <a href="/contact" className='text-gray-700 hover:text-[#f56551] font-bold'>Contact</a>
          </nav>

          {/* User controls */}
          {user ? (
            <div className='flex items-center gap-3'>
              <a href="/create-trip">
                <Button variant="outline" className="rounded-full">+ Create Trip</Button>
              </a>
              <a href="/my-trips">
                <Button variant="outline" className="rounded-full">My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>             
                  <img src={user?.picture} alt="" className='h-[35px] w-[35px] rounded-full' />
                </PopoverTrigger>
                <PopoverContent>
                  <h2 className='cursor-pointer' onClick={()=>{
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}>Logout</h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  setOpenDialog(true);
                  setIsRegister(false);
                }} 
                variant="outline" 
                className="hover:bg-[#f56551] hover:text-white">
                Sign In
              </Button>
              <Button 
                onClick={() => {
                  setOpenDialog(true);
                  setIsRegister(true);
                }}
                className="bg-[#f56551] hover:bg-[#e05544]">
                Register
              </Button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#f56551] mb-2">
              NepYatra
            </DialogTitle>
            {isRegister ? (
              <>
                <DialogDescription>
                  <h2 className='font-bold text-lg text-black'>Create your account</h2>
                  <p className="text-gray-600">Join us to start planning your trips</p>
                  
                  {/* Registration Form */}
                  <form className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                      <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Country</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required>
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="terms" className="h-4 w-4 text-[#f56551] focus:ring-[#f56551] border-gray-300 rounded" required />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
  I agree to the <a href="/terms-&-conditions" className="text-[#f56551] mb-2hover:underline">Terms & Conditions</a> and <a href="/Privacy-Policy" className="text-[#f56551] mb-2 hover:underline">Privacy Policy</a>
</label>

                    </div>
                    
                    <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                    
                    <Button type="submit" className="w-full bg-[#f56551] hover:bg-[#e05544]">
                      Register
                    </Button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <button 
                        onClick={() => setIsRegister(false)}
                        className="font-medium text-[#f56551] hover:text-[#e05544]"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </DialogDescription>
              </>
            ) : (
              <>
                <DialogDescription>
                  <h2 className='font-bold text-lg text-black'>Sign In to your account</h2>
                  <p className="text-gray-600">Sign in to check out your travel plan</p>
                  
                  <Button
                    onClick={login}
                    className="w-full mt-6 flex gap-4 items-center">
                    <FcGoogle className="h-7 w-7" />Sign in With Google
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" id="remember" className="h-4 w-4 text-[#f56551] focus:ring-[#f56551] border-gray-300 rounded" />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>
                      
                      <a href="/forgot-password" className="text-sm text-[#f56551] hover:text-[#e05544]">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button type="submit" className="w-full bg-[#f56551] hover:bg-[#e05544]">
                      Sign In
                    </Button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <button 
                        onClick={() => setIsRegister(true)}
                        className="font-medium text-[#f56551] hover:text-[#e05544]"
                      >
                        Register
                      </button>
                    </p>
                  </div>
                </DialogDescription>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header