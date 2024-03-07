'use client'
import TweetInput from "@/components/Tweet/TweetInput"
import { useRouter } from "next/navigation";
import { useState,useEffect,useContext } from "react";
import AppContext from "@/context/AppContext";
import fetchUserDetails from "@/functions/FetchRequest/fetchUserDetails";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner2 from "@/components/utils/Spinner2";
import Tweet from "@/components/cards/Tweet";
function Page() {
  const router = useRouter();
  const context = useContext(AppContext);
  const [loading, setloading] = useState(true);
  const [skip, setskip] = useState(0);
  const limit=7;
  const [hasMore, sethasMore] = useState(true);
  const { AllTweets, setAllTweets } = context;
  const fetchTweets=async()=>{
    try {
      const request=  await  fetch(`/api/get/getAllTweet?limit=${limit}&skip=${skip}`,{
        method:"GET",
      })
      const response=await request.json();
      if(response.success&&response.data){
        setskip(e=>e+7);
        setAllTweets(e=>[...e,...response.data])
        sethasMore(true)
      }
      else{
        setloading(false)
        sethasMore(false)
      }
    } catch (error) {
      sethasMore(false)
      console.log(error)
    }
  }
  useEffect(() => {
    console.log('component render')
  }, []);
  return (
   <div className="w-full pl-10">
    <h1 className=" font-bold text-xl mt-10">Home</h1>
        <TweetInput/>
        {
          AllTweets.length===0?<div className="w-full h-[100px] flex flex-row justify-center items-center"><Spinner2/></div>:
          <InfiniteScroll dataLength={AllTweets.length} endMessage={"No more tweets"} hasMore={hasMore}>
                {
                  AllTweets.map((e)=>{
                    return  <Tweet key={e._id} text={e.Text} Usertag={e.postedBy.Usertag} authorPic={e.postedBy.Image} Username={e.postedBy.Username} Images={e.image} imageCount={e.imageAmount}/>
                  })
                }
          </InfiniteScroll>
        }
   </div>
  )
}
export default Page