"use client";
import React, { useEffect, useState, Suspense } from "react";
import Loading from "../Men/loading";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetProducts({ category, section }) {
  let notify = () =>{
    toast.success('Your product has been added to Cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
    const dispatch = useDispatch();
    const [page, setpage] = useState(0);
  // const nextPage=()=>{
  //     setpage((prevpage)=> (prevpage !== 80 ? page + 20 : prevpage))
  //    }
  // const previosPage=()=>{
  //     setpage((prevPage) => (prevPage > 0 ? prevPage - 20 : prevPage))
  // }
  const [products, setproducts] = useState([]);
  const getproducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}/?limit=20&skip=${page}`
    );
    const data = await response.json();
    // console.log(data);
    const allproducts = data.products;
    setproducts(allproducts);
  };

  useEffect(
    () => {
      getproducts();
    },
    [
      /*page */
    ]
  );

  const AddToCart = (product)=>{
     dispatch(addtocart(product));
     notify();
  }
  const Weget = products.map((product) => {
    return (
     
        <div key={product.id} className="md:w-[25vw] sm:w-[49vw] h-[full] md:my-8 sm:my-2 border-slate-300 md:p-4 sm:p-2 shadow-lg border-2 overflow-hidden">
          <Link href={`/${section}/${product.id}`}>
          <div className="">
            <img
              className="object-cover hover:scale-[1.03] hover:transition-all hover:delay-[120ms] md:w-full md:h-[40vh] sm:h-[25vh] sm:w-full "
              src={product.thumbnail}
            />
          </div>
          <div className="mt-2">
            <p className="font-medium">{product.title}</p>
            <h4 className="font-bold">
              ${product.price}
              <span className=" text-red-700 text-xs"> ({Math.round(product.discountPercentage)}% off)</span>
            </h4>
          </div>
          </Link>
          <button onClick={()=>{AddToCart(product)}} className="bg-black rounded-md text-white px-3 py-1 m-2">Add to cart</button>
          <ToastContainer />
        </div>
     
    );
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center sm:my-[4.5rem] my-10">
          {
            <div className="grid md:grid-cols-2 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-0 md:gap-x-10">
              {Weget}
            </div>
          }
        </div>
        {/* <div className='flex justify-between'>
                <button className='bg-black text-white font-bold px-4 py-2 my-2' onClick={previosPage}>Back</button>
                <button className='bg-black text-white font-bold px-4 py-2 my-2' onClick={nextPage}>Next</button>
                </div> */}
      </Suspense>
    </>
  );
}

export default GetProducts;
