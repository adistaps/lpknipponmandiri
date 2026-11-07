'use client';

import React from "react";
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
    return (
        <section id="keunggulan" className="relative w-full py-12 sm:py-24 lg:py-28 font-sans select-none overflow-hidden md:min-h-[700px] bg-[#272b2e]">

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
                    <div className="text-center max-w-3xl mb-8 sm:mb-20 mt-0 sm:mt-6">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-5">
                            Mengapa Memilih Kami
                        </h2>
                        <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed px-2 sm:px-6 font-medium">
                            Pengalamanmu adalah aset. Biarkan LPK Nippon Mandiri mendampingimu mengubah kerja keras di Indonesia menjadi langkah pasti menuju karier di Jepang, tanpa ribet dan tanpa bingung informasi.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Cards Container: vertikal di ponsel, grid 3 kolom di desktop */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl md:items-center">
                    {CARDS.map((card, idx) => {
                        const IconComponent = card.icon;
                        return (
                            <ScrollReveal key={idx} direction="up" delay={0.15 * idx} className="w-full md:w-auto">
                                <div
                                    className={`bg-[#1f2326] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-9 lg:p-10 shadow-2xl flex flex-col justify-start transition-all duration-300 h-auto ${card.isShortOnDesktop
                                        ? "md:h-[460px] lg:h-[480px]"
                                        : "md:h-[500px] lg:h-[530px]"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-5 md:mb-8 lg:mb-12">
                                        <span className="text-sm lg:text-base font-semibold text-slate-400">
                                            {card.number}
                                        </span>

                                        <div
                                            className="bg-orange-500 text-white pl-5 pr-3 py-2.5 sm:pl-8 sm:pr-6 sm:py-4 flex items-center justify-center rounded-r-xl sm:rounded-r-2xl"
                                            style={{
                                                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
                                            }}
                                        >
                                            <IconComponent className="w-5 h-5 sm:w-8 sm:h-8 stroke-[2.5]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5 md:gap-4 lg:gap-5">
                                        <h3 className="text-xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-[1.2] tracking-tight whitespace-pre-line">
                                            {card.title}
                                        </h3>

                                        <p className="text-[13px] sm:text-base lg:text-[1.1rem] text-slate-300 leading-relaxed font-normal">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}