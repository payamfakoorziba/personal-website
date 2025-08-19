"use client";

import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ImageHoverCard = ({
  image,
  alt,
  description,
  className,
}: {
  image: StaticImport;
  alt: string;
  description?: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn("relative shadow-md overflow-hidden group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        fill
        placeholder="blur"
        src={image}
        alt={alt}
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-black/40 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.5 : 0,
        }}
      />
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isHovered ? 0 : "100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-full bottom-0 px-3 py-2 text-[10px] sm:text-xs/normal bg-background/80 backdrop-blur-xs"
      >
        <p>{description}</p>
      </motion.div>
    </div>
  );
};

export default ImageHoverCard;
