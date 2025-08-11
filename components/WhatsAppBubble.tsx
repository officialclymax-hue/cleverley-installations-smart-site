export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/447735092918"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed", right: 18, bottom: 18, zIndex: 9999,
        background: "#25D366", color: "white", padding: "14px 16px",
        borderRadius: "999px", boxShadow: "0 6px 18px rgba(0,0,0,0.12)"
      }}
      aria-label="Chat on WhatsApp"
    >
      <strong style={{marginRight:8}}>WhatsApp</strong> 💬
    </a>
  );
}
