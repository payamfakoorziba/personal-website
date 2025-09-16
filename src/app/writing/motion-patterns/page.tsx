import { Metadata } from "next";
import { ReportView } from "../report-view";
import Article from "./article.mdx";

export const metadata: Metadata = {
  title: "Motion Patterns",
  description: "A collection of practical Motion techniques for modern UIs",
};

const MotionPatternsPage = () => {
  return (
    <>
      <ReportView slug="motion-patterns" />
      <Article />
    </>
  );
};

export default MotionPatternsPage;
