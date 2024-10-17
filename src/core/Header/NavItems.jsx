import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import SubNav from "./SubNav";

const NavItems = ({ ToggleMenu }) => {
  const menuRef2 = useRef(null); 
  const [dropDown1, setdropDown1] = useState(false);
  const [dropDown2, setdropDown2] = useState(false);
  const toggleDrop1 = () => {
    setdropDown1(!dropDown1);
  };
  const toggleDrop2 = () => {
    setdropDown2(!dropDown2);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef2.current && !menuRef2.current.contains(event.target)) {
        setdropDown1(false);
        setdropDown2(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef2]);
  return (
    <>
      <nav ref={menuRef2} className="flex overflow-y-scroll lg:overflow-auto">
        <ul className="lg:flex items-center gap-2 text-center  py-2 px-10 w-full *:*:duration-300">
          <Link onClick={scrollToTop}  to="/" className="">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              //  className="w-full relative after:content-[''] lg:after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-1 after:bg-primary-orange hover:after:w-full after:duration-300"
            className=" hover:bg-primary-brown hover:text-white      border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
              Home
            </li>
          </Link>

          <Link onClick={scrollToTop}  to="/aboutus" className="block lg:hidden">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
              About us
            </li>
          </Link>

          <Link onClick={scrollToTop}  to="/aim-nd-scope" className="block lg:hidden">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
              Aim & Scope
            </li>
          </Link>

          <Link onClick={scrollToTop}  to="/editorial-board" className="block lg:hidden">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
              Editorial Board
            </li>
          </Link>

          <Link onClick={scrollToTop}  to="/issues" className="block lg:hidden">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
              Issues
            </li>
          </Link>

          <Link onClick={scrollToTop}  to="/author-guidelines" className="block lg:hidden">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
             Author Guidelines
            </li>
          </Link>

          <Link onClick={scrollToTop}  to="/copyrights-form" className="block lg:hidden">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
            >
              Copyrights
            </li>
          </Link>

          {/* <li className="cursor-context-menu">
            <div
              onClick={() => {
                toggleDrop1();
                setdropDown2(false);
              }}
              className=""
            >
              <Link>
                <div className="inline-flex gap-2 items-center">
                  Modules <FaAngleDown  className={`${dropDown1?'rotate-180' : 'rotate-0'} duration-300`}/>
                </div>
              </Link>

              <div
                className={`${
                  // dropDown1 ? "block" : "hidden"
                  dropDown1 ? "max-h-48" : "max-h-0"
                } overflow-hidden lg:absolute lg:top-20 duration-300`}
              >
                <SubNav
                  toggleDrop1={toggleDrop1}
                  toggleDrop2={toggleDrop2}
                  ToggleMenu={ToggleMenu}
                  service1="mod 1"
                  service2="mod 2"
                  service3="mod 3"
                  service4="mod 4"
                />
              </div>
            </div>
          </li> */}

          <li className="cursor-context-menu">
            <div
              onClick={() => {
                toggleDrop2();
                setdropDown1(false);
              }}
              className=""
            >
              <Link>
                <div className="inline-flex gap-2 items-center w-full justify-center hover:bg-primary-brown hover:text-white  border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300">
                  Services <FaAngleDown className={`${dropDown2?'rotate-180' : 'rotate-0'} duration-300`}/>
                </div>
              </Link>

              <div
                className={`${
                  // dropDown2 ? "block" : "hidden"
                  dropDown2 ? "max-h-80 " : "max-h-0 "
                } lg:absolute lg:top-20 overflow-hidden duration-300 ease-in-out`}
              >
                <SubNav
                  toggleDrop1={toggleDrop1}
                  toggleDrop2={toggleDrop2}
                  ToggleMenu={ToggleMenu}
                 scrollToTop={scrollToTop}
                />
              </div>
            </div>
          </li>
          <Link onClick={scrollToTop}  to="/contactus">
            <li
              onClick={() => {
                ToggleMenu(false);
                setdropDown1(false);
                setdropDown2(false);
              }}
              className=" hover:bg-primary-brown hover:text-white border-b lg:border-none p-2 px-5 lg:my-3 rounded-lg duration-300"
              // className="w-full relative after:content-[''] lg:after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-1 after:bg-primary-orange hover:after:w-full after:duration-300"
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className="lg:flex items-center hidden">
        <a href="https://ijdid.com/ijdid/index.php/ijdid/about/submissions" rel="noopener noreferrer"><button className={ `h-fit whitespace-nowrap  hover:rounded-ss-3xl hover:rounded-ee-3xl border-2  hover:bg-primary-brown text-primary-brown hover:text-white border-primary-orange hover:border-primary-brown   p-2 px-5 font-medium duration-500`} >Submit New Article</button></a>
        </div>
      </nav>
    </>
  );
};

export default NavItems;
