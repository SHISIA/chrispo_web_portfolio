import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon from react-icons
import handleWhatsAppClick from "./ContactUtils";

 const ContactSection: React.FC = () => {
//    const handleWhatsAppClick = () => {
//     const phoneNumber = "+254718099447"; // Replace with your WhatsApp number in international format, e.g., "1234567890"
//     const message = "Hello Chris! I'm interested in discussing a project. I'm from your website."; // Customize your message
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   // contactUtils.ts
// export const handleWhatsAppClick = (phoneNumber: string, message: string) => {
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   window.open(whatsappUrl, "_blank");
// };


  return (
    <div>
      
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center gap-2 w-40 h-12 mt-4 bg-white border-white text-black border-2 rounded-lg hover:bg-slate-700 hover:text-white transition duration-300"
      >
        <FaWhatsapp className="text-green-500 text-xl" /> {/* WhatsApp icon with color and size */}
        Let&apos;s Talk
      </button>
    </div>
  );
};

export default ContactSection;
