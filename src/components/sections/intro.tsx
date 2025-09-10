"use client";

import { GalleryWithToggle } from "@/components/sections/gallery";
import Link from "next/link";

export default function IntroSection() {
  return (
    <>
      <h1 className="font-semibold">Payam Fakoorziba</h1>
      <h2 className="text-muted-foreground">Design Engineer</h2>

      <div className="mt-[60px] flex flex-col gap-5">
        <p>
          I&apos;m a design engineer who loves turning ideas into clear,
          functional, and beautiful digital experiences.
        </p>

        <p>
          Previously, I was a lead frontend developer and designer at{" "}
          <Link
            href="https://story.com"
            className="font-semibold hover:underline"
          >
            Story
          </Link>
          . I also ran a small consulting agency called{" "}
          <Link
            href="https://www.aetherwebdesign.com/"
            className="font-semibold hover:underline"
          >
            Aether
          </Link>
          .
        </p>
        <GalleryWithToggle />
      </div>
    </>
  );
}
