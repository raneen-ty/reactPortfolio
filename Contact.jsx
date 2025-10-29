import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d0d0d",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        padding: "60px 20px",
      }}
    >
 
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "1000px",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 0 30px rgba(255,30,30,0.5)"
      }}>


        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 400px",
            backgroundColor: "#1a1a1a",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "25px"
          }}
        >
          <h2 style={{ color: "#ff1e1e", fontSize: "2rem", marginBottom: "20px" }}>Get in Touch</h2>
          <input type="text" placeholder="Your Name" style={{
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            backgroundColor: "#0d0d0d",
            color: "#fff",
            fontSize: "1rem",
            transition: "0.3s",
          }} />
          <input type="email" placeholder="Your Email" style={{
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            backgroundColor: "#0d0d0d",
            color: "#fff",
            fontSize: "1rem",
            transition: "0.3s",
          }} />
          <textarea placeholder="Your Message" rows="5" style={{
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            backgroundColor: "#0d0d0d",
            color: "#fff",
            fontSize: "1rem",
            transition: "0.3s",
          }} />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff1e1e" }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "15px 35px",
              backgroundColor: "#ff1e1e",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
              alignSelf: "flex-start",
              animation: "pulse 2s infinite"
            }}
          >
            Send Message
          </motion.button>
        </motion.div>

  
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 400px",
            background: "linear-gradient(135deg, rgba(255,30,30,0.1), rgba(0,0,0,0.8))",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "25px",
            alignItems: "center"
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px 20px",
            borderRadius: "15px",
            border: "2px solid #ff1e1e",
            backgroundColor: "rgba(26,26,26,0.7)",
            width: "100%",
            justifyContent: "center"
          }}>
            <FaEnvelope color="#ff1e1e" size={28} /> <span>raneenthaer481@gmail.com</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px 20px",
            borderRadius: "15px",
            border: "2px solid #ff1e1e",
            backgroundColor: "rgba(26,26,26,0.7)",
            width: "100%",
            justifyContent: "center"
          }}>
            <FaPhone color="#ff1e1e" size={28} /> <span>+962 781833327</span>
          </div>
        </motion.div>
      </div>

 
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 10px #ff1e1e; }
          50% { box-shadow: 0 0 25px #ff1e1e; }
          100% { box-shadow: 0 0 10px #ff1e1e; }
        }
      `}</style>
    </section>
  );
}

export default Contact;








