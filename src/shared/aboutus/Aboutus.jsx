import React from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Aboutus() { 

  const linkpath = "";
  const linkname = "About us";

  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />
      <section>
        <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="max-w-full w-full ">
            
            <h1 className="text-primary-brown text-3xl font-bold ">
              About Us
            </h1>
            <img className="float-right ml-10 my-12 hover:brightness-95 duration-200 w-full lg:w-2/5" src="images/about.jpg" alt="" />
            <h1 className="  my-2 text-justify leading-relaxed  ">
            International Journal of Digital Innovation and Discoveries (IJDID) is a premier,
            peer-reviewed journal dedicated to advancing the understanding and application of Digital Innovation and Discoveries
             in the digital era. We strive to provide a platform for groundbreaking research that 
            addresses contemporary challenges and promotes innovation across these fields.
            </h1>
            <h1 className="font-semibold text-primary-orange lg:text-xl mt-8 mb-2 underline underline-offset-4">
              Scope
            </h1>
            <h1 className="  text-justify leading-relaxed mb-3">
            International Journal of Digital Innovation and Discoveries (IJDID) aims to
            serve as a key academic platform for the advancement and dissemination of high-quality research in
            the fields of Digital Innovation and Discoveries. Our journal supports high-level learning,
            teaching, and research by publishing original theoretical work and application-driven studies.
            We encourage submissions that contribute to a deeper understanding of the challenges and innovations
            within these disciplines, fostering advancements that drive progress in science and technology.
            </h1>
            <h1 className=" lg:text-xl text-primary-orange font-semibold mt-8 mb-2 underline underline-offset-4">
              Mission
            </h1>
            <h1 className="  text-justify leading-relaxed mb-3">
            Our mission is to provide a dynamic platform for researchers, academicians, professionals, and 
            students to publish innovative research in the fields of Digital Innovation and Discoveries. By 
            fostering rigorous inquiry and encouraging scholarly dialogue, we aim to significantly contribute 
            to the body of knowledge that informs both theory and practice in these vital disciplines.
            </h1>

            {/* <h1 className=" lg:text-xl text-primary-orange font-semibold mt-8 mb-2 underline underline-offset-4">
              Scope
            </h1>
            <ul className="list-disc list-inside mb-3">
              <li>Computer Science & Engineering</li>
              <li>Data analytics and business intelligence</li>
              <li>E-commerce and digital marketing</li>
              <li>IT governance and cybersecurity</li>
              <li>Decision sciences and operations research</li>
              <li>Knowledge management and organizational behavior</li>
            </ul> */}
            <h1 className="font-semibold text-primary-orange lg:text-xl mt-8 mb-2 underline underline-offset-4">
              Publication Ethics
            </h1>
            <h1 className="  text-justify leading-relaxed mb-3">
            We are committed to upholding the highest ethical standards in publishing, emphasizing transparency, integrity, 
            and fairness throughout our peer-review process. Authors can expect a rigorous yet constructive review process 
            that maintains confidentiality and ensures academic integrity.
            </h1>

            <h1 className="font-semibold text-primary-orange lg:text-xl mt-8 mb-2 underline underline-offset-4">
              Audience
            </h1>
            <h1 className="  text-justify leading-relaxed mb-3">
            International Journal of Digital Innovation and Discoveries (IJDID) serves 
            a diverse audience of researchers, educators, practitioners, and policymakers who are engaged in 
            the latest advancements in Digital Innovation and Discoveries. We particularly encourage interdisciplinary 
            research that connects theory with practical applications, fostering innovation and progress in these 
            fields.


            </h1>
            <h1 className="font-semibold text-primary-orange lg:text-xl mt-8 mb-2 underline underline-offset-4">
              Submission Guidelines
            </h1>
            <h1 className="  text-justify leading-relaxed ">
            Authors are invited to submit original, unpublished manuscripts that are not under review elsewhere. 
            For a smooth and consistent submission process, detailed guidelines are available on our website.


            </h1>
      <div className="my-12"></div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
