import React from 'react';
import ChickenRepublic from '../BiolaEat/ChickenRepublic.png';
import KFC from '../BiolaEat/KFC.png';
import ThePlace from '../BiolaEat/ThePlace.png';
import Debonair from '../BiolaEat/Debonair.png';
import BurgerKing from '../BiolaEat/BurgerKing.jpg';
import SweetSensation from '../BiolaEat/SweetSensation.png';
import IndomieCafe from '../BiolaEat/IndomieCafe.jpg';
import MegaChicken from '../BiolaEat/MegaChicken.png';

const SectionFive = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      {/* First Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="food">
        <div className="mb-4">
          <img src={ChickenRepublic} className='h-auto w-full' alt='chickenrepublic' />
          <h3 className="text-xl font-semibold mt-2">Chicken Republic</h3>
          <p className="text-sm">Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="mb-4">
        <img src={KFC} className='h-auto w-full' alt='kfc' />
          <h3 className="text-xl font-semibold mt-2">KFC</h3>
          <p className="text-sm">Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="mb-4">
        <img src={ThePlace} className='h-auto w-full' alt='theplace' />
          <h3 className="text-xl font-semibold mt-2">The Place</h3>
          <p className="text-sm">Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          <p className="text-sm">What else?</p>
        </div>
        <div className="mb-4">
        <img src={Debonair} className='h-auto w-full' alt='debonair' />
          <h3 className="text-xl font-semibold mt-2">Debonairs Pizza</h3>
          <p className="text-sm">Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
      </div>

      {/* Second Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="mb-4">
        <img src={SweetSensation} className='h-auto w-full' alt='sweetsensation' />
          <h3 className="text-xl font-semibold mt-2">Sweet Sensation</h3>
          <p className="text-sm">Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="mb-4">
        <img src={IndomieCafe} className='h-auto w-full' alt='indomiecafe' />
          <h3 className="text-xl font-semibold mt-2">Indomie Cafe</h3>
          <p className="text-sm">Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="mb-4">
        <img src={BurgerKing} className='h-auto w-full' alt='burgerking' />
          <h3 className="text-xl font-semibold mt-2">Burger King</h3>
          <p className="text-sm">Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="mb-4">
        <img src={MegaChicken} className='h-auto w-full' alt='megachicken' />
          <h3 className="text-xl font-semibold mt-2">Mega Chicken</h3>
          <p className="text-sm">Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
