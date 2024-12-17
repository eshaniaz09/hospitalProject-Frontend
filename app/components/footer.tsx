"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Footer = () => {
  return (
    <footer id='#more' className="bg-gray-900 w-full text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer grid for product, solutions, integrations, and resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Product</h3>
            <ul className="flex flex-col gap-2">
              <li>Pricing</li>
              <li>Artificial Intelligence</li>
              <li>Benefits</li>
              <li>Features</li>
              <li>Product Demo</li>
              <li>Visual Builder</li>
              <li>Dynamic Responses</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Solutions</h3>
            <ul className="flex flex-col gap-2">
              <li>Marketing</li>
              <li>Customer Support</li>
              <li>Sales</li>
              <li>Education</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Integrations</h3>
            <ul className="flex flex-col gap-2">
              <li>Chat Widget</li>
              <li>Live Chat</li>
              <li>HelpDesk</li>
              <li>Facebook Messenger</li>
              <li>Shopify</li>
              <li>Slack</li>
              <li>Zendesk</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li>ChatBot Templates</li>
              <li>Help Center</li>
              <li>API & Developers</li>
              <li>ChatBot Academy</li>
              <li>Blog</li>
              <li>ChatBot Best Practices</li>
              <li>System Status</li>
            </ul>
          </div>
        </div>

        {/* Button and social media icons section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 mb-8">
          {/* Buttons - Stack vertically on small screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 md:mb-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">Start your free trial</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">Sign up free</button>
          </div>

          {/* Social media icons - Center and space them properly on small screens */}
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
            <a href="#" className="text-white"><FontAwesomeIcon size="2x" icon={faSquareTwitter} /></a>
            <a href="#" className="text-white"><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
            <a href="#" className="text-white"><FontAwesomeIcon size="2x" icon={faInstagram} /></a>
            <a href="#" className="text-white"><FontAwesomeIcon size="2x" icon={faPinterest} /></a>
          </div>
        </div>

        {/* Footer bottom line with copyright */}
        <hr className="border-gray-700" />
        <div className="flex items-center justify-center mt-6 w-full h-10 bg-gray-900">
          <p className="text-gray-300">© 2024 Delta Dev Hospital.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
