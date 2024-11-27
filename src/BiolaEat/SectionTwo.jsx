import React from 'react';
import Deliver from '../BiolaEat/Deliver.png';
import Admin from '../BiolaEat/Admin.png';
import Phones from '../BiolaEat/phones.png';

const SectionTwo = () => {
  return (
    <div className="flex items-center bg-[#fe7f000d]">
      <section className="p-44">
        <img src={Deliver} className="w-2/4" alt="scooter" />
        <br />
         <h2 className="text-3xl font-bold">Work with us</h2>
        <p className="text-2xl">
          As a delivery driver, you'll make reliable money — working anytime, anywhere.
        </p>
        <br />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Start earning</button>
      </section>

      <section className="">
        <img src={Admin} className="w-2/4" alt="admin" />
        <h2 className="text-3xl font-bold">Become a Partner</h2>
        <p className="text-2xl">
          Grow your business and reach new customers by partnering with us.
        </p>
        <br />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Sign up your store</button> 
      </section>

      <section className="">
        <img src={Phones} className="w-2/4" alt="phones" />
         <h2 className="text-3xl font-bold">Get the best experience</h2>
        <p className="text-2xl">
          Experience the best your neighborhood has to offer, all in one app.
        </p>
        <br />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get the app</button>
      </section>
    </div>
  );
};

export default SectionTwo;
