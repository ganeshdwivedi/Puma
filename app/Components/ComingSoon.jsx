import React from 'react'
import TimeComingSoon from './TimeComingSoon'

function ComingSoon() {
  return (
    <>
    <div>
        <img className='md:block sm:hidden' src="https://cdn.sanity.io/images/qa41whrn/staging/11b2b5c1fd8c2bb65fd55fafb3ce4586e43ab31f-2880x1040.jpg?w=2160&q=80&auto=format" />
        <img className='sm:block md:hidden lg:hidden' src='https://cdn.sanity.io/images/qa41whrn/staging/2903eabe51a12db9f6489cbf88e6515b137aad4e-1536x1536.jpg?w=720&q=80&auto=format'/>
    </div>
    <TimeComingSoon day={29} month={"March"} year={2024}/>
    </>
  )
}

export default ComingSoon