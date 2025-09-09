import { craftComponents } from "@/data/craft-components";
import Image from "next/image";
import Link from "next/link";

export default function CraftSection() {
  return (
    <div className="mt-[60px]">
      <h3 className="font-semibold">Craft</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {craftComponents.map((item) => (
          <Link
            href={item.link}
            className="bg-white dark:bg-neutral-900 rounded-[12px] border p-2 flex flex-col gap-2.5"
            key={item.title}
          >
            <div className="w-full aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover select-none"
              />
              <div className="absolute inset-0" />
            </div>
            <div className="px-1">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-muted-foreground text-sm/normal">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
