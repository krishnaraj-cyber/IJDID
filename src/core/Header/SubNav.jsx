import React from 'react'
import { Link } from 'react-router-dom'

const SubNav = ( {ToggleMenu}) => {
  return (
    <>
    <ul className="lg:bg-primary-white/85 p-2 *:*:p-2 *:*:px-4 *:*:border-b  *:*:rounded-lg rounded-b-xl hover:*:*:text-white hover:*:*:bg-primary-brown *:*:duration-300  overflow-y-scroll lg:overflow-auto">
              
                <Link to="/aboutus"><li onClick={()=>{ToggleMenu(false)}}>About</li></Link>
                <Link to="/editorial-board"><li onClick={()=>{ToggleMenu(false)}}>Editorial Board</li></Link>
                <Link to="/peer-review"><li onClick={()=>{ToggleMenu(false)}}>Peer Review Process</li></Link>
                <Link to="/pub-ethics"><li onClick={()=>{ToggleMenu(false)}}>Publication Ethics</li></Link>
                <Link to="/abstracting&index"><li onClick={()=>{ToggleMenu(false)}}>Abstracting and Indexing</li></Link>
                <Link to="/articleindex"> <li className='border-b-0 lg:border-b'  onClick={()=>{ToggleMenu(false)}}>Article Processing Charges </li></Link>
            </ul>
    </>
  )
}

export default SubNav