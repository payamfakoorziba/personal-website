import { cn } from "@/lib/utils";
import Link from "next/link";

export default function WritingSection() {
  return (
    <div className="mt-[60px]">
      <h3 className="font-semibold">Writing</h3>
      <div className="flex flex-col gap-8 mt-8">
        {[
          {
            title: "5 essential Motion patterns you should know",
            description:
              "A collection of practical Motion techniques for modern UIs",
            link: "/writing/motion-patterns",
          },
          // {
          //   title: "File uploading with Cloudflare R2",
          //   description: "How to implement file uploading with pre-signed urls",
          //   link: "#",
          //   disabled: true,
          // },
          // {
          //   title: "Fun with wavesurfer.js",
          //   description:
          //     "How to use wavesurfer.js to create a simple audio player",
          //   link: "#",
          //   disabled: true,
          // },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={cn("relative group")}
          >
            <span
              className={cn(
                "absolute -inset-4 bg-neutral-500 opacity-0 group-hover:opacity-5 scale-95 origin-center group-hover:scale-100 transition-all rounded-lg"
              )}
            />
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
