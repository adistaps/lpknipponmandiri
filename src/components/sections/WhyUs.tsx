'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Wallet, PiggyBank, BriefcaseBusiness } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const CARDS = [
    {
        number: "01/",
        title: "Kemandirian\nFinansial yang Utuh",
        description: "Gaji dan hak setara pekerja lokal Jepang membuka jalan bagi kamu untuk mandiri secara finansial dan menopang keluarga.",
        icon: Wallet,
        isShortOnDesktop: true,
    },
    {
        number: "02/",
        title: "Tabungan Masa\nDepan yang Nyata",
        description: "Kontrak kerja per tahun hingga 5 tahun memberi ruang untuk menabung dan merencanakan masa depan dengan lebih terarah.",
        icon: PiggyBank,
        isShortOnDesktop: false,
    },
    {
        number: "03/",
        title: "Karier Gemilang\nJalur Resmi",
        description: "Visa Tokutei Ginou adalah jalur resmi pemerintah Jepang, dengan kesempatan karier dan pengalaman kerja internasional.",
        icon: BriefcaseBusiness,
        isShortOnDesktop: false,
    },
];

export default function WhyUs() {
    const [activeMobileSlide, setActiveMobileSlide] = useState(0);

    const handleScrollMobile = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollPosition = container.scrollLeft;
        const width = container.clientWidth;
        if (width > 0) {
            const index = Math.round(scrollPosition / width);
            setActiveMobileSlide(index);
        }
    };

    const scrollToSlide = (index: number) => {
        const container = document.getElementById('whyus-scroll-container');
        if (container) {
            container.scrollTo({
                left: index * container.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="keunggulan" className="relative w-full py-16 sm:py-24 lg:py-28 font-sans select-none overflow-hidden min-h-[700px] bg-[#272b2e]">

            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg1.webp"
                    alt="Latar belakang"
                    fill
                    className="object-cover object-center opacity-100"
                />
                <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-[#272b2e] to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Header Section */}
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="text-center max-w-3xl mb-12 sm:mb-20 mt-2 sm:mt-6">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
                            Mengapa Memilih Kami
                        </h2>
                        <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed px-2 sm:px-6 font-medium">
                            Pengalamanmu adalah aset. Biarkan LPK Nippon Mandiri mendampingimu mengubah kerja keras di Indonesia menjadi langkah pasti menuju karier di Jepang, tanpa ribet dan tanpa bingung informasi.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Cards Container */}
                <div
                    id="whyus-scroll-container"
                    onScroll={handleScrollMobile}
                    className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full max-w-6xl items-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {CARDS.map((card, idx) => {
                        const IconComponent = card.icon;
                        return (
                            <ScrollReveal key={idx} direction="up" delay={0.15 * idx} className="shrink-0 w-[85vw] md:w-auto snap-center">
                                <div
                                    className={`bg-[#1f2326] border border-white/10 rounded-[2rem] p-7 sm:p-9 lg:p-10 shadow-2xl flex flex-col justify-start transition-all duration-300 ${card.isShortOnDesktop
                                        ? "h-[420px] md:h-[460px] lg:h-[480px]"
                                        : "h-[420px] md:h-[500px] lg:h-[530px]"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-8 lg:mb-12">
                                        <span className="text-sm lg:text-base font-semibold text-slate-400">
                                            {card.number}
                                        </span>

                                        <div
                                            className="bg-orange-500 text-white pl-6 pr-4 py-3 sm:pl-8 sm:pr-6 sm:py-4 flex items-center justify-center rounded-r-xl sm:rounded-r-2xl"
                                            style={{
                                                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
                                            }}
                                        >
                                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.5]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 lg:gap-5">
                                        <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-[1.2] tracking-tight whitespace-pre-line">
                                            {card.title}
                                        </h3>

                                        <p className="text-[14px] sm:text-base lg:text-[1.1rem] text-slate-300 leading-relaxed font-normal">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Indikator Dots Putih Khusus Mobile */}
                <div className="flex md:hidden justify-center items-center gap-2 mt-6 z-20">
                    {CARDS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            aria-label={`Slide ${idx + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeMobileSlide === idx
                                ? 'w-8 bg-white shadow-sm'
                                : 'w-2.5 bg-white/60'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}