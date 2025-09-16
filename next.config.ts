import createMDX from "@next/mdx";
import { rehypePrettyCode } from "rehype-pretty-code";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // images: {
  //   unoptimized: true,
  // },
  // TODO: look into why the styling is not working
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const options = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
