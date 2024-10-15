import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";


function EditorialBoard() {

  const linkpath = "";
  const linkname = "Editorial Board";

  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />

      <section>
        <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="max-w-full w-full ">
            <h1 className="text-primary-brown text-xl font-bold ">
              Updates will come soon...
            </h1>
          </div>
        </div >
        {/* <div className="w-screen mx-auto mt-40 h-20">
         
        </div> */}
      </section>
     
    </>
  );
}

export default EditorialBoard;
