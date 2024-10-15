import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import websitelogo from "/vite.svg";
import NavItems from "./NavItems";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  const menuRef = useRef(null); 
  const [MenuOpen, setMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <header className="fixed top-0 w-full bg-primary-white/100 z-10 shadow-lg">
        <div className="max-w-screen-xl mx-auto w-full ">
          <div className="w-full flex items-center justify-between px-10 lg:px-0 py-5 lg:py-0">
            <Link>
              <img src={websitelogo} alt="Website Logo" className="px-7"/>
            </Link>
            <div ref={menuRef}>
              {MenuOpen && (
                <IoMdCloseCircle
                  onClick={() => {
                    ToggleMenu(false);
                  }}
                  className="lg:hidden text-3xl cursor-pointer hover:rotate-90 duration-300 m-1.5"
                />
              )}
              {!MenuOpen && (
                <MdOutlineMenuOpen
                  onClick={ToggleMenu}
                  className="lg:hidden text-3xl cursor-pointer duration-300 m-1.5"
                />
              )}
              <div
                className={` ${
                  // MenuOpen ? " block" : "hidden "
                  MenuOpen ? "max-h-screen" : "max-h-0"
                } overflow-hidden duration-500 lg:max-h-none absolute lg:flex lg:static bg-primary-white/85 rounded-b-xl lg:bg-transparent left-0 top-[125px] lg:w-auto w-full `}
              >
                <NavItems ToggleMenu={ToggleMenu}/>
              </div>
            </div>
          </div>
          <div className="lg:hidden block absolute w-full">
        <button className={ ` whitespace-nowrap w-full  hover:rounded-ss-3xl hover:rounded-ee-3xl bg-primary-brown text-white border    p-2.5 px-5 font-medium duration-500`} >Submit New Article</button>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
