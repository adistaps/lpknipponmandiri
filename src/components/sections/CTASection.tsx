"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/site"

// ✏️ GANTI FOTO BACKGROUND CTA DI SINI:
const CTA_BG_IMAGE = "/banner.webp" // letakkan foto di folder /public, contoh: "/cta-bg.webp" atau "/images/cta.webp"

export default function CTASection() {
    return (
        <section className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center justify-center overflow-hidden font-sans select-none bg-[#272b2e]">

            {/* Background Image with Dark Blue Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={CTA_BG_IMAGE}
                    alt="LPK Nippon Mandiri"
                    fill
                    sizes="100vw"
                    loading="lazy"
                    className="object-cover object-center"
                />
                {/* Deep Navy/Blue Overlay */}
                <div className="absolute inset-0 bg-[#0A1A60]/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081246]/40 via-[#0A1A60]/50 to-[#081246]/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center flex flex-col items-center">

                {/* Judul Utama Teks Putih Tebal */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl">
                    Pengalamanmu adalah aset.<br />
                    <span className="text-blue-100/90">Jepang panggungmu berikutnya.</span>
                </h2>

                {/* Tombol CTA */}
                <div className="mt-8 sm:mt-10">
                    <a
                        href={waLink(WA_DEFAULT_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#08126A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-[#0c1d8a] hover:scale-105 active:scale-95"
                    >
                        <span>Konsultasi Sekarang</span>
                        <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                    </a>
                </div>

            </div>

        </section>
    )
}