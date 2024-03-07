import Link from 'next/link'
import React from 'react'
function Trend({Trend,Tweets}) {
  return (
    <Link href={`/?t=${Trend}`} className=' flex flex-col mt-3'>
         <h1 className=" text-lg">#{Trend}</h1>
         <p className=" text-sm">{Tweets} tweets</p>
    </Link>
  )
}

export default Trend