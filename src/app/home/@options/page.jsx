'use client'
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Link from "next/link";
import { useState } from "react";
const Page = () => {
  const changeActiveTab=(currentId)=>{
    // if(currentId!==1){
    //   changePreviousTab(1)
    //   const element_id= currentId+"opt";
    //   const element_to_change= window.document.getElementById(element_id);
    //   element_to_change.classList.add("active")
    // }
    //else{
      const element_id= currentId+"opt";
      const element_to_change= window.document.getElementById(element_id);
      element_to_change.classList.add("active")
    //}
  }
  const changePreviousTab=(currentId)=>{
    const element_id=currentId+"opt";
    const element_to_change= window.document.getElementById(element_id);
    element_to_change.classList.remove("active")
  }
  
  return (
    <div className="w-full h-full flex flex-col p-5 mt-16 gap-3">
      <Link onMouseEnter={()=>{changeActiveTab(1)}} onMouseLeave={()=>{changePreviousTab(1)}} href="#" className="opt active" id="1opt" >
        <HomeIcon sx={{fontSize:35}} /> Home
      </Link>
      <Link onMouseEnter={()=>{changeActiveTab(2)}} onMouseLeave={()=>{changePreviousTab(2)}} className="opt" href="#" id="2opt">
        <BookmarkBorderIcon /> Bookmarks
      </Link>
      <Link onMouseEnter={()=>{changeActiveTab(3)}} onMouseLeave={()=>{changePreviousTab(3)}} className="opt" href="#" id="3opt">
        <PermIdentityIcon /> Profile
      </Link>
      <Link onMouseEnter={()=>{changeActiveTab(4)}} onMouseLeave={()=>{changePreviousTab(4)}} className="opt" href="#" id="4opt">
        <ChatBubbleOutlineIcon /> Direct
      </Link>
    </div>
  );
};
export default Page;
