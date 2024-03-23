import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function TweetCard({text,Username,Key,authorPic,Images,Usertag,imageCount}) {
  return (
    <Link href={`/home/tweets/${Key}`} key={Key} className='w-full h-auto flex flex-col border-[1px] pl-5 pb-5 border-white'>
        <div className='flex flex-row items-center'>
          <div className='bg-slate-600 w-[50px] border-black h-[50px] border-[1px] rounded-full flex justify-center items-center mt-5'>
          <Image
                src={authorPic}
                width={50}
                height={50}
                alt="image"
                className="border-[1px]  border-black rounded-full"
              />
          </div>
          <div className='flex flex-col pl-5 mt-5'>
            <h1>{Username}</h1>
            <p className=' text-slate-600'>@{Usertag}</p>
          </div>
        </div>
        <p className='pl-[70px] text-lg mt-4'>
          {text}
        </p>
        <div className="w-full flex justify-center items-center h-auto mt-5">
        {imageCount == 0 ? null : imageCount == 1 ? (
          <div>
            <Image
              src={Images[0]}
              width={150}
              height={150}
              alt={`image1`}
              className="border-[1px] border-transparent rounded-3xl"
            />
          </div>
        ) : imageCount === 2 ? (
          <div className="flex flex-row gap-10">
            <Image
              src={Images[0]}
              width={180}
              height={180}
              alt={`image1`}
              className="border-[1px] border-transparent rounded-3xl"
            />
            <Image
              src={Images[1]}
              width={180}
              height={180}
              className="border-[1px] border-transparent rounded-3xl"
              alt={`image1`}
            />
          </div>
        ) : imageCount === 3 ? (
          <div className=" flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <Image
                src={Images[0]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
              <Image
                src={Images[1]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <Image
                  src={Images[2]}
                  width={180}
                  height={180}
                  className="border-[1px] border-transparent rounded-3xl"
                  alt={`image1`}
                />
              </div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <Image
                src={Images[0]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
              <Image
                src={Images[1]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
            </div>
            <div className="flex flex-row gap-5">
              <Image
                src={Images[2]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
              <Image
                src={Images[3]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
            </div>
          </div>
        )}
        </div>
    </Link>
  )
}

export default TweetCard