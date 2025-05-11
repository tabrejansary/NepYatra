import React, { useEffect, useState } from 'react'
import { sendEmailVerification } from "firebase/auth";
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
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
import { auth, googleProvider } from "../../service/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { Menu, X } from 'lucide-react';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    terms: ''
  });

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

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          firstName: user.displayName?.split(' ')[0] || 'User',
          picture: user.photoURL
        }));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        alert("Login failed: " + error.message);
      });
  };

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }
    
    if (!agreeToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      country: e.target.country.value
    };
    
    if (!validateForm(formData)) {
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      
      await sendEmailVerification(user);
      
      const userData = {
        uid: user.uid,
        email: user.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        emailVerified: false
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      
      alert(`Registration successful! Please check your email (${formData.email}) for verification link.`);
      
      setIsRegister(false);
      e.target.reset();
      setAgreeToTerms(false);
      setErrors({});
      
    } catch (error) {
      console.error(error);
      
      if (error.code === 'auth/email-already-in-use') {
        setErrors(prev => ({...prev, email: 'This email is already registered'}));
      } else {
        alert(error.message);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      if (!user.emailVerified) {
        await auth.signOut();
        alert("Please verify your email first. Check your inbox.");
        return;
      }
  
      const storedUser = JSON.parse(localStorage.getItem('userData')) || {};
      
      localStorage.setItem('user', JSON.stringify({ 
        uid: user.uid, 
        email: user.email,
        firstName: storedUser.firstName || user.displayName?.split(' ')[0] || 'User'
      }));
      setOpenDialog(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  const handleForgotPassword = async () => {
    if (!forgotPasswordEmail) {
      alert("Please enter your email address");
      return;
    }
  
    try {
      await sendPasswordResetEmail(auth, forgotPasswordEmail);
      alert(`Password reset email sent to ${forgotPasswordEmail}. Please check your inbox.`);
      setShowForgotPassword(false);
      setForgotPasswordEmail('');
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className='shadow-sm sticky top-0 bg-white z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4'>
        {/* Left side - Brand name only */}
        <a href="/" className='text-2xl sm:text-3xl font-bold text-[#f56551] hover:text-[#e05544] transition-colors'>
  NepYatra
</a>
        
        {/* Mobile menu button */}
        <div className='flex md:hidden'>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#f56551]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Right side - Navigation and user controls */}
        <div className='hidden md:flex items-center gap-8'>
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
                <Button variant="outline" className="rounded-full hidden sm:inline-flex">+ Create Trip</Button>
              </a>
              <a href="/my-trips">
                <Button variant="outline" className="rounded-full hidden sm:inline-flex">My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger className="flex items-center gap-2">
                  <span className="hidden md:inline">
                    Hey, {user?.firstName || user?.given_name || 'User'}
                  </span>
                  <img 
                    src={user?.picture || "https://via.placeholder.com/35"} 
                    alt="Profile" 
                    className='h-[35px] w-[35px] rounded-full' 
                  />
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-gray-700 hover:text-[#f56551] font-bold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-[#f56551] font-bold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="text-gray-700 hover:text-[#f56551] font-bold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            {user ? (
              <>
                <a 
                  href="/create-trip" 
                  className="text-gray-700 hover:text-[#f56551] font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  + Create Trip
                </a>
                <a 
                  href="/my-trips" 
                  className="text-gray-700 hover:text-[#f56551] font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Trips
                </a>
                <div className="flex items-center gap-2 py-2">
                  <img 
                    src={user?.picture || "https://via.placeholder.com/35"} 
                    alt="Profile" 
                    className='h-[35px] w-[35px] rounded-full' 
                  />
                  <span>
                    Hey, {user?.firstName || user?.given_name || 'User'}
                  </span>
                </div>
                <button
                  className="text-left text-gray-700 hover:text-[#f56551] font-bold py-2"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Button 
                  onClick={() => {
                    setOpenDialog(true);
                    setIsRegister(false);
                    setMobileMenuOpen(false);
                  }} 
                  variant="outline" 
                  className="hover:bg-[#f56551] hover:text-white w-full">
                  Sign In
                </Button>
                <Button 
                  onClick={() => {
                    setOpenDialog(true);
                    setIsRegister(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#f56551] hover:bg-[#e05544] w-full">
                  Register
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}

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
                  
                  <form className="mt-4 space-y-4" onSubmit={handleRegister}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className={`mt-1 p-2 w-full border rounded-md ${errors.firstName ? 'border-red-500' : ''}`}
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className={`mt-1 p-2 w-full border rounded-md ${errors.lastName ? 'border-red-500' : ''}`}
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                        type="password"
                        name="password"
                        required
                        className={`mt-1 p-2 w-full border rounded-md ${errors.password ? 'border-red-500' : ''}`}
                      />
                      {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                      <p className="mt-1 text-xs text-gray-500">
                        Password must be at least 8 characters with uppercase, lowercase, number, and special character
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        required
                        className={`mt-1 p-2 w-full border rounded-md ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      />
                      {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Country</label>
                      <select
                        name="country"
                        required
                        className={`mt-1 p-2 w-full border rounded-md ${errors.country ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          checked={agreeToTerms}
                          onChange={(e) => setAgreeToTerms(e.target.checked)}
                          className={`focus:ring-[#f56551] h-4 w-4 text-[#f56551] border-gray-300 rounded ${errors.terms ? 'border-red-500' : ''}`}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                          I agree to the{' '}
                          <a href="/terms-&-conditions" className="text-[#f56551] hover:text-[#e05544]">
                            Terms and Conditions
                          </a>{' '}
                          and{' '}
                          <a href="/Privacy-Policy" className="text-[#f56551] hover:text-[#e05544]">
                            Privacy Policy
                          </a>
                        </label>
                        {errors.terms && <p className="mt-1 text-sm text-red-600">{errors.terms}</p>}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#f56551] hover:bg-[#e05544] text-white mt-4"
                    >
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
                  
                  <Button onClick={loginWithGoogle} className="w-full mt-6 flex gap-4 items-center">
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
                  
                  <form className="mt-4 space-y-4" onSubmit={handleLogin}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input name="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <input name="password" type="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
                    </div>
                    
                    {!showForgotPassword ? (
                      <div className="text-sm text-center mt-2">
                        <button 
                          type="button"
                          onClick={() => setShowForgotPassword(true)}
                          className="text-[#f56551] hover:text-[#e05544] font-medium"
                        >
                          Forgot Password?
                        </button>
                      </div>
                    ) : (
                      <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-medium text-sm mb-2">Enter your email to reset password</h3>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            value={forgotPasswordEmail}
                            onChange={(e) => setForgotPasswordEmail(e.target.value)}
                            placeholder="Your email address"
                            className="flex-1 p-2 border rounded-md text-sm"
                            required
                          />
                          <Button
                            type="button"
                            onClick={handleForgotPassword}
                            className="bg-[#f56551] hover:bg-[#e05544] text-white text-sm"
                          >
                            Send Reset Link
                          </Button>
                        </div>
                        <button 
                          type="button"
                          onClick={() => {
                            setShowForgotPassword(false);
                            setForgotPasswordEmail('');
                          }}
                          className="text-xs text-gray-500 mt-2 hover:text-gray-700"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                    
                    <Button type="submit" className="w-full bg-[#f56551] hover:bg-[#e05544]">Sign In</Button>
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