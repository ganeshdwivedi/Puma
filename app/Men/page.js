import React from 'react'
import GetProducts from '../Components/GetProducts'
function page() {

  return (
    <div className='mt-16'>
    <GetProducts section={"Men"} category={"mens-shirts"}/>
    </div>
  )
}

export default page