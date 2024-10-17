import React from 'react'
import { Link } from 'react-router-dom'

const MiniSidebar = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <>
    <div className='fixed top-1/2 right-0 -translate-y-1/2 hidden lg:block z-40'>
        <ul className=" text-center hover:*:*:-translate-x-2 *:*:duration-300 *:*:border *:*:border-primary-brown">
            <Link onClick={scrollToTop} to="/"><li className="p-2 bg-white text-primary-brown">Home</li></Link>
            <Link onClick={scrollToTop} to="/aim-nd-scope"><li className="p-2 odd:bg-primary-brown text-white">Aim & Scope</li></Link>
            <Link onClick={scrollToTop} to="/aboutus"><li className="p-2 bg-white text-primary-brown">About us</li></Link>
            <Link onClick={scrollToTop} to="/editorial-board"><li className="p-2 odd:bg-primary-brown  text-white">Editorial Board</li></Link>
            <Link onClick={scrollToTop} to="/issues"><li className="p-2 bg-white text-primary-brown">Issues</li></Link>
            <Link onClick={scrollToTop} to="/author-guidelines"><li className="p-2 odd:bg-primary-brown  text-white">Author Guidelines</li></Link>
            <Link onClick={scrollToTop} to="/copyrights-form"><li className="p-2 bg-white text-primary-brown">Copyrights Form</li></Link>
            <Link onClick={scrollToTop} to="/contactus"><li className="p-2 odd:bg-primary-brown  text-white">Contact us</li></Link>
        </ul>
    </div>
    </>
  )
}

export default MiniSidebar