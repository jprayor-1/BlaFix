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
        <div className="relative h-screen w-full overflow-hidden">
        <video 
            ref={videoRef}
            controls
            autoPlay
            muted
            className="inset-0 w-fill h-full object-cover"
        >
        <source src="/Comecial.mp4" type="video/mp4"/>
        </video>
        </div>
        );
}

export default Hero