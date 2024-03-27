import React from 'react'
import Account from '../cards/Account'
import Link from 'next/link'
function AccountSuggestion() {
  return (
    <div className='w-[90%] h-auto pl-5 pb-5 bg-[#202427] border-[1px] border-[#202427] rounded-xl'>
        <h1 className=" font-bold text-xl mt-8">Who to follow</h1>
        <div className='w-full flex flex-col gap-4'>
        <Account image={"/public.svg"} Username={"Icecubesaad"} Usertag={"icecube"} />
        <Account image={"/public.svg"} Username={"Icecubesaad"} Usertag={"icecube"} />
        <Account image={"/public.svg"} Username={"Icecubesaad"} Usertag={"icecube"} />
        <Link href="/follow" className='text-[#1DA1F2] font-semibold'>see more</Link>
        </div>
    </div>
  )
}

export default AccountSuggestion