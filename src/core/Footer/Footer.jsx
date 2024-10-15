import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropupCircle } from "react-icons/io"; 
        

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-brown text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-6 md:mb-0">
            <Link to="" onClick={scrollToTop}  className=" items-center mb-5 gap-2 inline-block"> 
              <img className="drop-shadow h-12 " src="/vite.svg" alt=""/>
            </Link>
            <div className="flex items-center gap-4 mb-2 font-medium list-disc">
              <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <rect x="3" y="5" width="18" height="14" rx="2" />  
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <a href='mailto:' className='hover:underline'>editor@ijdid.com</a>
            </div>
            <div className="flex items-center gap-4 font-medium list-disc">
              <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <circle cx="12" cy="12" r="9" />  
                <line x1="3.6" y1="9" x2="20.4" y2="9" />  
                <line x1="3.6" y1="15" x2="20.4" y2="15" />  
                <path d="M11.5 3a17 17 0 0 0 0 18" />  
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              <a href='ijacser.com' className='hover:underline'  onClick={scrollToTop}  ><h1>www.ijdid.com</h1></a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
            <div className=''>
              <h2 className="mb-3 font-semibold text-lg uppercase underline">Resources</h2>
              <ul className="font-medium">
                <li className="">
                  <Link to="/" onClick={scrollToTop}  className="hover:underline">Home</Link>
                </li>
                <li className="">
                  <Link to="/aboutus" onClick={scrollToTop}  className="hover:underline">About Us</Link>
                </li>
                <li className="">
                  <Link to="/contactus" onClick={scrollToTop}  className="hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div >
              <h2 className="mb-3 font-semibold text-lg uppercase underline">Journal Overview</h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li><Link to="/editorial-board" onClick={scrollToTop}  className="hover:underline mb-2">Editorial Board</Link></li>
                <li><Link to="/peer-review" onClick={scrollToTop}  className="hover:underline mb-2">Peer Review Process</Link></li>
                <li><Link to="/pub-ethics" onClick={scrollToTop}  className="hover:underline mb-2">Publication Ethics</Link></li>
                <li><Link to="/abstracting&index" onClick={scrollToTop}  className="hover:underline mb-2">Abstracting and Indexing</Link></li>
                <li><Link to="/articleindex" onClick={scrollToTop}  className="hover:underline mb-2">Article Processing Charges</Link></li>
                {/* <li><Link to="#" onClick={scrollToTop}  className="hover:underline mb-2">Journal Reports</Link></li> */}
              </ul>
            </div>
            {/* <div >
              <h2 className="mb-6 font-semibold  uppercase ">Special Issues</h2>
              <ul className=" font-medium">
                <li><Link to="#" className="hover:underline mb-2">Published Special Issues</Link></li>
                <li><Link to="#" className="hover:underline mb-2">Propose Special Issue</Link></li>
                <li><Link to="#" className="hover:underline mb-2">About Special Issues</Link></li>
              </ul>
            </div> */}
          </div>
          </div>
          <div className='relative'>
          <IoIosArrowDropupCircle onClick={scrollToTop} className='text-4xl cursor-pointer absolute right-0 bottom-28 md:-bottom-20 xl:-bottom-24 lg:mt-32 brightness-75 hover:brightness-150 duration-200 ease-out'/>

          </div>
        
        <hr className="my-3 md:my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className=" text-center">
          <span className="text-sm  sm:text-center">© 2024 <Link to="" className="hover:underline">IJDID™</Link>. All Rights Reserved.
          </span>
         
      </div>
    </div>
    <div className='relative'><a href=""><img src="logo/ojs_brand.png" alt="" className='drop-shadow-[] h-16 absolute right-5 md:right-24 bottom-20 md:bottom-2 2xl:right-[400px]'/></a></div>
</footer>

    
  );
}
