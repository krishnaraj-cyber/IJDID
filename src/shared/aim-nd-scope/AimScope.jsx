import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Sidebar from "../Sidebar/Sidebar";

function AimScope() {

  const linkpath = "";
  const linkname = "Aim & Scope";
  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />

      <section>
        <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
         
            <div className="max-w-full w-full ">
              <h1 className="text-primary-brown text-3xl font-bold">
                Aim And Scope
              </h1>
              <h1 className="font-semibold text-primary-orange lg:text-xl mb-2 mt-8 underline underline-offset-4">Aim</h1>
              <h1 className="  mb-3  text-justify leading-relaxed">
              International Journal of Digital Innovation and Discoveries (IJDID) is an open-access online journal dedicated to fostering innovation across all fields of Engineering and Technology. Our mission is to serve as a premier platform for showcasing groundbreaking ideas and advancements. By bringing together diverse technological innovations, IJDID aims to facilitate interdisciplinary integration and collaboration, empowering researchers and practitioners to implement and advance their ideas effectively.
              </h1>
              <h1 className="font-semibold text-primary-orange lg:text-xl mt-8 mb-2 underline underline-offset-4">Scope</h1>
              <h1 className="  text-justify leading-relaxed">
              The scope of IJDID is to offer a scholarly platform and a key reference for the advancement and dissemination of research in Engineering, Science, and Technology. We aim to support high-level learning, teaching, and research by publishing original theoretical work and application-based studies. Our focus is on contributions that enhance the understanding of complex challenges in these fields and drive innovation and progress.
              </h1>
            </div>
           

          {/* <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1> */}
        </div>
      </section>
    </>
  );
}

export default AimScope;
