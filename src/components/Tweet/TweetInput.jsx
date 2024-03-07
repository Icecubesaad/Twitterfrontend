import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PollIcon from "@mui/icons-material/Poll";
import Spinner2 from "../utils/Spinner2";
import AppContext from "@/context/AppContext";
import fetchUserDetails from "@/functions/FetchRequest/fetchUserDetails";
const TweetInput = () => {
  const context = useContext(AppContext);
  const { Tweet, setTweet,Userinfo, setUserinfo } = context;
  const [Error, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const [imageCount, setImageCount] = useState(0); // State to track the number of images
  const [ImageGrid, setImageGrid] = useState({
    display: "flex",
  });
  
  useEffect(() => {
    setImageCount(Tweet.ImageClient.length);
  }, [Tweet.ImageClient]);
  function getCookie(cookieName) {
    var cookies = window.document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName + "=") === 0) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null;
  }
  const fetchUser = async (token) => {
    const response = await fetchUserDetails(token);
    if (response.success) {
      setUserinfo({
        Email: response.data.Email,
        Image: response.data.Image,
        Followers: response.data.Followers,
        Following: response.data.Following,
        Like_list: response.data.Like_list,
        id:response.data._id
      });
      setLoading(false);
    } else {
      router.push("/Login");
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      let isValid = true;
      const newImages = Array.from(files)
        .map((file) => {
          if (
            !["image/jpeg", "image/png", "image/jpg"].includes(file.type) ||
            file.size > 10 * 1024 * 1024
          ) {
            isValid = false;
            return null;
          }
          return URL.createObjectURL(file);
        })
        .filter((image) => image !== null);

      if (isValid) {
        setTweet((prevState) => ({
          ...prevState,
          Image: [...prevState.Image, ...files], // Append new files to existing ones
          ImageClient: [...prevState.ImageClient, ...newImages],
        }));
        setError(false);
      } else {
        setError(true);
        setErrorMessage("Invalid file format or size.");
      }
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("Text", Tweet.Text);
    formData.append("Author", Userinfo.id);
    Tweet.Image.forEach((image, index) => {
      formData.append("Image",image)
    });
    try {
      const request = await fetch("/api/post/tweet", {
        method: "POST",
        body: formData,
      });
      const response=await request.json();
      if (response.success) {
        setTweet({
          Text:"",
          ImageClient:[],
          Image:[],
          Author:""
        })        
      } else {
        console.error("Failed to post tweet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    console.log('component mounted')
    const token = getCookie("token");
    if (!token) {
      setLoading(false);
      router.push("/Login");
    } else {
      if(Userinfo.Email===""){
        fetchUser(token);
      }
    }
  }, []);
  return (
    <div className="w-full h-[250px] flex flex-col mt-10 gap-10">
      <div className="w-full flex flex-row gap-4">
        <div className="w-[10%] flex">
          <div className="bg-slate-600 w-[50px] border-black h-[50px] border-[1px] rounded-full flex justify-center items-center mt-5">
            {Loading ? (
              <Spinner2 />
            ) : (
              <Image
                src={Userinfo.Image}
                width={50}
                height={50}
                alt="image"
                className="border-[1px]  border-black rounded-full"
              />
            )}
          </div>
        </div>
        <div className="w-full flex">
          <textarea
            value={Tweet.Text}
            onChange={(e) => setTweet((t) => ({ ...t, Text: e.target.value }))}
            placeholder="What's going on"
            className="w-full h-[auto] text-slate-600 text-lg outline-none placeholder:text-slate-600 bg-black "
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <button onClick={handleImageClick}>
            <InsertPhotoIcon sx={{ fontSize: 30 }} />
          </button>
          <input
            id="imageInput"
            type="file"
            name="Image"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
            className="hidden"
            multiple
          />
          <button>
            <PollIcon sx={{ fontSize: 30 }} />
          </button>
          <button>
            <InsertEmoticonIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
        <div>
          <button
            className="w-auto h-[40px] border-[1px] border-transparent rounded-3xl bg-blue-500 text-white p-4 flex justify-center items-center"
            onClick={handleSubmit}
          >
            Tweet
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-auto">
        {imageCount == 0 ? null : imageCount == 1 ? (
          <div>
            <Image
              src={Tweet.ImageClient[0]}
              width={150}
              height={150}
              alt={`image1`}
              className="border-[1px] border-transparent rounded-3xl"
            />
          </div>
        ) : imageCount === 2 ? (
          <div className="flex flex-row gap-10">
            <Image
              src={Tweet.ImageClient[0]}
              width={180}
              height={180}
              alt={`image1`}
              className="border-[1px] border-transparent rounded-3xl"
            />
            <Image
              src={Tweet.ImageClient[1]}
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
                src={Tweet.ImageClient[0]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
              <Image
                src={Tweet.ImageClient[1]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <Image
                  src={Tweet.ImageClient[2]}
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
                src={Tweet.ImageClient[0]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
              <Image
                src={Tweet.ImageClient[1]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
            </div>
            <div className="flex flex-row gap-5">
              <Image
                src={Tweet.ImageClient[2]}
                width={180}
                height={180}
                className="border-[1px] border-transparent rounded-3xl"
                alt={`image1`}
              />
              <Image
                src={Tweet.ImageClient[3]}
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
  );
};

export default TweetInput;
