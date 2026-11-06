'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { ROUTES } from "@/lib/site";

const FEATURED = {
    left: {
        title: "Perawatan Lansia (Kaigo)",
        caption: "Permintaan tenaga kerja asing tertinggi",
        image: "/sector/2.webp",
    },
    top1: {
        title: "Pertanian",
        caption: "Budidaya tanaman & peternakan",
        image: "/sector/1.webp",
    },
    top2: {
        title: "Pengolahan Makanan",
        caption: "Industri makanan & minuman",
        image: "/sector/3.webp",
    },
    bottom: {
        title: "Konstruksi",
        caption: "Infrastruktur dan pembangunan gedung",
        image: "/sector/4.webp",
    },
};

export default function Sectors() {
    return (
        <section id="sektor" className="w-full bg-[#272b2e] py-6 sm:py-16 font-sans select-none">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10 px-1">
                    <ScrollReveal direction="up" delay={0.1}>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                            Sektor Pekerjaan<br className="hidden sm:block" /> Tokutei Ginou
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <Link
                            href={ROUTES.bidangPekerjaan}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity w-fit"
                        >
                            Lihat semua 11 sektor
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-12 gap-2 sm:gap-5 items-stretch">

                    {/* KARTU KIRI */}
                    <ScrollReveal direction="right" delay={0.1} className="col-span-5 relative min-h-[260px] sm:min-h-[400px] lg:min-h-[540px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-white/10 pointer-events-none">
                        <Image
                            src={FEATURED.left.image}
                            alt={FEATURED.left.title}
                            fill
                            sizes="(max-width: 1024px) 40vw, 40vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-7">
                            <h3 className="text-sm sm:text-3xl font-bold text-white tracking-tight leading-tight">
                                {FEATURED.left.title}
                            </h3>
                            <p className="text-[10px] sm:text-sm text-slate-300 font-normal mt-0.5 sm:mt-1">
                                {FEATURED.left.caption}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* KOLOM KANAN */}
                    <div className="col-span-7 flex flex-col gap-2 sm:gap-5">

                        <div className="grid grid-cols-2 gap-2 sm:gap-5">
                            {[FEATURED.top1, FEATURED.top2].map((item, i) => (
                                <ScrollReveal key={item.title} direction="up" delay={0.2 + i * 0.1} className="relative h-[125px] sm:h-[255px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-white/10 pointer-events-none">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 30vw, 30vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 inset-x-0 p-2 sm:p-5">
                                        <h3 className="text-xs sm:text-xl font-bold text-white tracking-tight leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[9px] sm:text-xs text-slate-300 font-normal mt-0.5 truncate">
                                            {item.caption}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Baris Bawah */}
                        <ScrollReveal direction="up" delay={0.4} className="relative h-[125px] sm:h-[265px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-white/10 pointer-events-none">
                            <Image
                                src={FEATURED.bottom.image}
                                alt={FEATURED.bottom.title}
                                fill
                                sizes="(max-width: 1024px) 60vw, 60vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-6">
                                <h3 className="text-xs sm:text-2xl font-bold text-white tracking-tight leading-tight">
                                    {FEATURED.bottom.title}
                                </h3>
                                <p className="text-[9px] sm:text-sm text-slate-300 font-normal mt-0.5">
                                    {FEATURED.bottom.caption}
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>

                </div>

            </div>
        </section>
    );
}
