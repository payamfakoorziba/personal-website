import AnimatedDropdown from "@/components/craft/animated-dropdown";
import Container from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import CraftNavigation from "@/components/craft/craft-navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const VoiceSelectorPage = () => {
  return (
    <main className="font-sans h-screen">
      <Container className="py-24">
        <Link
          href="/"
          className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors duration-300 dark:bg-neutral-800 flex items-center gap-2 w-fit mb-12"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-1">Animated Dropdown</h1>
          <h2 className="text-muted-foreground">
            A dropdown component that animates when it opens
          </h2>
        </div>

        <Card className="mt-8 min-h-96 p-6">
          <p
            className="gap-1.5 font-semibold text-neutral-800 text-lg md:text-3xl gap-y-1 [&>span]:break-words outline-none"
            contentEditable
            suppressContentEditableWarning={true}
          >
            <span>An epic</span>
            <AnimatedDropdown
              values={[
                "realistic",
                "hyper realistic",
                "impressionistic",
                "abstract",
              ]}
              defaultValue="hyper realistic"
            />
            <span>photo of a</span>
            <AnimatedDropdown
              values={["city", "village", "fortress", "temple"]}
              defaultValue="city"
            />
            <span>at</span>
            <AnimatedDropdown
              values={["sunset", "sunrise", "midnight", "noon"]}
              defaultValue="sunset"
            />
            <span className="whitespace-break-spaces">
              , glowing with warm colors.
            </span>
          </p>
        </Card>

        <CraftNavigation className="mt-12" />
      </Container>
    </main>
  );
};

export default VoiceSelectorPage;
