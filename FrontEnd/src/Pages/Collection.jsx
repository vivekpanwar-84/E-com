import React, { useContext, useEffect, useState } from 'react';
import { ShopList } from '../Context/ShopList.jsx';
import LatestItem from '../Components/LatestItem.jsx';

const Collection = () => {
  const [visible, setVisible] = useState(true);
  const { products, search, showsearch } = useContext(ShopList);
  const [filteritem, setFilteritem] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if (subCategory.includes(e.target.value)) { // Change from category to subcategory
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyfiltter = () => {
    let productcopy = products.slice();

    if (showsearch && search) {
      productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    }
    // Filter by category
    if (category.length > 0) {
      productcopy = productcopy.filter(item => category.includes(item.category));
    }

    // Filter by subcategory
    if (subCategory.length > 0) {
      productcopy = productcopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilteritem(productcopy);
  };

  const sortProduct = () => {
    let fpcoopy = filteritem.slice();
    switch (sortType) {
      case 'low-high': setFilteritem(fpcoopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low': setFilteritem(fpcoopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyfiltter();
        break;
    }
  }

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  

  useEffect(() => {

    applyfiltter();
  }, [category, subCategory, showsearch, search , products]); // Add products to the dependency array

  useEffect(() => {
    setFilteritem(products);
  }, [products]); // Update filteritem when products change

  return (
    <div>
      <div className="container mx-auto p-4 ">
        <div className="flex flex-col md:flex-row">
          {/* Filters Section */}
          <div className={`${visible ? '' : 'hidden'} sm:hw-full sm:w-1/4 p-4`}>
            <div className="sm:text-xl mb-4 cursor-pointer" onClick={() => setVisible(!visible)}>
              FILTERS <i className='fas fa-chevron-down text-gray-700'></i>
            </div>

            <div className="mb-6 border-1 p-2">
              <h3 className="text-lg font-semibold mb-2">CATEGORIES</h3>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input className="mr-2" type="checkbox" value={'Men'} onChange={togglecategory} />
                  Men
                </label>
                <label className="flex items-center">
                  <input className="mr-2" type="checkbox" value={'Women'} onChange={togglecategory} />
                  Women
                </label>
                <label className="flex items-center">
                  <input className="mr-2" type="checkbox" value={'Kids'} onChange={togglecategory} />
                  Kids
                </label>
              </div>
            </div>

            <div>
              <div className='border-1 p-2'>
                <h3 className="text-lg font-semibold mb-2">TYPE</h3>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input className="mr-2" type="checkbox" value={'Topwear'} onChange={togglesubcategory} />
                    Topwear
                  </label>
                  <label className="flex items-center">
                    <input className="mr-2" type="checkbox" value={'Bottomwear'} onChange={togglesubcategory} />
                    Bottomwear
                  </label>
                  <label className="flex items-center">
                    <input className="mr-2" type="checkbox" value={'Winterwear'} onChange={togglesubcategory} />
                    Winterwear
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Collections Section */}
          <div className="w-full md:w-3/4 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-gray-700 ">
                <div className={`${visible ? 'hidden' : ''} sm:text-xl mb-4 cursor-pointer`} onClick={() => setVisible(!visible)}>
                  FILTERS <i className='fas fa-chevron-right text-gray-700'></i>
                </div>
                ALL
                <span className="text-gray-900"> COLLECTIONS</span>
              </h2>
              <div>
                <label className="mr-2" htmlFor="sort">Sort by:</label>
                <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 p-2 rounded" id="sort">
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="high-low">Sort by: High to Low</option>
                  <option value="low-high">Sort by: Low to High</option>
                </select>
              </div>
            </div>

            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                  filteritem.map((item, index) => (
                    <LatestItem key={index} id={item._id} img={item.image} name={item.name} price={item.price} />
                    
                  ))

                  
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;