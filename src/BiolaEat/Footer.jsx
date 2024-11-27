import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#59361351] text-[#7F3F00] p-4 text-center font-semibold">
      <div className="flex justify-center items-center mb-4 gap-10">
        <a href="#" className="mr-4 hover:underline">Terms of Service</a>
        <a href="#" className="mr-4 hover:underline">Privacy</a>
        <a href="#" className="mr-4 hover:underline">Delivery Locations</a>
      </div>
      <p>&copy; 2023 Biola.dev</p>
    </footer>
  );
};

export default Footer;
