import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import React, { useContext, useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { FaAngleDown } from "react-icons/fa6";
import { IoBagAddOutline } from "react-icons/io5";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import axios from 'axios';
import { Link, useParams } from 'react-router';
import Loading from '../common/Loading';
import { CartContext } from '../context/MainContextFile';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdFilterAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";


export default function Product() {

  let { cart, setCart } = useContext(CartContext)
  // console.log(cart);
  // console.log(setCart);



  // https://wscubetech.co/ecommerce-api/categories.php
  // https://wscubetech.co/ecommerce-api/brands.php
  // https://wscubetech.co/ecommerce-api/products.php


  // Loading

  let [loading, setLoading] = useState(false)

  let [selectCategory, setSelectCategory] = useState(false)
console.log(selectCategory);
  // FAQ
  let [categorie, setCategorie] = useState(0)

  // Data 

  let [category, setCategory] = useState([])

  let [brand, setBrand] = useState([])

  let [products, setProducts] = useState([])

  // FILTER

  let [categoryfilter, setCategoryfilter] = useState([])

  let [brandfilter, setBrandfilter] = useState([])

  let [sorting, setSorting] = useState(null)

  let [priceFilter, setPriceFilter] = useState([null, null])

  let [discountFilter, setDiscountFilter] = useState([null, null])

  let [ratingFilter, setRatingFilter] = useState(null)

  let [currentPage, setCurrentPage] = useState(1);

  let [totalPages, setTotalPages] = useState(0);




  // Using fetch to get api data
  let getCategory = async () => {
    let apiData = await fetch(`https://wscubetech.co/ecommerce-api/categories.php`);
    let finalData = await apiData.json();
    let { data } = finalData;
    setCategory(data)
  }

  // Using axios to get api data
  let getBrand = async () => {
    let apiRes = await axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    let finalData = apiRes.data.data
    setBrand(finalData)

  }

  let getProduct = async () => {

    setLoading(true);

    let apiData = await axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
      params: {
        page: currentPage,
        limit: 15,
        sorting: sorting,
        price_from: priceFilter[0],
        price_to: priceFilter[1],
        discount_from: discountFilter[0],
        discount_to: discountFilter[1],
        name: null,
        rating: ratingFilter,
        brands: brandfilter.join(","),
        categories: categoryfilter.join(","),
      }
    })
    let finalData = apiData.data
    let { data } = finalData
    let { total_pages } = finalData

    setTotalPages(total_pages);


    setProducts(data);

    window.scrollTo({
      top: "200",
      behavior: "smooth"
    })

    setLoading(false);
  }


  useEffect(() => {
    getCategory();
    getBrand();
  }, []);


  useEffect(() => {
    getProduct();

  }, [categoryfilter, brandfilter, sorting, priceFilter, ratingFilter, discountFilter, currentPage]);



  let getCheckCategoryValue = (e) => {
    let checkBoxValue = e.target.value

    if (e.target.checked) {
      setCategoryfilter([...categoryfilter, checkBoxValue])
    }
    else {
      let filterCategory = categoryfilter.filter((v) => v != checkBoxValue)

      setCategoryfilter(filterCategory)
    }
  }

  let getCheckBrandValue = (e) => {
    let checkBoxValue = e.target.value

    if (e.target.checked) {
      setBrandfilter([...brandfilter, checkBoxValue])
    }
    else {
      let filterCategory = brandfilter.filter((v) => v != checkBoxValue)

      setBrandfilter(filterCategory)
    }
  }

  
  

  return (
    <>

      <div className='max-w-[1280px] mx-auto px-[32px]'>

        <ToastContainer />

        <div className='sm:flex justify-between items-center pt-[90px] pb-[20px] border-b-[1px] border-[#ccc]'>
          <h1 className='font-bold text-4xl'>New Arrivals</h1>

          <div className='flex md:gap-5 gap-10 items-center md:mt-0 mt-5'>
            
            <div className=''>
              <select name="" id="" onChange={(e) => {
                setSorting(e.target.value)
              }}>
                <option value="">Short</option>
                <option value="1">Name : A to Z</option>
                <option value="2">Name : Z to A</option>
                <option value="3">Price : Low to High</option>
                <option value="4">Price : High to Low</option>
                <option value="5">Discounted Price: Low to High</option>
                <option value="6">Discounted Price: High to Low</option>
              </select>

              {/* <p className='flex items-center'>Sort <span className='text-gray-500 ms-2'><FaAngleDown /></span> </p> */}
            </div>

              <div className='ms-5'>
                {
                  selectCategory ? 

                  <button className="text-xl cursor-pointer p-1 text-blue-600 hover:text-blue-800" onClick={()=>setSelectCategory(false)}>
                    <MdFilterAltOff />
                  </button>
                  :
                  <button className="text-xl cursor-pointer p-1 text-gray-700 hover:text-black" onClick={()=>setSelectCategory(true)}>
                    <MdFilterAlt />
                  </button>
                }
                
                {/* Backdrop overlay for mobile filters drawer */}
                {selectCategory && (
                  <div
                    onClick={() => setSelectCategory(false)}
                    className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300"
                  />
                )}

                <div className={`fixed top-0 right-0 h-full w-[290px] bg-white p-6 z-50 md:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out origin-right ${selectCategory ? "translate-x-0" : "translate-x-full"}`}>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-4">
                    <h3 className="font-bold text-xl text-gray-900">Filters</h3>
                    <button onClick={() => setSelectCategory(false)} className="text-2xl text-gray-500 hover:text-black cursor-pointer p-1">
                      <RxCross2 />
                    </button>
                  </div>
                  
                  <div className="overflow-y-auto flex-1 pr-1 text-left">
                    <div className='py-4 border-b border-gray-200'>
                      <h2 id='1' onClick={() => setCategorie(1 == categorie ? 0 : 1)} className='relative font-semibold cursor-pointer text-gray-900'>Categories <span className='absolute right-2 bottom-1 text-gray-500 text-sm'> {1 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

                      <div className={`text-gray-500 pl-1 ${1 == categorie ? '' : 'hidden'} `}>
                        {
                          category.map((obj, index) => {
                            return (
                              <li key={index} className='list-none mt-3 flex items-center'>
                                <input onChange={getCheckCategoryValue} type='checkbox' value={obj.slug} className='me-2 cursor-pointer'
                                  checked={categoryfilter.includes(obj.slug)}
                                />  <span className="text-[15px]">{obj.name}</span>
                              </li>
                            )
                          })
                        }
                      </div>
                    </div>

                    <div className='py-4 border-b border-gray-200'>
                      <h2 id='2' onClick={() => setCategorie(2 == categorie ? 0 : 2)} className='relative font-semibold cursor-pointer text-gray-900'>Brands <span className='absolute right-2 bottom-1 text-gray-500 text-sm'> {2 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

                      <div className={`text-gray-500 pl-1 ${2 == categorie ? '' : 'hidden'} `}>
                        {
                          brand.map((obj, index) => {
                            return (
                              <li key={index} className='list-none mt-3 flex items-center'>
                                <input onChange={getCheckBrandValue} type='checkbox' className='me-2 cursor-pointer' value={obj.slug} /> <span className="text-[15px]">{obj.name}</span>
                              </li>
                            )
                          })
                        }
                      </div>
                    </div>

                    <div className='py-4 border-b border-gray-200'>
                      <h2 id='3' onClick={() => setCategorie(3 == categorie ? 0 : 3)} className='relative font-semibold cursor-pointer text-gray-900'>Price <span className='absolute right-2 bottom-1 text-gray-500 text-sm'> {3 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

                      <div className={`text-gray-500 pl-1 ${3 == categorie ? '' : 'hidden'} `}>
                        <li onClick={() => setPriceFilter([0, 500])} className='list-none mt-3 flex items-center cursor-pointer' >
                          <input type='radio' name='price' className='me-2 cursor-pointer' /> <span className="text-[15px]">Rs.0 - Rs.500</span>
                        </li>
                        <li onClick={() => setPriceFilter([501, 1000])} className='list-none mt-3 flex items-center cursor-pointer' >
                          <input type='radio' name='price' className='me-2 cursor-pointer' /> <span className="text-[15px]">Rs.501 - Rs.1000</span>
                        </li>
                        <li onClick={() => setPriceFilter([1001, 1500])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='price' className='me-2 cursor-pointer' /> <span className="text-[15px]">Rs.1001 - Rs.1500</span>
                        </li>
                        <li onClick={() => setPriceFilter([1501, 2500])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='price' className='me-2 cursor-pointer' /> <span className="text-[15px]">Rs.1501 - Rs.2500</span>
                        </li>
                        <li onClick={() => setPriceFilter([2501, 10000000000])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='price' className='me-2 cursor-pointer' /> <span className="text-[15px]">Rs.2501 and more</span>
                        </li>
                      </div>
                    </div>

                    <div className='py-4 border-b border-gray-200'>
                      <h2 id='4' onClick={() => setCategorie(4 == categorie ? 0 : 4)} className='relative font-semibold cursor-pointer text-gray-900'>Discounted Price <span className='absolute right-2 bottom-1 text-gray-500 text-sm'> {4 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

                      <div className={`text-gray-500 pl-1 ${4 == categorie ? '' : 'hidden'} `}>
                        <li onClick={() => setDiscountFilter([0, 20])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='discount' className='me-2 cursor-pointer' /> <span className="text-[15px]">0% - 20%</span>
                        </li>
                        <li onClick={() => setDiscountFilter([21, 40])} className='list-none mt-3 flex items-center cursor-pointer' >
                          <input type='radio' name='discount' className='me-2 cursor-pointer' /> <span className="text-[15px]">21% - 40%</span>
                        </li>
                        <li onClick={() => setDiscountFilter([41, 60])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='discount' className='me-2 cursor-pointer' /> <span className="text-[15px]">41% - 60%</span>
                        </li>
                        <li onClick={() => setDiscountFilter([61, 80])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='discount' className='me-2 cursor-pointer' /> <span className="text-[15px]">61% - 80%</span>
                        </li>
                        <li onClick={() => setDiscountFilter([81, 100])} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='radio' name='discount' className='me-2 cursor-pointer' /> <span className="text-[15px]">81% - 100%</span>
                        </li>
                      </div>
                    </div>

                    <div className='py-4 border-b border-gray-200'>
                      <h2 id='5' onClick={() => setCategorie(5 == categorie ? 0 : 5)} className='relative font-semibold cursor-pointer text-gray-900'>Rating <span className='absolute right-2 bottom-1 text-gray-500 text-sm'> {5 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

                      <div className={`text-gray-500 pl-1 ${5 == categorie ? '' : 'hidden'} `}>
                        <li onClick={() => setRatingFilter(1)} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='checkbox' className='me-2 cursor-pointer' /> <span className="text-[15px]">1 and more</span>
                        </li>
                        <li onClick={() => setRatingFilter(2)} className='list-none mt-3 flex items-center cursor-pointer' >
                          <input type='checkbox' className='me-2 cursor-pointer' /> <span className="text-[15px]">2 and more</span>
                        </li>
                        <li onClick={() => setRatingFilter(3)} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='checkbox' className='me-2 cursor-pointer' /> <span className="text-[15px]">3 and more</span>
                        </li>
                        <li onClick={() => setRatingFilter(4)} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='checkbox' className='me-2 cursor-pointer' /> <span className="text-[15px]">4 and more</span>
                        </li>
                        <li onClick={() => setRatingFilter(5)} className='list-none mt-3 flex items-center cursor-pointer'>
                          <input type='checkbox' className='me-2 cursor-pointer' /> <span className="text-[15px]">5 and more</span>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 pt-5'>
          <div className='hidden md:block pr-6 border-r border-gray-200'>

            <div className='py-5 border-b-[1px] border-[#ccc]'>
              <h2 id='1' onClick={() => setCategorie(1 == categorie ? 0 : 1)} className='relative font-semibold cursor-pointer'>Categories <span className='absolute right-2 bottom-0 text-gray-500'> {1 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

              <div className={`text-gray-500 ${1 == categorie ? '' : 'hidden'} `}>

                {
                  category.map((obj, index) => {
                    return (
                      <li key={index} className='list-none mt-4 '>
                        <input onChange={getCheckCategoryValue} type='checkbox' value={obj.slug} className='me-1'
                          checked={categoryfilter.includes(obj.slug)}
                        />  {obj.name}
                      </li>
                    )
                  })
                }


              </div>


            </div>
            <div className='py-5 border-b-[1px] border-[#ccc]'>
              <h2 id='2' onClick={() => setCategorie(2 == categorie ? 0 : 2)} className='relative font-semibold cursor-pointer'>Brands <span className='absolute right-2 bottom-0 text-gray-500'> {2 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

              <div className={`text-gray-500 ${2 == categorie ? '' : 'hidden'} `}>

                {
                  brand.map((obj, index) => {
                    return (
                      <li key={index} className='list-none mt-4 '>
                        <input onChange={getCheckBrandValue} type='checkbox' className='me-1' value={obj.slug} /> {obj.name}
                      </li>
                    )
                  })
                }




              </div>
            </div>
            <div className='py-5 border-b-[1px] border-[#ccc]'>
              <h2 id='3' onClick={() => setCategorie(3 == categorie ? 0 : 3)} className='relative font-semibold cursor-pointer'>Price <span className='absolute right-2 bottom-0 text-gray-500'> {3 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

              <div className={`text-gray-500 ${3 == categorie ? '' : 'hidden'} `}>

                <li onClick={() => setPriceFilter([0, 500])} className='list-none mt-4' >
                  <input type='radio' name='price' className='me-1' />Rs.0 - Rs.500
                </li>

                <li onClick={() => setPriceFilter([501, 1000])} className='list-none mt-4 ' >
                  <input type='radio' name='price' className='me-1' /> Rs.501 - Rs.1000
                </li>

                <li onClick={() => setPriceFilter([1001, 1500])} className='list-none mt-4 '>
                  <input type='radio' name='price' className='me-1' />Rs.1001 - Rs.1500
                </li>

                <li onClick={() => setPriceFilter([1501, 2500])} className='list-none mt-4 '>
                  <input type='radio' name='price' className='me-1' />Rs.1501 - Rs.2500
                </li>

                <li onClick={() => setPriceFilter([2501, 10000000000])} className='list-none mt-4 '>
                  <input type='radio' name='price' className='me-1' />Rs.2501 and more
                </li>

              </div>
            </div>

            <div className='py-5 border-b-[1px] border-[#ccc]'>
              <h2 id='4' onClick={() => setCategorie(4 == categorie ? 0 : 4)} className='relative font-semibold cursor-pointer'>Discounted Price

                <span className='absolute right-2 bottom-0 text-gray-500'> {4 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

              <div className={`text-gray-500 ${4 == categorie ? '' : 'hidden'} `}>
                <li onClick={() => setDiscountFilter([0, 20])} className='list-none mt-4 '>
                  <input type='radio' name='discount' className='me-1' />0% - 20%
                </li>

                <li onClick={() => setDiscountFilter([21, 40])} className='list-none mt-4 ' >
                  <input type='radio' name='discount' className='me-1' /> 21% - 40%
                </li>

                <li onClick={() => setDiscountFilter([41, 60])} className='list-none mt-4 '>
                  <input type='radio' name='discount' className='me-1' />41% -60%
                </li>

                <li onClick={() => setDiscountFilter([61, 80])} className='list-none mt-4 '>
                  <input type='radio' name='discount' className='me-1' />61% - 80%
                </li>

                <li onClick={() => setDiscountFilter([81, 100])} className='list-none mt-4 '>
                  <input type='radio' name='discount' className='me-1' />81% - 100%
                </li>

              </div>
            </div>
            <div className='py-5 border-b-[1px] border-[#ccc]'>
              <h2 id='5' onClick={() => setCategorie(5 == categorie ? 0 : 5)} className='relative font-semibold cursor-pointer'>Rating
                <span className='absolute right-2 bottom-0 text-gray-500'> {5 == categorie ? <FaMinus /> : <FaPlus />} </span> </h2>

              <div className={`text-gray-500 ${5 == categorie ? '' : 'hidden'} `}>
                <li onClick={() => setRatingFilter(1)} className='list-none mt-4 '>
                  <input type='checkbox' className='me-1' />1 and more
                </li>

                <li onClick={() => setRatingFilter(2)} className='list-none mt-4 ' >
                  <input type='checkbox' className='me-1' /> 2 and more
                </li>

                <li onClick={() => setRatingFilter(3)} className='list-none mt-4 '>
                  <input type='checkbox' className='me-1' />3 and more
                </li>

                <li onClick={() => setRatingFilter(4)} className='list-none mt-4 '>
                  <input type='checkbox' className='me-1' />4 and more
                </li>

                <li onClick={() => setRatingFilter(5)} className='list-none mt-4 '>
                  <input type='checkbox' className='me-1' />5 and more
                </li>

              </div>
            </div>

          </div>

          <div className='w-full'>

            {
              loading ?

                <Loading />
                :
                <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8 mt-5 mb-6 '>

                  {
                    products.length >= 1 ?

                      products.map((obj, index) => {
                        return (
                          <Items key={index} data={obj} />
                        )

                      })
                      :
                      <div className='font-bold w-100 text-center'>Product not found </div>
                  }

                </div>
            }

            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />

          </div>



        </div>
      </div>

    </>
  )
}


let Items = ({ data }) => {
  let { name, price, image, category_name, slug, rating, id } = data

  let { cart, setCart } = useContext(CartContext)
  // console.log(slug);


  let addToCart = () => {
    let cartObj = {
      id,
      name,
      price,
      image,
      qty: 1

    }

    setCart([...cart, cartObj])

    toast.success("Item added")

  }

  let checkProductInCart = cart.find((obj) => obj.id == id)

  let removeToCart = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        let finalCart = cart.filter((obj) => obj.id != id)

        setCart(finalCart)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  console.log(cart);

  return (
    <div className='bg-white w-full max-w-[290px] mx-auto rounded-[10px] h-auto shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] p-4 flex flex-col justify-between' >
      <img src={image} alt="" className='w-full  object-contain' />
      <p className='text-body mt-2'>{category_name}</p>
      <h3 className='text-[18px] font-bold mt-2'>{name}</h3>

      <div className='mt-2 flex justify-between align-center' >
        <p className='text-[18px] font-semibold mt-2 block'>${price} </p>

        {
          checkProductInCart ? <button onClick={removeToCart} className='text-xl cursor-pointer'>  <IoBagRemoveOutline /> </button> : <button onClick={addToCart} className='text-xl cursor-pointer'> <IoBagAddOutline /></button>
        }


      </div>
      <div className='text-amber-500 flex items-center gap-[5px] my-2'>
        <IoIosStar /> <span className='text-black'> {rating}.0</span>
      </div>
      <Link to={`/product-details/${slug}`}>
        <button className='bg-blue-800 text-white px-2 mt-2'>Read more</button>
      </Link>

    </div>
  )



} 