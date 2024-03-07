'use client'
import AppContext from "./AppContext";
import React,{useState} from "react";
const AppState = ({ children }) => {
    const [AuthPayload, setAuthPayload] = useState({
        Email:"",
        Password:"",
        Image:"",
        Username:"",
    });
    const [Userinfo, setUserinfo] = useState({
        Email:"",
        Password:"",
        Image:"",
        Username:"",
        Followers:"",
        Following:"",
        id:"",
        Like_list:[]
    });
    const [Tweet, setTweet] = useState({
      Text:"",
      Author:"",  //id
      Image:[],
      ImageClient:[]
    });
    const [AllTweets, setAllTweets] = useState([]);
    return (
      <AppContext.Provider value={{AuthPayload,setAuthPayload,Userinfo, setUserinfo,Tweet,setTweet,AllTweets, setAllTweets}}>
        {children}
      </AppContext.Provider>
    );
  };
export default AppState