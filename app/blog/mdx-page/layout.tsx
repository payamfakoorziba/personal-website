import { Container } from "@/components/container";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <section className="my-10 prose dark:prose-invert">{children}</section>
    </Container>
  );
};

export default Layout;
