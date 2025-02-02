"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlurInProps {
  word?: string; // Opsional, bisa diganti dengan children
  children?: React.ReactNode; // Mendukung elemen kompleks
  style?: React.CSSProperties;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, children, style, className, variant, duration = 1 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
      )}
      style={style}
    >
      {word || children}
    </motion.h2>
  );
};

export default BlurIn;
