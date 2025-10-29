import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const texts = ["Full Stack Developer", "React Enthusiast", "Web Designer"];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay(texts[index].slice(0, display.length + 1));
      if (display.length === texts[index].length) {
        setTimeout(() => setIndex((index + 1) % texts.length), 1000);
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [display, index, texts]);

  return (
    <section id="home" style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0d0d0d",
      color: "#ffffff",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      backgroundImage: "linear-gradient(135deg, rgba(255,30,30,0.3), rgba(0,0,0,0.7))"
    }}>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "4rem", marginBottom: "20px", textShadow: "2px 2px 10px #ff1e1e" }}
      >
        Raneen Thaer
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "1.5rem", maxWidth: "600px", marginBottom: "30px", textShadow: "1px 1px 5px #ff1e1e" }}
      >
        {display}
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff1e1e" }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "15px 35px",
          background: "#ff1e1e",
          color: "#ffffff",
          borderRadius: "50px",
          fontWeight: "600",
          textDecoration: "none",
          boxShadow: "0 0 10px #ff1e1e",
          transition: "0.3s"
        }}
      >
        See My Work
      </motion.a>
    </section>
  );
}

export default Hero;


