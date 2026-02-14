import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopList } from '../Context/ShopList';
import RelatedProduct from '../Components/RelatedProduct.jsx';
import Title from '../Components/Title.jsx';


const Product = () => {

  const { productId } = useParams();
  const { products, addCart } = useContext(ShopList);
  const [prodcutdata, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fatchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    })
  }

  useEffect(() => {
    fatchProductData();
  }, [productId, products]);

  // console.log(size);

  return prodcutdata ? (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          {/* <!-- Left Column: Thumbnails --> */}
          <div className="flex flex-row items-center md:w-1/4 md:flex-col">
            {
              prodcutdata.image.map((item, index) => (
                <img onClick={() => setImage(item)} alt="Thumbnail 1" className=" cursor-pointer mb-4 md:mb-4 md:mr-0 mr-4  hover:scale-110 transition ease-in-out" height="150" key={index} src={item} width="100" />

              ))
            }

          </div>
          {/* <!-- Right Column: Main Image and Details --> */}
          <div className="flex flex-col md:flex-row md:w-3/4 md:pl-8">
            <img alt="Main product image" className="w-full h-auto mb-4 md:w-90" height="200" src={image} width="300" />
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-2xl font-semibold mb-2">{prodcutdata.name}</h1>
              <div className="flex items-center mb-2">
                <div className="text-yellow-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="ml-2 text-gray-600">(122)</span>
              </div>
              <div className="text-3xl font-bold mb-4">${prodcutdata.price}</div>
              <p className="text-gray-700 mb-4">{prodcutdata.description}</p>
              <div className="mb-4">
                <span className="font-semibold">Select Size</span>
                <div className="flex space-x-2 mt-2">
                  {
                    prodcutdata.sizes.map((item, index) => (

                      <button onClick={() => setSize(item)} className={`border border-gray-300 px-4 py-2 ${item === size ? 'border-orange-400' : ''}`} key={index}>{item}</button>
                    ))
                  }


                </div>

              </div>
              <button onClick={() => addCart(prodcutdata._id, size)} className="cursor-pointer bg-black text-white px-6 py-3">ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'></hr>
              <div className="mt-4 text-gray-600">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Title text='RELATED PRODUCTS' />

        <RelatedProduct category={prodcutdata.category} subcategory={prodcutdata.subcategory} />
      </div>
    </div>

  ) : <div className='opacity-0'></div>
}

export default Product
