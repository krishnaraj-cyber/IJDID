import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Aos from "aos";
import MiniSidebar from "../Sidebar/MiniSidebar";
import Sidebar from "../Sidebar/Sidebar";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  
  return (
    <>
    
      {/* <article
        style={{
          backgroundImage: `
          linear-gradient(to bottom ,rgba(0,0,0,.5) ,rgba(0,0,0,0.5)),
           url(images/Untitled-1.jpg)`,
        }}
        className="h-[700px] bg-no-repeat bg-fixed bg-cover bg-center ease-in-out duration-[4s]"
      >
        <div className="h-full max-w-screen-2xl w-full mx-auto text-center">
          <h1 className="text-primary-white text-center font-bold md:text-5xl lg:text-6xl pt-36 lg:pt-60 text-4xl lg:leading-relaxed leading-normal md:leading-[55px] ">
            International Journal of Advances in
            <br />
            Computer Science & Engineering Research
          </h1>
          <a href="https://ijacser.com/ijacser/index.php/ijacser/about/submissions"><button className="font-semibold bg-primary-white inline-flex gap-2 items-center justify-center text-primary-brown hover:bg-primary-green hover:text-primary-white border-2 rounded-md px-5 py-1.5 mt-32 lg:mt-20">
            New Submission <img className='h-7 ' src="images/Animation.gif" alt="" />
          </button></a>
          <div className="gap-4 lg:gap-60 md:gap-24 flex text-primary-white justify-center items-center mt-28 lg:mt-20">
            <div>
              <p className="font-semibold text-xl">1674</p>
              <p className="text-sm">Article Records</p>
            </div>
            <div className="bg-slate-100 h-10 w-[1px]"></div>
            <div>
              <p className="font-semibold text-xl">2746</p>
              <p className="text-sm">Article Views</p>
            </div>
            <div className="bg-slate-100 h-10 w-[1px]"></div>
            <div>
              <p className="font-semibold text-xl">547</p>
              <p className="text-sm">Article Downloads</p>
            </div>
          </div>
        </div>
      </article> */}
      <Sidebar/>
      <section>
        <div className="w-full bg-[#e2dfe086]">
          <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto pb-7 pt-10 px-5 2xl:px-0">
            <h1 className="text-primary-brown text-2xl font-bold ">
              Welcome to IJDID,
            </h1>
            <h1 className="text-justify pt-5 pb-8">
              <strong className="text-primary-orange ">International Journal of Digital Innovation and Discoveries (IJDID)</strong>{" "}
              is a distinguished, open-access, peer-reviewed journal dedicated to the forefront of research in Digital Innovation and Discoveries. Published quarterly, IJDID provides a platform for the latest theories, methods, and applications in these dynamic fields. Our mission is to advance scientific knowledge and innovation by promoting high-quality research that addresses contemporary challenges and opportunities in Digital Innovation and Discoveries.
            </h1>

            <h1 className="bg-slate-300 h-[1px] w-full"></h1>
          </div>
        </div>
        <article>
          <div className="w-full">
            <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto md:gap-10 flex md:items-center lg:items-stretch py-8 md:py-20 px-5 lg:px-0">
              <div className="md:w-1/2 w-full ">
                <h1 className="text-primary-orange text-2xl font-bold block">
                  About us
                </h1>
                <h1 className="text-4xl font-semibold py-5 md:py-10 leading-snug">
                  Inclusive, affordable and accessible
                </h1>
                <p className="text-justify">
                The International Journal of Digital Innovation and Discoveries (IJDID) is a prestigious, peer-reviewed journal committed to advancing the field of Digital Innovation and Discoveries. Our focus is on promoting a deeper understanding and innovative application of research within these disciplines. We aim to provide a platform for high-quality scholarly work that contributes to the advancement of Digital Innovation and Discoveries knowledge.
                </p>
                 <button onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}  className="hover:bg-primary-brown hover:text-white text-primary-brown bg-primary-green  border-2 border-primary-orange hover:border-primary-brown hover:rounded-ss-3xl hover:rounded-ee-3xl px-6 py-1.5 mt-8 lg:mt-10 duration-300">
                 <Link to="/aboutus" onClick={scrollToTop} className=" flex items-center gap-3"> Learn More <HiOutlineArrowCircleRight className={` ${ isMenuOpen ?" left-5":"rotate-0  -left-2"} duration-300 relative text-2xl`} />
                 </Link></button>
              </div>
              <div className="md:w-1/2 min-h-full overflow-hidden w-0">
                <img className="float-right lg:min-h-full hidden md:block hover:brightness-95 object-cover duration-200 " src="images/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className="w-full bg-primary-white/40">
            <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
              <h1 className="text-primary-brown text-2xl font-bold underline py-10">
                The Journal covers following areas Digital Innovation and Discoveries
              </h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 pb-10">
                
                 

