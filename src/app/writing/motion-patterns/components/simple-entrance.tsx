"use client";

import DemoCard from "@/components/ui/demo-card";
import { motion } from "motion/react";

function SimpleEntranceComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      className="size-20 bg-lime-500 rounded-full"
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    />
  );
}

function SimpleEntrance() {
  return (
    <DemoCard className="grid place-content-center">
      {(resetKey) => <SimpleEntranceComponent key={resetKey} />}
    </DemoCard>
  );
}

export default SimpleEntrance;
