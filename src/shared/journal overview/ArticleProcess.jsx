import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

function ArticleProcess() {
  
  
  const linkpath = "";
  const linkname = "Article Processing";

  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />

    <section>
      <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
        <div className="max-w-full w-full text-justify">
          <h1 className="text-primary-brown text-3xl font-bold ">
          Article Processing
          </h1>
          <ul className='mt-8 list-disc list-outside pl-5 '>
            <li>All articles in the International Journal of Digital Innovation and Discoveries (IJDID) journals are of Open Access (OA).</li>
            <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
            <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
          </ul>
          <div className='my-8'><img src="images/art-process.png" className='mx-auto xl:w-3/5 w-full' alt="" />
          <p className='font-bold text-center mt-4'>Publishing Process</p></div>
        </div>
      </div >
      {/* <div className="w-screen mx-auto mt-40 h-20">
       
      </div> */}
    </section></>
  )
}

export default ArticleProcess