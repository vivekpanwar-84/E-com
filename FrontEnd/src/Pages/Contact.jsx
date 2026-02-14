import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className="max-w-4xl mx-auto p-6">
   <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
    CONTACT<> </>
    <span className="text-gray-600">
     US
    </span>
    <hr className="border-t-2 border-gray-300 w-16 mx-auto mt-2"/>

    
   </h1>
   <div className="flex flex-col md:flex-row items-center">
    <div className="w-full md:w-1/2 p-4">
     <img alt="A cup of coffee on a coaster, a small potted plant, a smartphone, and a laptop on a desk" className="rounded-lg shadow-md" height="400" src="https://storage.googleapis.com/a1aa/image/MHn-QM4GK9Ufpd_t1Xw50qe9gGQbNhiTMmGOXEce2Kc.jpg" width="600"/>
    </div>
    <div className="w-full md:w-1/2 p-4">
     <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
       Our Store
      </h2>
      <p className="text-gray-600">
       340 c prajapat nager
       <br/>
       Indore , Madhya Pradesh
      </p>
      <p className="text-gray-600 mt-2">
       Tel: =91 84500-620**
       <br/>
       Email: valentino@gmail.com
      </p>
     </div>
     <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">
       Careers at Forever
      </h2>
      <p className="text-gray-600 mb-4">
       Learn more about our 
      </p>
      <button className="px-4 py-2 border border-gray-600  hover:text-white hover:bg-black rounded">
       Explore More
      </button>
     </div>
    </div>
   </div>
  </div>
    </div>
  )
}

export default Contact
