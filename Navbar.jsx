import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.2, color: "#ff1e1e", textShadow: "0 0 15px #ff1e1e" }}
    style={{
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#ff1e1e",
      cursor: "pointer",
      fontFamily: "'Poppins', sans-serif",
    }}
    onClick={() => window.location.reload()}
  >
    RaneenDev
  </motion.div>
);

function Navbar() {
  const { lang, toggleLanguage } = useLanguage();

  const links =
    lang === "en"
      ? ["home", "about", "projects", "contact"]
      : ["الرئيسية", "عنّي", "المشاريع", "تواصل"];

  const linkMap = {
    "الرئيسية": "home",
    "عنّي": "about",
    "المشاريع": "projects",
    "تواصل": "contact",
  };

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
        boxShadow: "0 2px 20px rgba(255,30,30,0.5)",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Logo />

      <div
        style={{
          display: "flex",
          gap: "25px",
          fontWeight: "400",
          marginRight: lang === "ar" ? "0" : "70px",
          marginLeft: lang === "ar" ? "70px" : "0",
          alignItems: "center",
        }}
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={lang === "en" ? link : linkMap[link]}
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer", transition: "0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.textShadow = "0 0 10px #ff1e1e")}
            onMouseLeave={(e) => (e.currentTarget.style.textShadow = "none")}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          style={{
            background: "#ff1e1e",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            padding: "6px 12px",
            cursor: "pointer",
            fontWeight: "600",
            letterSpacing: "0.5px",
            transition: "0.3s",
          }}
        >
          {lang === "en" ? "AR" : "EN"}
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;



