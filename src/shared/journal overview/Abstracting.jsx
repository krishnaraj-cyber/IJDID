import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

function Abstracting() {
  
  
  const linkpath = "";
  const linkname = "Abstracting and Indexing";

  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />

    <section>
      <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
        <div className="max-w-full w-full ">
          <h1 className="text-primary-brown text-3xl font-bold ">
            Abstracting and Indexing
          </h1>
          <p className="mt-8 ">Selected  IJARITMS will be indexed in all major indexing services, including </p>
          <ul class="list-disc pl-5 my-5 space-y-1 ">
            <li>Web of Science</li>
            <li>Scopus</li>
            <li>EBSCO</li>
            <li>ProQuest</li>
            <li>CNKI</li>
            <li>DBLP</li>
            <li>Google Scholar</li>
            <li>Microsoft Academic Search</li>
            <li>OCLC Discovery Services</li>
            <li>DOAJ</li>
            <li>Elektronische Zeitschriftenbibliothek</li>
            <li>CrossRef</li>
          </ul>

        </div>
      </div >
      {/* <div className="w-screen mx-auto mt-40 h-20">
       
      </div> */}
    </section></>
  )
}

export default Abstracting