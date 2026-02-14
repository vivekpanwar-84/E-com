import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backEndurl } from '../../App';
import { toast } from 'react-toastify';
// import { set } from 'mongoose';

const Add = ({ token }) => {
  // const token = localStorage.getItem("token");

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("men");
  const [subCategory, setSubCategory] = useState("topwear");
  const [productPrice, setProductPrice] = useState(0);
  const [productSizes, setProductSizes] = useState([]);
  const [isBestseller, setIsBestseller] = useState(false);

  const toggleSize = (size) => {
    setProductSizes((prev) =>
      prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
    );
  };

  // console.log(image1, image2, image3, image4);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formdata = new FormData();

      image1 && formdata.append("image1", image1);
      image2 && formdata.append("image2", image2);
      image3 && formdata.append("image3", image3);
      image4 && formdata.append("image4", image4);

      formdata.append("name", productName);
      formdata.append("description", productDescription);
      formdata.append("category", productCategory);
      formdata.append("subCategory", subCategory);
      formdata.append("price", productPrice);
      formdata.append("size", JSON.stringify(productSizes));
      formdata.append("bestseller", isBestseller);

      // for (var pair of formdata.entries()) {
      //   console.log(pair[0] + ': ' + pair[1]);
      // }


      if (!token) {
        alert("Token missing! Please login again.");
        return;
      }

      const res = await axios.post(
        backEndurl + "/api/product/add",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setProductName("");
        setProductDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setProductPrice(0);
        setIsBestseller(false);
        setProductSizes([]);

      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>

      <form onSubmit={handleSubmit}>
        <div className=" w-full md:w-full p-8">
          <div className="  rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
              <div className={`border-dashed border-2 border-gray-300 flex items-center justify-center h-16 relative   ${image1 ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-white'}`}>
                <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" className="absolute inset-0 opacity-0 cursor-pointer" required />
                <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                <span className="ml-2 text-gray-400">{image1 ? 'Uploaded' : 'Upload'}</span>
              </div>
              <div className={`border-dashed border-2 border-gray-300 flex items-center justify-center h-16 relative   ${image2 ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-white'}`}>
                <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" className="absolute inset-0 opacity-0 cursor-pointer" />
                <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                <span className="ml-2 text-gray-400">{image2 ? 'Uploaded' : 'Upload'}</span>
              </div>
              <div className={`border-dashed border-2 border-gray-300 flex items-center justify-center h-16 relative   ${image3 ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-white'}`}>
                <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" className="absolute inset-0 opacity-0 cursor-pointer" />
                <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                <span className="ml-2 text-gray-400">{image3 ? 'Uploaded' : 'Upload'}</span>
              </div>
              <div className={`border-dashed border-2 border-gray-300 flex items-center justify-center h-16 relative   ${image4 ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-white'}`}>
                <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" className="absolute inset-0 opacity-0 cursor-pointer" />
                <i className="fas fa-cloud-upload-alt text-gray-400"></i>
                <span className="ml-2 text-gray-400">{image4 ? 'Uploaded' : 'Upload'}</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product name</label>
              <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" placeholder="Type here" className="w-full border border-gray-300 p-2 rounded" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product description</label>
              <textarea onChange={(e) => setProductDescription(e.target.value)} value={productDescription} type="text" placeholder="Write content here" className="w-full border border-gray-300 p-2 rounded h-24" required></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Product category</label>
                <select onChange={(e) => setProductCategory(e.target.value)} className="w-full border border-gray-300 p-2 rounded" required>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Sub category</label>
                <select onChange={(e) => setSubCategory(e.target.value)} className="w-full border border-gray-300 p-2 rounded" required>
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Product Price</label>
                <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} type="number" placeholder="250" className="w-full border border-gray-300 p-2 rounded" required />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product Sizes</label>
              <div className="flex space-x-2">
                <div onClick={() => toggleSize("S")}>
                  <p className={`${productSizes.includes("S") ? "bg-black text-white" : "bg-slate-200"} border border-gray-300 p-2 rounded cursor-pointer`}>S</p>
                </div>
                <div onClick={() => toggleSize("M")}>
                  <p className={`${productSizes.includes("M") ? "bg-black text-white" : "bg-slate-200"} border border-gray-300 p-2 rounded cursor-pointer`}>M</p>
                </div>
                <div onClick={() => toggleSize("L")}>
                  <p className={`${productSizes.includes("L") ? "bg-black text-white" : "bg-slate-200"} border border-gray-300 p-2 rounded cursor-pointer`}>L</p>
                </div>
                <div onClick={() => toggleSize("XL")}>
                  <p className={`${productSizes.includes("XL") ? "bg-black text-white" : "bg-slate-200"} border border-gray-300 p-2 rounded cursor-pointer`}>XL</p>
                </div>
                <div onClick={() => toggleSize("XXL")}>
                  <p className={`${productSizes.includes("XXL") ? "bg-black text-white" : "bg-slate-200"} border border-gray-300 p-2 rounded cursor-pointer`}>XXL</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input onChange={() => setIsBestseller(prev => !prev)} checked={isBestseller} type="checkbox" id="bestseller" className="mr-2" />
                <span className="text-gray-700">Add to bestseller</span>
              </label>
            </div>

            <button type="submit" className="bg-black text-white px-4 py-2 rounded">ADD</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Add
