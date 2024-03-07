import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function SearchTweet() {
  return (
    <div className='flex flex-row items-center bg-slate-400 w-[80%] border-[1px] pl-2 border-transparent rounded-3xl h-[45px]'>
      <SearchIcon sx={{fontSize:25}}/>
        <input placeholder='Search Twitter' className='w-full border-[1px] border-transparent rounded-3xl pl-2 text-white placeholder:text-white bg-transparent outline-none' />
    </div>
  )
}

export default SearchTweet