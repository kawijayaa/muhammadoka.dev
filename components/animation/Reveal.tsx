import { motion, useAnimation, useInView } from "framer-motion";
import { Variants, Transition, VariantLabels } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  layout?: boolean;
  initial?: VariantLabels;
  reveal?: VariantLabels;
  transition?: Transition;
  amount?: number | "some" | "all";
  variants: Variants;
  useView?: boolean;
  className?: string;
}

const Reveal = ({ children, layout, initial, reveal, transition, amount, variants, useView, className }: RevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: amount, once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (reveal) {
      if (!useView) animation.start(reveal);
      if (useView && inView) {
        animation.start(reveal);
      }
    }
  }, [useView, animation, inView, reveal]);

  return (
    <motion.div
      ref={ref}
      layout={layout}
      initial={initial}
      animate={animation}
      variants={variants}
      className={className}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
