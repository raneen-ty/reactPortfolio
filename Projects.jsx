import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { lang } = useLanguage();

  const title = lang === "en" ? "Projects" : "المشاريع";
  const projects = lang === "en"
    ? [
        { title: "Portfolio Website", description: "My personal portfolio built with React.", link: "#" },
        { title: "E-commerce App", description: "Online store with React and Firebase.", link: "#" },
        { title: "Task Manager", description: "A productivity app with dark theme.", link: "#" },
        { title: "Blog Platform", description: "A modern blogging platform with React & Node.", link: "#" },
      ]
    : [
        { title: "موقعي الشخصي", description: "موقعي الشخصي تم بناؤه باستخدام React.", link: "#" },
        { title: "تطبيق متجر إلكتروني", description: "متجر إلكتروني باستخدام React و Firebase.", link: "#" },
        { title: "مدير المهام", description: "تطبيق لإدارة المهام مع سمة داكنة.", link: "#" },
        { title: "منصة التدوين", description: "منصة تدوين حديثة باستخدام React و Node.", link: "#" },
      ];

  return (
    <section id="projects" style={{
      padding: "80px 20px",
      backgroundColor: "#0d0d0d",
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      textAlign: "center",
      direction: lang === "ar" ? "rtl" : "ltr"
    }}>
      <h2 style={{ fontSize: "2.8rem", marginBottom: "50px", color: "#ff1e1e" }}>{title}</h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff1e1e" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "15px",
              padding: "25px",
              border: "2px solid #ff1e1e",
              transition: "0.3s",
              textAlign: lang === "ar" ? "right" : "left"
            }}
          >
            <h3 style={{ color: "#ff1e1e", marginBottom: "15px", fontSize: "1.5rem" }}>{project.title}</h3>
            <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>{project.description}</p>
            <a href={project.link} style={{
              padding: "10px 25px",
              backgroundColor: "#ff1e1e",
              color: "#ffffff",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 0 10px #ff1e1e",
              transition: "0.3s",
              display: "inline-block"
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px #ff1e1e"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 10px #ff1e1e"}
            >
              {lang === "en" ? "View Project" : "عرض المشروع"}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;








