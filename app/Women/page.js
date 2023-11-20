import React from 'react'
import GetProducts from '../Components/GetProducts'

function page() {
  return (
    <div className='mt-16'>
    <GetProducts section={"Women"} category={"womens-bags"}/>
    </div>
  )
}

export default page