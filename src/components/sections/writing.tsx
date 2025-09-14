import { cn } from "@/lib/utils";
import redis from "@/lib/redis";
import Link from "next/link";

export default async function WritingSection() {
  const views =
    (await redis.get<number>(["writing", "motion-patterns"].join(":"))) ?? 0;
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
            <span className="text-muted-foreground text-xs mt-2.5 inline-block">
              {views} view{views === 1 ? "" : "s"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
