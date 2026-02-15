'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const router = useRouter();
  
  // States
  const [step, setStep] = useState<'register' | 'otp'>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Registration Submit
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    // Change to OTP step
    setStep('otp');
  };

  // OTP Verification Submit
  const handleVerifyOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    alert("Verification Successful!");
    router.push('/login'); // Redirect to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-blue-300 px-4">
      
      <AnimatePresence mode="wait">
        {step === 'register' ? (
          /* --- REGISTER CARD --- */
          <motion.div
            key="register-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 md:p-8 space-y-5"
          >
            <div className="text-center space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Create Account</h2>
              <p className="text-sm text-gray-600">Register to get started</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text" required value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1d606e] outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1d606e] outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'} required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1d606e] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                  <input
                    type={showPassword ? 'text' : 'password'} required value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1d606e] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                  className="h-4 w-4 mr-2"
                />
                Show Password
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 font-medium text-white bg-[#1d606e] rounded-md hover:bg-[#154b57] transition disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Register Now'}
              </button>
            </form>
          </motion.div>
        ) : (
          /* --- OTP VERIFY CARD --- */
          <motion.div
            key="otp-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-8 space-y-6 border-t-4 border-[#1d606e]"
          >
            <div className="text-center space-y-2">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
              <p className="text-sm text-gray-500">
                We've sent a code to <br />
                <span className="font-semibold text-gray-700">{email}</span>
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="0 0 0 0 0 0"
                  className="w-full text-center text-2xl tracking-[10px] font-bold py-3 border-2 border-gray-200 rounded-lg focus:border-[#1d606e] focus:outline-none transition-all text-black"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 font-bold text-white bg-[#1d606e] rounded-lg hover:bg-[#154b57] shadow-lg transition disabled:opacity-50"
              >
                {isLoading ? 'Verifying...' : 'Verify & Complete'}
              </button>

              <button 
                type="button"
                onClick={() => setStep('register')}
                className="w-full text-sm text-gray-500 hover:text-[#1d606e] transition"
              >
                ← Back to Registration
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}