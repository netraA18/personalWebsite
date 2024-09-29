import React from 'react';
import { motion } from "framer-motion";

const AnimatedText = ({ textInput }) => {

  const text = textInput.split(" ");

  return (
    <div className="App">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
        
      ))}
    </div>
  );
};

export default AnimatedText;
