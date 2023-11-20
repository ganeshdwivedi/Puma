"use client";
import React, { useEffect, useState } from "react";

function Images({ id = 1, alt, previewimg }) {
  const [images, setimages] = useState([]);
  const [thumbnail, setthumbnail] = useState();

  const getproducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    // console.log(data);
    setimages(data.images);
  };
  useEffect(() => {
    getproducts();
  }, []);

  const allImages = images.map((url,index) => (
    <div key={index}>
      <img
        onClick={() => {
          setthumbnail(url);
        }}
        className="sm:w-14 md:w-28 m-2"
        src={url}
      />
    </div>
  ));

  return (
    <>
      <img
        src={thumbnail == null ? previewimg : thumbnail}
        alt={alt}
        className="md:w-96 md:order-1 sm:w-96 sm:h-96 md:h-72 object-contain rounded-md"/>
      <div className="flex md:order-1 sm:flex-row md:flex-col">{allImages}</div>
    </>
  );
}

export default Images;
