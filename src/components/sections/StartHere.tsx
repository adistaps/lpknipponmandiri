'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { ROUTES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/site";

const CARDS = [
    {
        title: "Pelajari cara bekerja ke Jepang mandiri",
        desc: "Panduan 6 tahap berangkat tanpa perantara.",
        image: "/starthere/1.webp",
        href: ROUTES.caraMandiri,
    },
    {
        title: "Pelajari apa saja pekerjaan yang ada di Jepang",
        desc: "11 sektor resmi Tokutei Ginou beserta tugasnya.",
        image: "/starthere/2.webp",
        href: ROUTES.bidangPekerjaan,
    },
    {
        title: "Baca lebih banyak tentang hasil kerja saya",
        desc: "Blog dan cerita dari pengalaman di Jepang.",
        image: "/starthere/4.webp",
        href: ROUTES.blog,
    },
];

export default function StartHere() {
    const handleBookNow = () => {
        window.open(waLink(WA_DEFAULT_MESSAGE), "_blank");
    };

    return (
        <section id="mulai" className="relative w-full py-16 sm:py-28 font-sans select-none overflow-hidden min-h-[850px] sm:min-h-[950px] flex flex-col justify-between bg-[#272b2e]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/starthere/3.webp"
                    alt="Latar belakang"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/30" />
                <div className="absolute bottom-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-t from-[#272b2e] via-[#272b2e]/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Header Section */}
            <div className="relative z-20 mx-auto max-w-4xl px-4 text-center mt-6 sm:mt-10 flex flex-col items-center">
                <ScrollReveal direction="down" delay={0.1}>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                        Mulai Langkahmu<br className="hidden sm:inline" /> Menuju Jepang
                    </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.25}>
                    <button
                        onClick={handleBookNow}
                        className="mt-6 sm:mt-8 bg-[#FF652F] hover:bg-[#e25420] text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
                    >
                        Konsultasi Sekarang
                    </button>
                </ScrollReveal>
            </div>

            {/* 3 Floating Cards */}
            <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full mb-6 sm:mb-10 mt-12 sm:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                    {CARDS.map((card, i) => (
                        <ScrollReveal key={card.href} direction="up" delay={0.1 + i * 0.15} className="relative h-48 sm:h-60 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
                            <Link href={card.href} className="absolute inset-0 block">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                                    <div className="flex items-end justify-between gap-3">
                                        <div>
                                            <h3 className="text-white font-semibold text-base sm:text-lg leading-snug drop-shadow">
                                                {card.title}
                                            </h3>
                                            <p className="mt-1 text-xs text-white/80">{card.desc}</p>
                                        </div>
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

        </section>
    );
}
