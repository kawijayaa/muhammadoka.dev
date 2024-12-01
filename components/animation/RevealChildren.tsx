import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { useRef } from "react";

interface RevealChildrenProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
}

const RevealChildren = ({ children, variants, className }: RevealChildrenProps) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealChildren;
