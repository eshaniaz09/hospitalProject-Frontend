"use client";
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';

const servicesData = [
  {
    id: 1,
    imgSrc: '/emrg.avif', // Replace with your image paths
    title: 'Emergency Care',
    description: 'Immediate care for life-threatening conditions and serious injuries.',
  },
  {
    id: 2,
    imgSrc: '/meternity.jpeg',
    title: 'Maternity Services',
    description: 'Comprehensive care for mothers and newborns before, during, and after childbirth.',
  },
  {
    id: 3,
    imgSrc: '/preCare.jpg',
    title: 'Pediatric Care',
    description: 'Specialized care for infants, children, and adolescents.',
  },
  {
    id: 4,
    imgSrc: '/surgery.avif',
    title: 'Surgery',
    description: 'Advanced surgical procedures with skilled professionals and modern technology.',
  },
  {
    id: 5,
    imgSrc: '/radiology.avif',
    title: 'Radiology',
    description: 'Accurate imaging services to assist in diagnosis and treatment.',
  },
  {
    id: 6,
    imgSrc: '/PhysicalTherapy.avif',
    title: 'Physical Therapy',
    description: 'Rehabilitation services to help patients recover mobility and strength.',
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center flex flex-col items-center mt-8 justify-center" style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}>
      <h2 className="text-4xl font-bold text-white mb-8">OUR SERVICES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {servicesData.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
