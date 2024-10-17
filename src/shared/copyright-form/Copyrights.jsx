import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Copyrights() {

  const linkpath = "";
  const linkname = "Copyrights";

  return (
    <>
   <Sidebar linkname={linkname} linkpath={linkpath} />

      <section>
        <div className="max-w-screen-md 2xl:max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="max-w-full w-full ">
            <h1 className="text-primary-brown text-3xl font-bold ">
              Copyrights Form
            </h1>
            <h1 className="lg:text-xl font-semibold mb-2 mt-8 text-primary-orange underline underline-offset-4">
              Declaration
            </h1>
            <p className="md:w-[450px] leading-relaxed" > I/We 
            ____________________________.  The author / authors of the research paper/article
            entitled ______________________
             authorize you to publish the above mentioned paper/article in IJDID.</p>
            {/* <h1 className=" text-justify mb-1">
              I/We
              _____________________________________________________________________.
            </h1>
            <h1 className=" text-justify mb-1">
              the author/authors of the research paper/article
              entitled____________________
            </h1>
            <h1 className=" text-justify mb-1">
              ______________________________________________________________
              authorize you
            </h1>
            <h1 className=" text-justify mb-1">
              to publish the above mentioned paper/article in IJACSER.
            </h1> */}
            <h1 className=" lg:text-xl font-semibold mt-8 mb-2 text-primary-orange  underline underline-offset-4">
              It is here in agreed that:
            </h1>
            <h1 className=" text-justify mb-2">
              1. I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.
            </h1>
            <h1 className=" text-justify mb-2"></h1>
            <h1 className=" text-justify mb-2">
              2. I/We declare and warrant that the contribution is original, except for excerpts from copyrighted works that may be included with the permission of the copyright holder and author thereof. The contribution contains no libelous statements and does not infringe on any copyright, trademark, patent, statutory right, or proprietary rights of others. The author signs for and accepts responsibility for releasing this material on behalf of any and all co-authors.
            </h1>
            <h1 className=" text-justify mb-2">
              3. The Author also warrants that he or she has the right to enter into this Agreement; that the Article contains no libelous or unlawful statements, no instructions that may cause harm or injury, and does not violate copyright or trademark laws or infringe on the rights or privacy of others; and that all statements in the Article asserted as facts are either true or based on reasonable research.
            </h1>
            <h1 className=" text-justify mb-2">
              4. I/We agree to indemnify the Editors of IJDID against all claims and expenses arising from any breach of warranty on my/our part in this agreement.
            </h1>

            <div className="flex justify-between items-center mt-5">
              <div>
                <h1>Date:</h1>
                <h1>Mobile:</h1>
              </div>
              <div className="text-center">
                <h1>1st Author Signature 2nd Author Signature</h1>
                <h1>Author Name: Author Name:</h1>
                <h1>Address Address</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Copyrights;
