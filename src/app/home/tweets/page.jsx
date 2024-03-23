'use client'
import TweetInput from "@/components/Tweet/TweetInput"
import { useRouter } from "next/navigation";
import { useState,useEffect,useContext } from "react";
import AppContext from "@/context/AppContext";
import fetchUserDetails from "@/functions/FetchRequest/fetchUserDetails";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner2 from "@/components/utils/Spinner2";
import TweetCard from "@/components/cards/Tweet";
function Page() {
  const context = useContext(AppContext);
  const [loading, setloading] = useState(true);
  const [posted, setposted] = useState(false);
  const [NewTweet, setNewTweet] = useState(null);
  const [skip, setskip] = useState(0);
  const limit=7;
  const [hasMore, sethasMore] = useState(true);
  const { AllTweets, setAllTweets,Userinfo } = context;
  const fetchTweets=async()=>{
    try {
      console.log('fetching tweets')
      setloading(true)
      const request=  await  fetch(`/api/get/getAllTweet?limit=${limit}&skip=${skip}`,{
        method:"GET",
      })
      const response=await request.json();
      if(response.success&&response.data){
        if(response.data.length===0){
          sethasMore(false)
        }
        else{
          setskip(e=>e+7);
          setAllTweets(e=>[...e,...response.data])
          setloading(false)
        }
      }
      else{
        setloading(false)
        sethasMore(false)
      }
    } catch (error) {
      sethasMore(false)
      setloading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTweets()
  }, []);
  return (
   <div className="w-full border-white border-r-[1px] border-l-[1px]">
    <h1 className=" font-bold text-xl mt-10 pl-10">Home</h1>
        <TweetInput setposted={setposted} setNewTweet={setNewTweet}/>
        {
          !posted? null : <TweetCard Key={NewTweet._id} text={NewTweet.Text} Usertag={Userinfo.Username} authorPic={Userinfo.Image} Username={Userinfo.Username} Images={NewTweet.image} imageCount={NewTweet.imageAmount} />
        }
        {
          AllTweets.length===0?<div className="w-full h-[100px] flex flex-row justify-center items-center"><Spinner2/></div>:
          <InfiniteScroll dataLength={AllTweets.length} next={fetchTweets} hasMore={hasMore}>
                {
                  AllTweets.map((e)=>{
                    return  <TweetCard Key={e._id} text={e.Text} Usertag={e.postedBy.Usertag} authorPic={e.postedBy.Image} Username={e.postedBy.Username} Images={e.image} imageCount={e.imageAmount}/>
                  })
                }
          </InfiniteScroll>
        }
        {
          loading&&AllTweets.length>0&&hasMore?
        <div className="flex w-full justify-center items-center">
          <Spinner2/>
        </div>
        :<p className="text-md">no more comments</p>
        }
   </div>
  )
}
export default Page