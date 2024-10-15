import { Link } from "react-router-dom";
import "./Contactus.css";
import Sidebar from "../Sidebar/Sidebar";

function Contactus() {
  return (
    <>
      <div className="h-14"></div>

      <section>
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-10">
         
            <div className="max-w-full w-full ">
              {/* <h1 className="text-primary-brown text-3xl font-bold ">
                Contact Us
              </h1>
              <div className="mt-5 flex items-center gap-2">
                <h1 className="font-semibold">Mobile:</h1>
                <h1>+91 0000 000 000</h1>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <h1 className="font-semibold">Email:</h1>
                <h1>eic.ijacser@gmail.com</h1>
              </div> */}
              
              <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                <div className=" lg:px-20 lg:py-10 px-5 py-5">
                  <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md bg-white rounded-3xl border border-slate-300  shadow shadow-primary-skyblue-color">
                    <h2 className="mb-4 text-4xl  font-extrabold text-center text-primary-brown">
                      Contact Us
                    </h2>

                    <form className="w-full space-y-4" ngNativeValidate>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 "
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          placeholder="example@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900"
                        >
                          Contact Number
                        </label>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          placeholder="Enter Your Mobile Number"
                          required
                        />
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label
                          for="message"
                          className="block mb-2 text-sm   text-gray-900   "
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          ngModel
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Leave a Message..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="py-3 px-5 text-sm bg-primary-green  text-center text-white rounded-lg bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                  <h3 className="mt-10 text-center text-sm md:text-lg">
                    {" "}
                    For any queries contact Email :{' '}
                    <a
                      href="mailto:"
                      className="text-blue-700 "
                    >
                      editor@ijdid.com
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          

        
        </div>
      </section>
    </>
  );
}

export default Contactus;
