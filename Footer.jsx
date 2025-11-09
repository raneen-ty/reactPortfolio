import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { lang } = useLanguage();

  return (
    <footer style={{
      padding: "40px 20px",
      backgroundColor: "#0d0d0d",
      color: "#ffffff",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      borderTop: "2px solid #ff1e1e",
      direction: lang === "ar" ? "rtl" : "ltr"
    }}>
      <p>
        {lang === "en"
          ? "© 2025 Raneen Thaer. All rights reserved."
          : "© 2025 رنين ثائر. جميع الحقوق محفوظة."}
      </p>
      <p style={{ color: "#ff1e1e" }}>
        {lang === "en"
          ? "Designed with ❤️ using React"
          : "صمّم بحب ❤️ باستخدام React"}
      </p>
    </footer>
  );
}

export default Footer;



