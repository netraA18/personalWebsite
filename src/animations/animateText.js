import React from 'react';
import { motion } from "framer-motion";

/**
 * AnimatedText
 *
 * This component takes a string as input and breaks it apart into individual words,
 * animating each word to fade in one after another.
 *
 * @param {string} textInput - The string to be animated.
 * @returns {ReactElement} - A div containing the animated words.
 */
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
