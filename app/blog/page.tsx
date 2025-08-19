import { Container } from "@/components/container";
import Link from "next/link";

const BlogPage = () => {
  return (
    <Container>
      <section className="my-10">
        <p>
          I&apos;m working on it rn as you&apos;re seeing this
          <br />
          <Link href="/blog/mdx-page" className="hover:underline">
            MDX Page
          </Link>
        </p>
      </section>
    </Container>
  );
};

export default BlogPage;
