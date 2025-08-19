import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ArrowUpRight } from "lucide-react";

export function LogoLink({
  href,
  logo,
  alt,
  children,
  screenShot,
}: {
  href: string;
  logo: string | StaticImport;
  alt: string;
  children: React.ReactNode;
  screenShot?: string | StaticImport;
}) {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger>
        <Link
          href={href}
          target="_blank"
          className="px-[4.5px] h-6.5 bg-white/10 rounded-md  inline-flex items-center border dark:border-white/10 text-sm"
        >
          <Image className="mr-2 inline-flex w-fit h-4" src={logo} alt={alt} />
          {children}
        </Link>
      </TooltipTrigger>
      {screenShot && (
        <TooltipContent className="w-60 h-40 rounded-md overflow-hidden relative border-none group">
          <Link href={href} target="_blank">
            <Image
              src={screenShot}
              alt={alt}
              fill
              className="object-cover"
              priority
              placeholder="blur"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-foreground/50 transition-all duration-200 flex items-center justify-center backdrop-blur-xs gap-1">
              <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-md text-sm font-medium">
                Visit Website
                <ArrowUpRight className="w-4 h-4" />
              </div>
              {/* </span> */}
            </div>
          </Link>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
