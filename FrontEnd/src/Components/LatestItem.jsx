import React, { useContext } from 'react'
import { ShopList } from '../Context/ShopList'
import { Link } from 'react-router-dom';

const LatestItem = ({ id, name, img, price }) => {

  const { currency } = useContext(ShopList);

  return (
    <Link to={`/Product/${id}`}>
      <div className="text-center">
        <img alt="Kid Tapered Slim Fit Trouser" className="w-full h-auto hover:scale-110 transition ease-in-out" height="400" src={img[0]} width="300" />
        <h2 className="mt-4 text-lg font-medium">
          {name}
        </h2>
        <p className="text-gray-500">
          {currency}{price}
        </p>
      </div>
    </Link>
  )
}

export default LatestItem
