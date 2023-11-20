"use client";
import React, {useEffect, useState } from "react";
import Button from "./Button";
import Images from "./Images";

function ReviewProduct({params}) {
  
  const [product, setproduct] = useState([]);
  let id = params.slug;
  const BuyUrl =
    "https://api.whatsapp.com/send?phone=919179792991&text=%F0%9F%98%80Hey%20i%20want%20to%20buy%20this%20%0A%0A";
  const encodedurl = "https%3A%2F%2Fpuma-ganeshdwivedi.vercel.app%2FMen";
  const getproducts = async () => {
    const url = "https://dummyjson.com/products/";
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    // console.log(data);
    setproduct(data);
  };
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
        <div className="pt-10 text-start">
          <div className="lg:flex lg:gap-20 max-w-[1200px] m-auto lg:mt-20 px-14 py-10 justify-center">
            <Images key={product.title} id={id} previewimg={product.thumbnail} alt={product.title} />

            <div className="mt-4">
              <div className="text-sm font-semibold text-slate-900">
                <h1 className="text-2xl"> {product.title}</h1>
              </div>
              <div className="text-[12px] text-slate-500 font-medium">
                <p className="text-lg">{product.description}</p>
              </div>
              <div className="text-md font-semibold text-[#FF676D] mt-1">
                <h1>Price - ₹{product.price}</h1>
                <p className="text-black">Rating: {product.rating}</p>
              </div>
              <div className=" md:mt-3 sm:mt-8">
                <Button
                  target={"_blank"}
                  text={"Buy"}
                  href={`${BuyUrl}${encodedurl}/${id}`}
                  className="text-white bg-black sm:px-20 "
                />
              </div>
            </div>
          </div>
        </div>
      {/* </Suspense> */}
    </>
  );
}

export default ReviewProduct;

