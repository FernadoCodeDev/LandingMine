import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center text-white bg-blue-950">
      <h3>
        Puedes encontrar este y más trabajos mios en 
        <a href="https://fercode.netlify.app/">
          <span className="ml-1 font-bold text-white transition duration-500 ease-in-out hover:text-orange-300">
             mí página personal
          </span>
        </a>
      </h3>
    </footer>
  );
};
export default Footer;