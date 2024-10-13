import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const MotionValue = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 1 });
    return animation.stop;
  }, [count, value]);

  return <motion.p>{rounded}</motion.p>;
};

export default MotionValue;
