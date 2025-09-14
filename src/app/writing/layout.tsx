import Container from "@/components/layout/container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const WritingLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main className="py-16 md:py-24 font-sans">
      <Container
      // className="prose prose-h1:text-xl prose-h1:font-semibold prose-h2:text-lg prose-h2:font-semibold text-foreground"
      >
        <Link
          href="/"
          className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors duration-300 dark:bg-neutral-800 flex items-center gap-2 w-fit mb-12"
        >
          <ArrowLeft className="size-4" />
        </Link>
        {children}
      </Container>
    </main>
  );
};

export default WritingLayout;
