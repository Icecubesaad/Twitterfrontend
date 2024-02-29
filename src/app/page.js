"use client";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import { fetchUserDetails } from "@/functions";
import { useRouter } from "next/navigation";
const Homepage = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const [loading, setloading] = useState(true);
  const { Userinfo, setUserinfo } = context;
  function getCookie(cookieName) {
    // Split the cookie string into an array of individual cookies
    var cookies = window.document.cookie.split(";");
    // Loop through the cookies array
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim(); // Trim any leading/trailing spaces

      // Check if this cookie starts with the provided cookieName
      if (cookie.indexOf(cookieName + "=") === 0) {
        // Return the value of the cookie (substring after the equals sign)
        return cookie.substring(cookieName.length + 1);
      }
    }

    // If the cookie is not found, return null
    return null;
  }
  const fetchUser = async () => {
    const token = getCookie("token");
    console.log('from page',token)
    const response = await fetchUserDetails(token);
    console.log(response)
    if (response.success) {
      setUserinfo({
        Email: response.data.Email,
        Image: response.data.Image,
        Followers: response.data.Followers,
        Following: response.data.Following,
        Like_list: response.data.Like_list,
      });
      setloading(false);
    } else {
      router.push("/Login");
    }
  };
  useEffect(() => {
    if (Userinfo.Email !== "") {
      setloading(false);
    } else {
      fetchUser();
    }
  }, []);
  return loading ? <div>loading</div> : <div>{Userinfo.Email}</div>;
};
export default Homepage;
