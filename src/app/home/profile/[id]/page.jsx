'use client';
import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import fetchUserDetails from '@/functions/FetchRequest/fetchUserDetails';
import AppContext from '@/context/AppContext';
import Link from 'next/link';
import Tweets from '@/components/profile/Tweets';
import Comments from '@/components/profile/Comments';
import Likes from '@/components/profile/Likes';

function Page({ params }) {
    const [currentOption, setCurrentOption] = useState(<Tweets id={params.id} />);
    const context = useContext(AppContext);
    const { setSingleUserProfile, SingleUserProfile } = context;

    const fetchSingleUserDetails = async () => {
        const request = await fetch(`/api/get/fetchSingleUserDetails/${params.id}`, {
            method: "GET"
        });
        const response = await request.json();
        if (response.success) {
            setSingleUserProfile((prevUserProfile) => ({
                ...prevUserProfile,
                Image: response.data.Image,
                Followers: response.data.Followers,
                Following: response.data.Following,
                total_Likes: response.data.total_likes,
                id: response.data._id,
                Username: response.data.Username,
                Usertag: response.data.Usertag
            }));
        } else {
            console.log(response);
        }
    };

    const changeOption = (option) => {
        if (option === currentOption) {
            return;
        } else {
            setCurrentOption(option);
        }
    };

    useEffect(() => {
        fetchSingleUserDetails();
    }, []);

    const [activeTab, setActiveTab] = useState(1);

    const changeActiveTab = (currentId) => {
        const element_id = currentId + "optprofile";
        const element_to_change = window.document.getElementById(element_id);
        element_to_change.classList.add("active");
    };

    const changePreviousTab = (currentId) => {
        if (activeTab === currentId) {
            return null;
        } else {
            const element_id = currentId + "optprofile";
            const element_to_change = window.document.getElementById(element_id);
            element_to_change.classList.remove("active");
        }
    };

    const changeActive = (currentId) => {
        const element_id = activeTab + "optprofile";
        const element_to_revert = window.document.getElementById(element_id);
        element_to_revert.classList.remove("active");
        setActiveTab(currentId);
        const element_id_2 = currentId + "optprofile";
        const element_to_change = window.document.getElementById(element_id_2);
        element_to_change.classList.add("active");
    };

    return (
        <div className='w-full h-[130vh] overflow-y-scroll'>
            <div className='banner bg-blue-500 h-[20%] w-full'></div>
            <div className='main bg-black'>
                <div className='bg-blue-500 w-[125px] h-[125px] flex justify-center items-center border-[1px] rounded-full relative top-[-55px]'>
                    <Image src={SingleUserProfile.Image} alt='profile' height={125} width={125} className='border-[1px] border-transparent rounded-full' />
                </div>
                <div>
                    <p>{SingleUserProfile.Username}</p>
                    <p className='text-blue-500'>@{SingleUserProfile.Usertag}</p>
                </div>
                <p className=' h-[auto] mb-4 w-full mt-4'>
                    Edit bio in <button className='text-blue-500'>settings</button>
                </p>
                <div className='flex flex-row gap-10'>
                    <Link href="#">{SingleUserProfile.Followers} followers</Link>
                    <Link href="#">{SingleUserProfile.Following} following</Link>
                </div>
                <div className='options flex flex-row justify-between mt-5'>
                    <button id='1optprofile' onMouseEnter={() => {
                        changeActiveTab(1);
                    }}
                        onMouseLeave={() => {
                            changePreviousTab(1);
                        }} className=' optprofile active border-white border-[1px] w-full pt-4 pb-4' onClick={() => { changeOption(<Tweets id={params.id} />); changeActive(1); }}>Tweets</button>
                    <button id='2optprofile' onMouseEnter={() => {
                        changeActiveTab(2);
                    }}
                        onMouseLeave={() => {
                            changePreviousTab(2);
                        }} className=' optprofile border-white border-[1px] w-full pt-4 pb-4' onClick={() => { changeOption(<Comments id={params.id} />); changeActive(2); }}>Replies</button>
                    <button id='3optprofile' onMouseEnter={() => {changeActiveTab(3);}}
                        onMouseLeave={() => {
                            changePreviousTab(3);
                        }} className=' optprofile border-white border-[1px] w-full pt-4 pb-4' onClick={() => { changeOption(<Likes id={params.id} />); changeActive(3); }}>Likes</button>
                </div>
                <div className='w-full h-screen'>
                    {currentOption}
                </div>
            </div>
        </div>
    );
}

export default Page;
