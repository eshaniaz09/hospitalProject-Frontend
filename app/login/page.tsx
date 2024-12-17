'use client'; // This ensures the component runs client-side

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import icons

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // You can add actual authentication here

    // On successful login, navigate to the home page
    router.push('/');
  };

  const handleSocialLogin = (provider: string) => {
    // Placeholder for social login functionality
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-lg p-6 bg-gray-200 rounded-lg shadow-lg"> {/* Increased width */}
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">LOGIN </h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between my-4">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center w-full p-3 border border-gray-400 rounded-md hover:bg-gray-100 transition duration-200"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-600" />
            Login with Google
          </button>
          <button
            onClick={() => handleSocialLogin('GitHub')}
            className="flex items-center justify-center w-full p-3 border border-gray-400 rounded-md hover:bg-gray-100 transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2 text-black" />
            Login with GitHub
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account? <a href="#" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
