import React from 'react';

function Header() {
  return (
    <header className="bg-[#030000] p-6 text-[#7F3F00] text-2xl font-bold">
      <div className="flex items-center justify-end gap-6">
        <a href="" className="">How It Works</a>
        <a href="" className="">Office</a>
        <button className="bg-[#004019] hover:bg-[#7F3F00] hover:text-[#004019] py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
