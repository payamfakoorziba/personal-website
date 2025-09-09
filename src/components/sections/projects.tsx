import VideoHoverCard from "@/components/ui/video-hover-card";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="mt-[60px]">
      <h3 className="font-semibold">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        <Link
          href="https://www.zinoacademy.com/"
          target="_blank"
          className="bg-white dark:bg-neutral-950 rounded-[12px] border p-2 flex flex-col gap-2.5"
        >
          <div className="w-full aspect-video bg-neutral-200 rounded-lg relative overflow-hidden">
            <VideoHoverCard
              thumbnail="/thumbnails/zino-thumbnail.jpg"
              video="/demos/zino-academy-demo.mp4"
              alt="Zino Academy"
              className="w-full h-full"
            />
          </div>
          <div className="px-1">
            <h4 className="font-semibold">Zino Academy</h4>
            <p className="text-muted-foreground text-sm/normal">
              Building an online math academy for high school and university
              students.
            </p>
          </div>
        </Link>
        <Link
          href="https://recipe-generator-delta.vercel.app/"
          target="_blank"
          className="bg-white dark:bg-neutral-950 rounded-[12px] border p-2 flex flex-col gap-2.5"
        >
          <div className="w-full aspect-video bg-neutral-200 rounded-lg relative overflow-hidden">
            <VideoHoverCard
              thumbnail="/thumbnails/recipe-generator-thumbnail.jpg"
              video="/demos/recipe-generator-demo.mp4"
              alt="Recipe Generator"
              className="w-full h-full"
            />
          </div>
          <div className="px-1">
            <h4 className="font-semibold">Recipe Generator</h4>
            <p className="text-muted-foreground text-sm/normal">
              AI recipe generator app that creates simple recipes for your
              favourite dishes!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
