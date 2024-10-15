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
          <p className="mt-8 ">Selected  IJARITMS will be indexed in all major indexing services, including Web of Science, Scopus, EBSCO, ProQuest, CNKI, DBLP, Google Scholar, Microsoft Academic Search, OCLC Discovery Services, DOAJ, Elektronische Zeitschriftenbibliothek, CrossRef, and others soon.</p>

        </div>
      </div >
      {/* <div className="w-screen mx-auto mt-40 h-20">
       
      </div> */}
    </section></>
  )
}

export default Abstracting