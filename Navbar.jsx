import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.2, color: "#ff1e1e", textShadow: "0 0 15px #ff1e1e" }}
    style={{
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#ff1e1e",
      cursor: "pointer",
      fontFamily: "'Poppins', sans-serif"
    }}
    onClick={() => window.location.reload()}
  >
    RaneenDev
  </motion.div>
);

function Navbar() {
  const links = ["home", "about", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 60px",
        background: "#0d0d0d",
        color: "#fff",
        zIndex: 1000,
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 2px 20px rgba(255,30,30,0.5)"
      }}
    >
      <Logo />


      <div style={{ display: "flex", gap: "25px", fontWeight: "400", marginRight: "70px" }}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link}
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer", transition: "0.3s" }}
            onMouseEnter={e => e.currentTarget.style.textShadow = "0 0 10px #ff1e1e"}
            onMouseLeave={e => e.currentTarget.style.textShadow = "none"}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;

