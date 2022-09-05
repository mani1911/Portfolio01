import React from "react";
import { motion } from "framer-motion";

const AnimatedImage = (props) => {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      inital={{ opacity: 0, x: 100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedImage;
