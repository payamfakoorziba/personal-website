import Container from "@/components/layout/container";

export default function TestPage() {
  return (
    <main className="py-20 md:py-32 font-sans">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Test Page</h1>
        <p className="mt-4 text-muted-foreground">This is a test page.</p>
      </Container>
    </main>
  );
}
