"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, phoneNumber, message });

    // Clear input fields after form submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setIsSubmitted(true);

    // Optionally, reset the button after a certain time
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 h-auto my-12 p-10">
      {/* Left Section: Contact Info */}
      <div className='flex flex-col gap-5 lg:w-1/2'>
        <h3 className="font-bold text-white mb-4">Get in Touch</h3>
        <h2 className="text-6xl font-bold text-white mb-6">
          <span className='text-blue-800 '>Convey Your</span> <br /> Ideas to Us
        </h2>
        <p className='text-white text-lg'>
          Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.
        </p>
        <div className="mt-4 text-lg font-bold flex flex-col gap-1 text-gray-300">
          <p>+3247155820</p>
          <p className='cursor-pointer text-blue-900 underline'>deltaDev01@gmail.com</p>
          <p>St-453 Abdullah Pure,Faisalabad, C-block</p>
        </div>
      </div>

      {/* Right Section: Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 lg:w-1/2">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />

        {/* Email and Phone Number */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Message Field */}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md h-60"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className={`font-bold py-2 px-4 rounded-md transition-colors ${
            isSubmitted ? 'bg-green-500' : 'bg-blue-800 hover:bg-blue-500'
          } text-white`}
        >
          {isSubmitted ? 'Submitted' : 'SUBMIT NOW'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
