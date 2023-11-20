"use client";
import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function page() {
  return (
    <>
    
     <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default page;

//   const [value, setvalue] = useState("")
//    const search = (e) => {
//     setvalue(e.target.value);
//     console.log(e.target.value)
//   }
//   return (<div >
//     <input className='bg-red-200' type="text" placeholder='Search'onChange={search} value={value} />
//     <button className='bg-green-200' onClick={()=>{console.log(value)}}>search</button>
// </div>
//   )
