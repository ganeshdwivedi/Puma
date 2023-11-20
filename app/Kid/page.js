import React from 'react'
import GetProducts from '../Components/GetProducts'

function page() {
  return (
    <div className='mt-16'>
    <GetProducts section={"Kid"} category={"mens-watches"}/>
    </div>
  )
}

export default page