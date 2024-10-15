import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Issues() {
  const linkpath = "";
  const linkname = "Issues";

  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />
      <section>
        <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5 mt-0 ">
          <div className="">
            <div className="max-w-full w-full ">
              <h1 className="text-primary-brown text-3xl font-bold ">
                Issues
              </h1>
              <div className="grid  grid-flow-row grid-cols-2 mt-5 gap-8 lg:grid-cols-3">
                <div className=" min-h-52 ">
                  <h1 className="bg-primary-green text-white p-2 pl-5 mb-2">
                    2024
                  </h1>
                  <ul className="list-disc pl-5">
                    <li>
                      <a href="#" className="text-primary-blue-color underline">
                        Volume 1 Issue 1
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className=" min-h-52">
                  <h1 className="bg-primary-green text-white p-2 pl-5 mb-2">
                    2025
                  </h1>
                  <ul className="list-disc pl-5">
                    <li>
                      <a href="#" className="text-primary-blue-color underline">
                        Volume 2 Issue 1
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" min-h-52">
                  <h1 className="bg-primary-green text-white p-2 pl-5 mb-2">
                    2026
                  </h1>
                  <ul className="list-disc pl-5">
                    <li>
                      <a href="#" className="text-primary-blue-color underline">
                        Volume 3 Issue 1
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" min-h-52">
                  <h1 className="bg-primary-green text-white p-2 pl-5 mb-2">
                    2027
                  </h1>
                  <ul className="list-disc pl-5">
                    <li>
                      <a href="#" className="text-primary-blue-color underline">
                        Volume 4 Issue 1
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>

          {/* <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1> */}
        </div>
      </section>
    </>
  );
}

export default Issues;
