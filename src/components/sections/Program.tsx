'use client';

import React from "react";
import { Check, BadgeCheck } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/site";

// ── Data konten — edit langsung di sini ──────────────────────────────────────
const BENEFITS = [
    "Kontrak kerja per tahun hingga 5 tahun.",
    "Gaji & hak setara dengan pekerja lokal Jepang.",
    "Kesempatan karier dan pengalaman kerja internasional.",
]

const REQUIREMENTS = [
    "Usia 18 – 35 tahun.",
    "Pendidikan minimal SMP.",
    "Lulus medical / MCU.",
    "Sertifikat bahasa Jepang JFT.",
    "Sertifikat uji keahlian SSW.",
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Program() {
    const handleConsult = () => {
        window.open(waLink(WA_DEFAULT_MESSAGE), "_blank");
    };

    return (
        <section id="program" className="w-full bg-[#272b2e] py-14 sm:py-24 font-sans text-white select-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mb-10 sm:mb-16">
                    <ScrollReveal direction="up" delay={0.1}>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-2xl text-white">
                            Keuntungan &<br /> Persyaratan Peserta
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-slate-300 max-w-sm text-xs sm:text-base leading-relaxed">
                            Program kerja Visa Tokutei Ginou (SSW) untuk kamu yang ingin berkarier di Jepang lewat jalur resmi.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">

                    {/* Keuntungan */}
                    <ScrollReveal direction="up" delay={0.1} className="h-full">
                        <div className="h-full rounded-[2rem] bg-[#1f2326] border border-white/10 text-white p-7 sm:p-10 shadow-xl">
                            <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight">Keuntungan Kerja Visa Tokutei Ginou</h3>
                            <ul className="mt-8 space-y-5">
                                {BENEFITS.map((item) => (
                                    <li key={item} className="flex gap-4">
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500">
                                            <BadgeCheck className="h-4 w-4 text-white" />
                                        </span>
                                        <span className="text-sm sm:text-lg leading-snug text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Persyaratan */}
                    <ScrollReveal direction="up" delay={0.2} className="h-full">
                        <div className="h-full rounded-[2rem] bg-[#1f2326] border border-white/10 p-7 sm:p-10 shadow-sm">
                            <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight text-white">Persyaratan Peserta</h3>
                            <ul className="mt-8 space-y-5">
                                {REQUIREMENTS.map((item) => (
                                    <li key={item} className="flex gap-4">
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                                            <Check className="h-4 w-4 text-white" />
                                        </span>
                                        <span className="text-sm sm:text-lg leading-snug text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={0.3} className="mt-10 sm:mt-14 flex justify-center">
                    <button
                        onClick={handleConsult}
                        className="rounded-xl bg-white px-7 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide text-black transition-transform hover:-translate-y-1 hover:bg-slate-200 shadow-xl cursor-pointer"
                    >
                        Cek Kelayakanmu via WhatsApp
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
}
