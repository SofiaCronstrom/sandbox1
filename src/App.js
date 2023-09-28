import "./styles.css";
import Box from "./components/Box";
import { motion } from "framer-motion";
import * as React from "react";

export default function App() {
  const [rotate, setRotate] = React.useState(false);
  const [move, setMove] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  return (
    <div className="App">
      <motion.div
        className="box"
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
        }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{ rotate: move ? 180 : 0 }}
        transition={{ type: "inertia", velocity: 100 }}
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{ y: hover ? 100 : -20 }}
        transition={{ type: "intertia", duration: 0.5 }}
        onMouseEnter={() => {
          setHover(!hover);
        }}
        onMouseLeave={() => {
          setHover(!hover);
        }}
      ></motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag
        dragConstraints={{ right: 100, left: -100 }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.6, 0.7],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
    </div>
  );
}
