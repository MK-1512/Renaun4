import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 35,
  duration = 0.7,
  once = true,
  amount = 0.15,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
