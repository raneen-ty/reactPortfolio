import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaReact } from "react-icons/fa";

const skills = [
  { icon: <FaLaptopCode size={30} color="#ff1e1e" />, title: "Web Development", desc: "Building responsive and modern websites using React." },
  { icon: <FaReact size={30} color="#ff1e1e" />, title: "React Enthusiast", desc: "Creating dynamic applications with React and modern JS." },
  { icon: <FaPalette size={30} color="#ff1e1e" />, title: "UI/UX Design", desc: "Designing user-friendly interfaces with bold color schemes." },
];

function About() {
  return (
    <section id="about" style={{
      padding: "80px 20px",
      backgroundColor: "#0d0d0d",
      fontFamily: "'Poppins', sans-serif",
      color: "#ffffff",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "2.8rem", marginBottom: "40px", color: "#ff1e1e" }}>About Me</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto 50px auto", fontSize: "1.2rem", lineHeight: "1.8" }}>
        I am a passionate developer who loves creating visually striking and functional web applications.
        My skills focus on React, modern frontend development, and crafting a smooth user experience.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff1e1e" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "15px",
              padding: "25px",
              border: "2px solid #ff1e1e",
              transition: "0.3s"
            }}
          >
            <div style={{ marginBottom: "15px" }}>{skill.icon}</div>
            <h3 style={{ color: "#ff1e1e", marginBottom: "10px" }}>{skill.title}</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;







