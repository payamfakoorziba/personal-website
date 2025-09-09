import KitchenTimer from "@/components/craft/kitchen-timer";
import Container from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import CraftNavigation from "@/components/craft/craft-navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const KitchenTimerPage = () => {
  return (
    <main className="font-sans h-screen">
      <Container className="py-24">
        <Link
          href="/"
          className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors duration-300 dark:bg-neutral-800 flex items-center gap-2 w-fit mb-12"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <h1 className="text-xl font-semibold mb-1">Kitchen Timer</h1>
        <h2 className="text-muted-foreground">
          A kitchen timer component built with svg
        </h2>

        <Card className="mt-8 min-h-96 p-6 flex items-center justify-center">
          <KitchenTimer />
        </Card>

        <CraftNavigation className="mt-12" />
      </Container>
    </main>
  );
};

export default KitchenTimerPage;