<div className="p-2">
  <ul className="list-none space-y-2">
    {[
      "Artificial General Intelligence (AGI)",
      "Augmented Reality (AR) for Retail and E-commerce",
      "5G and Future Communication Networks",
      "Digital Twin Technology in Smart Cities",
      "AI-Powered Healthcare Diagnostics",
      "IoT (Internet of Things) for Smart Homes and Devices",
      "AI in Drug Discovery and Genomics",
      "Blockchain for Supply Chain Management",
      "Decentralized Finance (DeFi) and Smart Contracts",
      "Digital Payments and Cryptocurrencies",
      "Metaverse and Virtual Economies",
      "Robotic Process Automation (RPA)",
      "Hyperautomation and the Future of Work",
      "Self-Driving Cars and Autonomous Vehicles",
      "AI-Driven Customer Experience Platforms",
      "Digital Assistants and Voice Interfaces",
      "Brain-Computer Interface (BCI) Technology",
      "Quantum Cryptography for Secure Communication",
      "AI-Based Fraud Detection Systems",
      "Personalized Learning through EdTech Platforms",
      "FinTech and Digital Banking Innovations",
      "AI-Enhanced Cybersecurity Solutions",
      "IoT-Based Predictive Maintenance in Industries",
      "Precision Agriculture with IoT and Drones",      
      "NFTs (Non-Fungible Tokens) in Digital Art and Media",
     
    ].map((topic, index) => (
      <li
        key={index}
        className="flex items-center space-x-3 text-gray-800"
      >
        <span className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">
          {/* ✔️ */}
          <img src="images/icon-orange.png" alt="" />
        </span>
        <span>{topic}</span>
      </li>
    ))}
  </ul>
</div>
<div className="p-2">
  <ul className="list-none space-y-2">
    {[
      "AI-Powered Content Creation Tools",
      "Autonomous Drones for Delivery Systems",
      "AI-Powered Virtual Mental Health Therapists",
      "Blockchain-Based Digital Identity Management",
      "Sustainable Computing and Green Technologies",
      "3D Printing for Medical Applications",
      "Wearable Devices for Health Monitoring",
      "AI in Predictive Analytics for Business",
      "AR/VR for Remote Education and Training",
      "Swarm Robotics and Cooperative AI Systems",
      "AI-Driven LegalTech Solutions",
      "Biometric Authentication for Secure Transactions",
      "Human Augmentation Technologies",
      "Crowdsourced Innovation Platforms",
      "Virtual Tourism and Digital Cultural Heritage",
      "Quantum Computing for Optimization Problems",
      "Blockchain-Based Voting Systems",
      "Social Media Analytics for Brand Intelligence",
      "AI-Enabled Energy Management Systems",
      "Cloud Robotics in Collaborative Automation",
      "AI-Powered Disaster Response Systems",
      "Edge AI for Real-Time Decision Making",
      "Digital Marketplaces for Sustainable Products",
      "AI-Powered Creativity and Digital Arts",
      "Haptic Feedback Devices for Enhanced VR Experiences",
    ].map((topic, index) => (
      <li
        key={index}
        className="flex items-start space-x-3 text-gray-800"
      >
        <span className="w-6 h-6  rounded-full flex items-center justify-center text-white font-bold">
          {/* ✔️ */}
          <img src="images/icon-orange.png" alt="" />
        </span>
        <span>{topic}</span>
      </li>
    ))}
  </ul>
</div>


                
              </div>
            </div>
          </div>
         
        </article>
      </section>

     
    </>
  );
}

export default Home;
