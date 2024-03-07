import Image from 'next/image'
import React from 'react'

function Tweet({text,Username,Key,authorPic,Images,Usertag,imageCount}) {
  return (
    <div key={Key} className='w-full h-auto flex flex-col'>
        <div className='flex flex-row'>
          <div className='bg-slate-600 w-[50px] border-black h-[50px] border-[1px] rounded-full flex justify-center items-center mt-5'>
          <Image
                src={authorPic}
                width={50}
                height={50}
                alt="image"
                className="border-[1px]  border-black rounded-full"
              />
          </div>
          <div className='flex flex-col'>
            <h1>{Username}</h1>
            <p>@{Usertag}</p>
          </div>
        </div>
        <p>
          {Text}
        </p>
        <div className="w-full flex justify-center items-center h-auto">
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
    </div>
  )
}

export default Tweet