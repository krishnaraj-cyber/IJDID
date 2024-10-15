import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
function Payfees() {

    

    return (
      <>
 <div className="h-20 bg-primary-white shadow-lg border-"></div>
<section >
    <div class="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-10 ">
       
            <div class="max-w-full w-full ">
                <h1 class="text-primary-brown text-3xl font-bold ">Pay Fees</h1>
                <div class="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                    <div   class=" dark:bg-gray-900 lg:px-20 lg:py-10 px-5 py-5">
                       <div class="py-8 lg:py-5 px-4 mx-auto max-w-screen-md bg-white rounded-3xl border border-slate-300  shadow shadow-primary-skyblue-color">
                           <h2 class="mb-4 text-4xl  font-extrabold text-center text-primary-brown dark:text-white fnt">Pay Your Fees</h2>
                          
                           <form     class="w-full space-y-4" ngNativeValidate>
                             <div>
                               <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Amount</label>
                               <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter amount" required/>
                           </div>
                           <div>
                            <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name" required/>
                        </div>
                             <div>
                                   <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Email</label>
                                   <input type="email" name="email" id="email" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required/>
                               </div>
                               <div>
                                 <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Contact Number</label>
                                 <input type="text" name="number" id="number" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Mobile Number" required/>
                             </div>
                             <div>
                                <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Paper Id</label>
                                <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Id" required/>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Paper Title</label>
                                <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Title" required/>
                            </div>
                               
                            
                               <button type="submit" class="py-3 px-5 text-sm bg-primary-green  text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Submit</button>
                           </form>
                           
                       </div>
                     </div>
             
                   </div>
                 
                
            </div>
            
            

       
       

    </div>
 
</section>

 


</>
  )
}

export default Payfees