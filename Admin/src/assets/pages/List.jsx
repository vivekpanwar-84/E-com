import { useState, useEffect } from 'react'
import axios from 'axios'
import { backEndurl } from '../../App';

import { toast } from 'react-toastify';


const List = ({token}) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {

      const data = await axios.get(backEndurl + "/api/product/list");
      // console.log(data.data.products);
      // console.log(data.data.products[0].name);
      if (data.data.success) {
        setList(data.data.products);
        // toast.success("Product List Fetched Successfully");
      } else {
        toast.error("Product List Fetching Failed");
      }

      // setList(data);
    } catch (error) {
      console.log(error);
      toast.error("Product List Fetching Failed");
    }


  }

  const deleteProduct = async (id) => {
    
    try {
      const data = await axios.post(backEndurl + "/api/product/delete",{id} , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      
      if (data.data.success) {

        toast.success(data.data.message);
       await getList();
       
      } else {
        toast.error(data.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error("Product Delete Failed");
    }
  }

  useEffect(() => {
    getList();
  }, []);


  return (
    <>

      <div className="container mx-auto">
        <h1 className="text-xl font-semibold mb-4">
          All Products List
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-100 border-b">
                <th className="py-2 px-4 text-left font-semibold text-gray-600">
                  Image
                </th>
                <th className="py-2 px-4 text-left font-semibold text-gray-600">
                  Name
                </th>
                <th className="py-2 px-4 text-left font-semibold text-gray-600">
                  Category
                </th>
                <th className="py-2 px-4 text-left font-semibold text-gray-600">
                  Price
                </th>
                <th className="py-2 px-4 text-left font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {
                list.map((item, index) => {
                  return (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">
                        <img alt={item.name} className="w-12 h-12 object-cover" src={item.image[0]} />
                      </td>
                      <td className="py-2 px-4">
                        {item.name}
                      </td>
                      <td className="py-2 px-4">
                        {item.category}
                      </td>
                      <td className="py-2 px-4">
                        {item.price}
                        
                      </td>
                      <td onClick={()=>deleteProduct(item._id)} className="py-2 px-4 text-red-500 cursor-pointer">
                        X
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default List
