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
        Like_list:[]
    });
    return (
      <AppContext.Provider value={{AuthPayload,setAuthPayload,Userinfo, setUserinfo}}>
        {children}
      </AppContext.Provider>
    );
  };
export default AppState