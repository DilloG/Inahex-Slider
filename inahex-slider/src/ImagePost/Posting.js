import React from 'react'
import ReactDOM from "react-dom";
import ReactPlayer from 'react-player'
// import { Gallery, GalleryImage } from "react-gesture-gallery";

const Posting = (props) => {

  if(props.type == "image"){
    return(
      <img src={props.src}
      style={{width: "100%",
      height: "100%",
      objectFit: "contain"}}/>
    )
  }
  else{
    return(
      <ReactPlayer url={props.src} controls="true" muted/>
    )
  }
}
export default Posting;
