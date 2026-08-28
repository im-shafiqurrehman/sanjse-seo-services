import React from 'react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '923376248458',
}) => {
  const handleOpenWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank', 'noopener,noreferrer');
  };

  const WhatsAppIcon = () => (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.1.55 4.15 1.6 5.96L.1 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.44ZM12.09 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.88 9.88 0 0 1-1.52-5.28C2.2 6.43 6.63 2 12.08 2c2.64 0 5.12 1.03 6.98 2.9a9.87 9.87 0 0 1 2.9 7c0 5.45-4.43 9.9-9.87 9.9Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden">
      <button
        id="floating-whatsapp-btn"
        onClick={handleOpenWhatsApp}
        className="whatsapp-bounce relative flex items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#25D366] p-3.5 text-white shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Open WhatsApp"
        title="Open WhatsApp"
      >
        <WhatsAppIcon />
      </button>
    </div>
  );
};

