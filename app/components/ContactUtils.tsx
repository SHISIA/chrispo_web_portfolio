// contactUtils.ts
   const handleWhatsAppClick = () => {
    const phoneNumber = "+254718099447"; // Replace with your WhatsApp number in international format, e.g., "1234567890"
    const message = "Hello Chris! I'm interested in discussing a project. I'm from your website."; // Customize your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  
  export default handleWhatsAppClick;
  