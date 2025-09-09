"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";

interface VideoHoverCardProps {
  thumbnail: string;
  video: string;
  alt: string;
  className?: string;
}

const VideoHoverCard = ({
  thumbnail,
  video,
  alt,
  className,
}: VideoHoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from beginning
      try {
        await videoRef.current.play();
      } catch (error) {
        // Ignore play() errors (usually due to browser autoplay policies)
        console.log("Video play interrupted:", error);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail Image */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isHovered ? "opacity-0" : "opacity-100"
        )}
      >
        <Image src={thumbnail} alt={alt} fill className="object-cover" />
      </div>

      {/* Video */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoHoverCard;
