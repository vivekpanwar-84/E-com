import React, { useContext, useEffect, useState } from 'react'
import { ShopList } from '../Context/ShopList'
import LatestItem from './LatestItem';

const RelatedProduct = ({ category, subcategory }) => {
    const {products} = useContext(ShopList);

    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {

            let productcpoy = products.slice();

            productcpoy = productcpoy.filter((item)=> category === item.category);
            productcpoy = productcpoy.filter((item)=> subcategory === item.subcategory);
            setRelated(productcpoy.slice(0,5));
        }
    }, [products]);


return (
    <>
 <div className="container mx-auto px-4 py-8">
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
   {
    related.map((item ,index)=>(
        <LatestItem key={index} id={item._id} img={item.image} name ={ item.name} price={item.price} />
        
    ))
   }
    </div>
   </div>
    </>
)
}

export default RelatedProduct
