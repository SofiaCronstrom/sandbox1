import React from "react";
import { motion } from "framer-motion";

const Box = ({ ref, point }) => {
  return (
    <motion.div
      ref={ref}
      className="box1"
      animate={{ x: point.x, y: point.y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};

export default Box;
