import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center  bg-white">
        <div className="flex flex-col md:flex-row w-full max-w-4xl border">
          <div className="flex-1 flex flex-col justify-center items-start p-8 bg-white">
            <div className="text-sm font-light tracking-widest mb-2">
              OUR BESTSELLERS
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Latest Arrivals
            </h1>
            <NavLink to='/collection'>

              <i className="text-sm font-light tracking-widest flex items-center" href="#">
                SHOP NOW
                <span className="ml-2">
                  <i className="fas fa-arrow-right">
                  </i>
                </span>
              </i>
            </NavLink>
          </div>
          <div className="flex-1 bg-pink-100">
            <img alt="A woman with blonde hair and a black scarf, looking directly at the camera" className="w-full h-full object-cover" height="600" src="https://storage.googleapis.com/a1aa/image/viBJwoKHlaORj9hXEG-YFCl_txSWW2agGXlh9p1tBxE.jpg" width="600" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
