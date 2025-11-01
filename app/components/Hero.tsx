'use client';
import {useRef, useEffect } from "react";

const Hero = () => {
    const videoRef = useRef(null)
    const startTime = 7; // video start time
    useEffect(()=>{
        const video = videoRef.current

        if (!video){
            return
        }
        const handleVideo = () => {
            video.currentTime = startTime
        }

        video.addEventListener("loadedmetadata", handleVideo)
        return () => {
            video.removeEventListener('loadedmetadata', handleVideo)
        }
    },[])
    return (
        <div className="App">
        <video 
            ref={videoRef}
            width="750" 
            height="500"
            controls
            muted
        >
        <source src="/Comecial.mp4" type="video/mp4"/>
        </video>
        </div>
        );
}

export default Hero