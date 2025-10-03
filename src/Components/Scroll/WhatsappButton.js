import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

const WhatsappButton = () => {
  const whatsappNumber = "911234567890"; // <-- replace with your number
  const message = "Hello! I would like to know more about your services."; // default message

  const openWhatsapp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-btn" onClick={openWhatsapp}>
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsappButton;
