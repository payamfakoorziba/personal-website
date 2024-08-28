import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { CSPostHogProvider } from "@/providers/postHog-provider";
import PostHogPageView from "@/lib/postHog-page-view";

export const metadata: Metadata = {
  title: {
    template: "%s - Payam Fakoorziba",
    default: "Payam Fakoorziba - Web designer, developer, and entrepreneur",
  },
  description:
    "I’m Payam, a web designer, developer and entrepreneur based in Toronto, Canada. I’m the co-founder and lead web developer of Aether, where we build high-performance websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <CSPostHogProvider>
        <body className={cn(GeistSans.className, "relative")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>{children}</Layout>
          </ThemeProvider>
          <Analytics />
          <PostHogPageView />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
