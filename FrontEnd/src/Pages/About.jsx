import React from 'react'

const About = () => {
  return (
    <div>
     <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">ABOUT <span className="text-gray-600">US</span></h1>
            <hr className="border-t-2 border-gray-300 w-16 mx-auto mt-2"/>
        </div>
        <div className="flex flex-col md:flex-row items-center text-sm">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <img alt="A cozy sweater, jeans, a mug, and a pair of boots laid out on a white surface" className="w-full h-auto" height="400" src="https://storage.googleapis.com/a1aa/image/F_TT3gZG7rTTFBxHR-82_kUiKwwuIPaxmtsqP9sHVWo.jpg" width="600"/>
            </div>
            <div className="md:w-1/2 md:pl-8">
                <p className="mb-4">
                    Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                </p>
                <p className="mb-4">
                    Since our inception, we’ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
                </p>
                <h2 className="font-bold text-gray-800 mb-2">Our Mission</h2>
                <p>
                    Our mission at Forever is to empower customers with choice, convenience, and confidence. We’re dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                </p>
            </div>
        </div>
    </div>
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">WHY <span className="font-bold">CHOOSE US</span> <span className="border-b-2 border-gray-800 inline-block w-16"></span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="text-center  ">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Assurance:</h3>
                <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Convenience:</h3>
                <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Exceptional Customer Service:</h3>
                <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
