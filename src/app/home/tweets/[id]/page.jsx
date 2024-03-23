"use client";
import TweetCard from "@/components/cards/Tweet";
import Spinner2 from "@/components/utils/Spinner2";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const Page = ({ params }) => {
  const [SingleTweet, setSingleTweet] = useState({});
  const [loading, setloading] = useState(true);
  const [Comments, setComments] = useState([]);
  const limit = 10;
  const [skip, setskip] = useState(0);
  const [LoadingComments, setLoadingComments] = useState(true);
  const [hasMore, sethasMore] = useState(true);
  const fetchComments = async () => {
    try {
      if (SingleTweet.totalComments && SingleTweet.totalComments === 0) {
        sethasMore(false)
        return null;
      } else {
        setLoadingComments(true);
        const request = await fetch(
          `/api/get/getComment/${params.id}?limit=${limit}&skip=${skip}`,
          {
            method: "GET",
          }
        );
        const response = await request.json();
        if (response.success) {
          setskip((e) => e + 10);
          setLoadingComments(false);
          setComments((e) => [...e, ...response.data]);
          sethasMore(true)
        } else {
          sethasMore(false)
          setLoadingComments(false);
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSingleTweet = async () => {
    try {
      setloading(true);
      const request = await fetch(`/api/get/getTweet/${params.id}`, {
        method: "GET",
      });
      const response = await request.json();
      console.log(response);
      if (response.success) {
        fetchComments();
        setloading(false);
        setSingleTweet(response.data);
      } else {
        setloading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleTweet();
  }, []);
  return (
    <div className="h-auto w-full flex flex-col justify-center border-white border-r-[1px] border-l-[1px]">
      {loading ? (
        <Spinner2 />
      ) : (
        <TweetCard
          Key={SingleTweet._id}
          text={SingleTweet.Text}
          Usertag={SingleTweet.postedBy.Usertag}
          authorPic={SingleTweet.postedBy.Image}
          Username={SingleTweet.postedBy.Username}
          Images={SingleTweet.image}
          imageCount={SingleTweet.imageAmount}
        />
      )}
      {SingleTweet.totalComments === 0 ? (
        <div className="w-full h-[100px] flex flex-row justify-center items-center">
          <p>No Comments here</p>
        </div>
      ) : LoadingComments ? (
        <div className="w-full h-[100px] flex flex-row justify-center items-center">
          <Spinner2 />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={Comments.length}
          endMessage={"No more Comments"}
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
              />
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};
export default Page;
