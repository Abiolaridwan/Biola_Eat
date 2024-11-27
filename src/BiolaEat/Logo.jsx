import React from 'react';
import NigIcon from '../BiolaEat/nigeria.png';

const Logo = () => {
  return (
    <div className='flex items-center space-x-3 p-4 pl-40'>
      <img src={NigIcon} className='h-10 w-10' alt='Biola Icon' />
      <h1 className='font-extrabold text-4xl text-[#004019]'>Biola.dev</h1>
    </div>
  );
};

export default Logo;