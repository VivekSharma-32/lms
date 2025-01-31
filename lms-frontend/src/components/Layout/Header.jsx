import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="container px-10 py-5 bg-blue-950">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extrabold font-[Outfit]">Logo</h3>
          <div>
            <ul className="flex gap-10 font-[Outfit] font-normal hover:bg-gradient-to-b items-center">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <button className="bg-white text-black px-5 py-2 font-medium rounded-md cursor-pointer">
                Create Account
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
