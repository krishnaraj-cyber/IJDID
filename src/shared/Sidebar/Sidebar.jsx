import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({linkpath,linkname}) {
  return (
    <>
    <article
        style={{
          backgroundImage: `
          linear-gradient(to bottom ,rgba(0,0,0,.5) ,rgba(0,0,0,0.5)),
           url(images/hero.jpg)`,
        }}
        className="h-[300px] bg-no-repeat bg-cover  "
      >
        <div className="h-full max-w-screen-3xl w-full mx-auto text-center">
          <h1 className="text-white text-center font-bold text-2xl md:text-3xl 2xl:text-4xl pt-28 lg:pt-32 lg:leading-tight tracking-wide">
          International Journal of Digital Innovation and Discoveries
          </h1>
          <div className='text-white mt-10 text-left ml-7 md:ml-16 lg:ml-28 xl:ml-48 2xl:ml-[420px]'><Link to="/">Home</Link>{" > "}<Link to={linkpath}>{linkname}</Link></div>
          {/* <a href="https://ijacser.com/ijacser/index.php/ijacser/about/submissions"><button className="font-semibold inline-flex justify-center items-center gap-2 bg-primary-white text-primary-brown hover:bg-primary-green hover:text-primary-white border-2 rounded-md px-5 py-1.5 mt-6 md:mt-10 lg:mt-14">
            New Submission <img className='h-7 ' src="images/Animation.gif" alt="" />
          </button></a> */}
        </div>
      </article></>
  )
}

export default Sidebar