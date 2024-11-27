import React, { useState } from 'react';
import Header from '../BiolaEat/Header';
import HeroImage from '../BiolaEat/HeroImg.jpg';
import Logo from '../BiolaEat/Logo';

const SectionOne = () => {
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${cuisine} delivery near ${address}`);
  };

  return (
    <div className=''>
    <div>
      <Header />
    </div>
    <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center brightness-50" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="p-[2%] text-black text-center w-[25%] bg-[#fe7f00c7] border rounded-3xl">
        <div className='p-6'>
        <Logo />
        </div>
        <div className=''>
        </div>
        <h2 className="text-4xl mb-4">See who delivers in your neighborhood</h2>
        <div className="mb-4">
          <input
            type="text"
            id="address"
            className="w-full border p-2 bg-[#2b26229b] text-white"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cuisine" className="text-4xl mb-4">Search</label>
          <input
            type="text"
            id="cuisine"
            className="w-full border p-2 bg-[#2b26229b] text-black"
            placeholder="Fast Food, Local dishes, Snacks, etc."
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>
        <button
          className="bg-[#004019] text-white py-2 px-4 rounded hover:bg-black transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

export default SectionOne;
