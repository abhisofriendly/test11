import React from 'react';
import "./Video.css";

const Video =()=>{
    return(
        <div className="video">
            {/* <video className="video__player" loop src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video> */}
            <img src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"/>
        </div>
    )
}

export default Video;