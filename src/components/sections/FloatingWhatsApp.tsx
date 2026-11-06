"use client";

import { useState, useEffect } from "react";

import { waLink, WA_DEFAULT_MESSAGE, SITE_NAME } from "@/lib/site";

const WA_URL = waLink(WA_DEFAULT_MESSAGE);

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 2500);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-6"
      style={{ fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
    >
      <div
        className={`relative max-w-[200px] rounded-2xl rounded-br-sm bg-white px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-neutral-100 text-[12px] leading-snug text-neutral-700 font-medium transition-all duration-300 ${showTooltip ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <span className="font-bold text-[#128c7e]">{SITE_NAME}</span>
        <br />
        Ada yang bisa kami bantu? 😊
        <span className="absolute -bottom-1.5 right-3 w-3 h-3 bg-white border-r border-b border-neutral-100 rotate-45" />
      </div>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat WhatsApp ${SITE_NAME}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:bg-[#1db954] hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[waRingPulse_2s_ease-out_infinite]" />
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 fill-white relative z-10"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

