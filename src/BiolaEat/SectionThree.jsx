import React from 'react';
import Map from '../BiolaEat/Map.png'

const SectionThree = () => {
  return (
    <div className="text-center text-white">
      <section className="bg-[#EAB308] text-white py-8">
        <h2 className="text-4xl font-bold mb-4">Track orders to your door</h2>
        <p className="text-lg text-gray-200">
          Get your favourite food delivered in a flash. You’ll see when your rider’s picked up your order, and be able to follow them along the way. You’ll get a notification when they’re nearby, too.
        </p>
      </section>
      <div className='flex justify-around p-14 text-black bg-[#EAB308]'>
      <section className="my-8 p-12">
        <h2 className="text-2xl font-bold mb-4">Download Biola.dev</h2>
        <a
          href="#"
          className="bg-blue-500 text-white px-4 py-2 rounded inline-block mx-2 hover:bg-blue-700 transition duration-300"
        >
          Get it on the App Store
        </a>
        <a
          href="#"
          className="bg-green-500 text-white px-4 py-2 rounded inline-block mx-2 hover:bg-green-700 transition duration-300"
        >
          Get it on Google Play
        </a>
      </section>
      <section>
      <img src={Map} className="w-2/4" alt="deliver" />
      </section>
    </div>
    </div>
  );
};

export default SectionThree;
