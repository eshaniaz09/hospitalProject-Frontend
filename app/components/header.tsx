import React from 'react';

interface HeaderProps {
  onSignInClick: () => void; // Define a prop type for the click handler
}

const Header: React.FC<HeaderProps> = ({ onSignInClick }) => {
  return (
    <div>
      <header className="flex w-full px-6 py-4 top-0 justify-between items-center flex-wrap">
        <div className="">
          <h1 className="text-3xl font-bold text-blue-600">LOGO</h1>
        </div>

        <nav className="text-white flex font-semibold flex-wrap text-base gap-2 md:gap-6">
          <div className="cursor-pointer">ABOUT US</div>
          <div className="cursor-pointer">SERVICES</div>
          <div className="cursor-pointer">CONTACT</div>
          <div className="cursor-pointer"><a href="#more">MORE</a></div>
        </nav>

        <div className="mt-4 md:mt-0">
          {/* Attach the click handler to the Sign in button */}
          <button
            className="rounded-full px-4 py-1 text-lg md:text-xl bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-800"
            onClick={onSignInClick} // Call the prop function when clicked
          >
            Sign in
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
