import React from 'react'

const Title = ({text}) => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 bg-white">
    <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
            <span className="border-b-2 border-gray-300 pb-1">{text}</span>
        </h2>
        
    </div>
</div>
    </>
  )
}

export default Title
