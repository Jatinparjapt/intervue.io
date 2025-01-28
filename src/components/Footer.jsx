import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-[#1d1a1a]  text-white py-8">
      <div className="md:w-[90%] px-4 md:mx-auto">
        {/* Header Section */}
        <h2 className='text-3xl' >
              
              Int
             
              <span className='relative bottom-0.5 ' >e</span><span className='absolute left-78 '>_</span>
              rvu
              <span className='rotate-180 inline-block relative -bottom-1.5 ' >e</span> <span className='absolute left-93 '>_</span>
          </h2>

        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Social Links and Newsletter Section */}
          <div className="mb-6 md:mb-0">
            <div>
              <ul className="md:flex hidden  space-x-4 mb-4">
                <li className="hover:underline cursor-pointer">Facebook</li>
                <li className="hover:underline cursor-pointer">Instagram</li>
                <li className="hover:underline cursor-pointer">LinkedIn</li>
                <li className="hover:underline cursor-pointer">Pinterest</li>
              </ul>
            </div>
            <div className="mt-6 px-3">
              <h3 className="font-medium text-lg mb-2">Hire better & faster</h3>
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:flex md:gap-8">
            <div>
              <h4 className="font-medium text-lg mb-2">Company</h4>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">So gehts</li>
                <li className="hover:underline cursor-pointer">Enfahrung</li>
                <li className="hover:underline cursor-pointer">Aligner</li>
                <li className="hover:underline cursor-pointer">Preise</li>
                <li className="hover:underline cursor-pointer">Standorte</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-2">Resources</h4>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">Blog</li>
                <li className="hover:underline cursor-pointer">FAQ</li>
                <li className="hover:underline cursor-pointer">Lift Media</li>
                <li className="hover:underline cursor-pointer">Offene Stellen</li>
                <li className="hover:underline cursor-pointer">Presse kit</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-2">Product</h4>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">Gratis Termin</li>
                <li className="hover:underline cursor-pointer">Freunde einladen</li>
                <li className="hover:underline cursor-pointer">Patienteninforma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center border-t border-gray-300 pt-4">
  {/* Social Links Section */}
  <div className="flex flex-wrap justify-center sm:justify-start space-x-6 mt-4 sm:mt-0 md:hidden">
    <a
      className="flex items-center hover:underline text-gray-700"
      title="Instagram"
      href="https://www.instagram.com/jatin_prajapat_ji/"
    >
      <BsInstagram className="mx-1 text-lg" />
      Instagram
    </a>
    <a
      className="flex items-center hover:underline text-gray-700"
      title="LinkedIn"
      href="https://www.linkedin.com/in/jatin-kumar-ji/"
    >
      <IoLogoLinkedin className="mx-1 text-lg" />
      LinkedIn
    </a>
    <a
      className="flex items-center hover:underline text-gray-700"
      title="Github"
      href="https://github.com/Jatinparjapt"
    >
      <BsGithub className="mx-1 text-lg" />
      Github
    </a>
    <a
      className="flex items-center hover:underline text-gray-700"
      title="YouTube"
      href="https://www.youtube.com/@parjapticreator"
    >
      <FaYoutube className="mx-1 text-lg" />
      YouTube
    </a>
  </div>

  {/* Footer Text */}
  <p className="text-sm text-gray-600 text-center sm:text-left mt-4 sm:mt-0">
    &copy; 2023 Intervue. Crafted by great minds
  </p>

  {/* Links Section */}
  <ul className="hidden md:flex space-x-6 mt-4 sm:mt-0 text-gray-700">
    <li className="hover:underline cursor-pointer">Date</li>
    <li className="hover:underline cursor-pointer">Impressum</li>
    <li className="hover:underline cursor-pointer">Cookies Policy</li>
    <li className="hover:underline cursor-pointer">AGBs</li>
  </ul>
</div>

      </div>
    </footer>
  );
};

export default Footer;
