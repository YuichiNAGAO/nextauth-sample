import React from "react";

const Header = () => {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        <div className="flex items-center">
          <a href="/" className="text-lg font-bold">
            Create Next App
          </a>
        </div>
        <div className="flex items-center">
          <a href="">GitHub</a>
          <a href="">Documentation</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
