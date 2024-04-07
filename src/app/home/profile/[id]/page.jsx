'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState, useContext } from 'react'
import fetchUserDetails from '@/functions/FetchRequest/fetchUserDetails';
import AppContext from '@/context/AppContext';
import Link from 'next/link';
import Tweets from '@/components/profile/Tweets';
import Comments from '@/components/profile/Comments';
import Likes from '@/components/profile/Likes';
function page({ params }) {
    const [currentOption, setcurrentOption] = useState(<Tweets id={params.id}/>);
    const context = useContext(AppContext);
    const { setSingleUserProfile, SingleUserProfile } = context
    const fetchSingleUserDetails = async () => {
        const request = await fetch(`/api/get/fetchSingleUserDetails/${params.id}`, {
            method: "GET"
        })
        const response = await request.json()
        if (response.success) {
            setSingleUserProfile((e) => ({
                ...e,
                Image: response.data.Image,
                Followers: response.data.Followers,
                Following: response.data.Following,
                total_Likes: response.data.total_likes,
                id: response.data._id,
                Username: response.data.Username,
                Usertag: response.data.Usertag,
            }))
        }
        else {
            console.log(response)
        }
    }
    const changeOption = (option)=>{
        if(option === currentOption){
            return
        }
        else{
            setcurrentOption(option)
        }
    }
    useEffect(() => {
            fetchSingleUserDetails()
    }, []);
    return (
        <div className='w-full h-[130vh] overflow-y-scroll'>
            <div className='banner bg-blue-500 h-[25%] w-full'></div>
            <div className='main bg-black'>
                <div className='bg-blue-500 w-[125px] h-[125px] flex justify-center items-center border-[1px] rounded-full relative top-[-55px]'>
                    <Image src={SingleUserProfile.Image} alt='profile' height={125} width={125} className='border-[1px] border-transparent rounded-full'/>
                </div>
                <div>
                    <p>{SingleUserProfile.Username}</p>
                    <p className='text-blue-500'>@{SingleUserProfile.Usertag}</p>
                </div>
                <p>
                    {/* make bio schema too */}
                </p>
                <div className='flex flex-row gap-10'>
                    <Link href="#">{SingleUserProfile.Followers} followers</Link>
                    <Link href="#">{SingleUserProfile.Following} following</Link>
                </div>
                <div className='options flex flex-row justify-between mt-5'>
                    <button onClick={()=>{changeOption(<Tweets id={params.id} />)}}>Tweets</button>
                    <button onClick={()=>{changeOption(<Comments id={params.id} />)}}>Replies</button>
                    <button onClick={()=>{changeOption(<Likes id={params.id} />)}}>Likes</button>
                </div>
                <div className='w-full h-screen'>
                    {currentOption}
                </div>
            </div>
        </div>
    )
}

export default page