import Container from "@/components/layout/container";

const WritingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="py-32 font-sans">
      <Container
      // className="prose prose-h1:text-xl prose-h1:font-semibold prose-h2:text-lg prose-h2:font-semibold text-foreground"
      >
        {children}
      </Container>
    </main>
  );
};

export default WritingLayout;
