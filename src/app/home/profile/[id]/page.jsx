'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState, useContext } from 'react'
import fetchUserDetails from '@/functions/FetchRequest/fetchUserDetails';
import AppContext from '@/context/AppContext';
function page({ params }) {
    const [SameUser, setSameUser] = useState(false);
    const context = useContext(AppContext);
    const { Userinfo, setSingleUserProfile, SingleUserProfile } = context
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
            // show some error
        }
    }
    const fetchSingleUserTweets = async () => {
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
                total_Likes: response.data.Total_likes,
                id: response.data._id,
                Username: response.data.Username,
                Usertag: response.data.Usertag,
            }))
        }
        else {
            // show some error
        }
    }
    useEffect(() => {
        if (params.id == Userinfo.id) {
            setSameUser(true)
            setSingleUserProfile((e => (
                {
                    ...e,
                    Image: Userinfo.Image,
                    Followers: Userinfo.Followers,
                    Following: Userinfo.Following,
                    total_Likes: Userinfo.total_likes,
                    id: Userinfo.id,
                    Username: Userinfo.Username,
                    Usertag: Userinfo.Usertag,
                }
            )))
        }
        else {
            fetchSingleUserDetails()
            fetchSingleUserTweets()
        }
    }, []);
    return (
        <div className='w-full h-[120vh]'>
            <div className='banner bg-blue-500 h-[30%] w-full'></div>
            <div className='main bg-black'>
                <div className='bg-blue-500 w-[125px] h-[125px] border-[1px] rounded-full relative top-[-55px]'>
                    <Image src={SingleUserProfile.Image} alt='profile' width={75} height={75} />
                </div>
                <div>
                    <p>{SingleUserProfile.Username}</p>
                    <p className='text-blue-500'>@{SingleUserProfile.Usertag}</p>
                </div>
                <p>
                    {/* make bio schema too */}
                </p>
                <div className='options flex flex-row justify-between'>
                    <div>Tweets</div>
                    <div>Replies</div>
                    <div>Likes</div>
                </div>
                <div className='w-full'>
                    {/* fetch tweets and show it here */}
                {/* <InfiniteScroll
            dataLength={Comments.length}
            next={fetchComments}
            hasMore={hasMore}
          >
            {Comments.map((e) => {
              return (
                <TweetCard
                  Key={e._id}
                  text={e.Text}
                  Usertag={e.postedBy.Usertag}
                  authorPic={e.postedBy.Image}
                  Username={e.postedBy.Username}
                  Images={e.image}
                  imageCount={e.imageAmount}
                  type={"c"}
                  Likes={e.Likes}
                  CommentsNo={e.Comments}
                />
              );
            })}
          </InfiniteScroll> */}
                </div>
            </div>
        </div>
    )
}

export default page