import React from 'react'
import { Link } from 'react-router-dom'

const SubNav = ( {ToggleMenu ,scrollToTop }) => {
  return (
    <>
    <ul className="lg:bg-primary-white/85 p-2 *:*:p-2 *:*:px-4 *:*:border-b  *:*:rounded-lg rounded-b-xl hover:*:*:text-white hover:*:*:bg-primary-brown *:*:duration-300  overflow-y-scroll lg:overflow-auto">
              
                <Link onClick={scrollToTop}  to="/aboutus"><li onClick={()=>{ToggleMenu(false)}}>About</li></Link>
                <Link onClick={scrollToTop}  to="/editorial-board"><li onClick={()=>{ToggleMenu(false)}}>Editorial Board</li></Link>
                <Link onClick={scrollToTop}  to="/peer-review"><li onClick={()=>{ToggleMenu(false)}}>Peer Review Process</li></Link>
                <Link onClick={scrollToTop}  to="/pub-ethics"><li onClick={()=>{ToggleMenu(false)}}>Publication Ethics</li></Link>
                <Link onClick={scrollToTop}  to="/abstracting&index"><li onClick={()=>{ToggleMenu(false)}}>Abstracting and Indexing</li></Link>
                <Link onClick={scrollToTop}  to="/articleindex"> <li className='border-b-0 lg:border-b'  onClick={()=>{ToggleMenu(false)}}>Article Processing </li></Link>
            </ul>
    </>
  )
}

export default SubNav