"use client";

import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const ImageHoverCard = ({
  image,
  alt,
  description,
  className,
}: {
  image: StaticImport | string;
  alt?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden group", className)}>
      <Image
        fill
        src={image}
        alt={alt || description || ""}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute w-full bottom-0 px-2.5 py-2 text-[10px] md:text-xs bg-background/80 backdrop-blur-xs transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageHoverCard;
