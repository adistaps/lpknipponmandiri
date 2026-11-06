'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/site";

// ── Data konten — edit langsung di sini ──────────────────────────────────────
const ROADMAP = [
    {
        title: "Pendaftaran & Seleksi Berkas",
        description: "Daftar dan kirim berkas awal. Kami bantu cek kelayakanmu: usia, pendidikan, dan dokumen dasar.",
    },
    {
        title: "Pelatihan Bahasa Jepang",
        description: "Belajar bahasa Jepang dasar sampai siap ujian, dengan pendampingan mentor berpengalaman.",
    },
    {
        title: "Ujian Sertifikasi Bahasa JFT & SSW",
        description: "Ikuti ujian bahasa (JFT-Basic atau JLPT N4) dan ujian keahlian sesuai sektor pilihanmu.",
    },
    {
        title: "Wawancara Kerja dengan Perusahaan Jepang",
        description: "Wawancara (mensetsu) dengan perusahaan Jepang, umumnya dilakukan online.",
    },
    {
        title: "Pengurusan Visa Kerja & Keberangkatan",
        description: "Pengurusan COE, visa kerja, dan persiapan akhir sampai kamu berangkat.",
    },
];

// Koordinat titik pada kanvas desktop (viewBox 1000 x 560)
const VB_W = 1000;
const VB_H = 560;
const POINTS = [
    { x: 100, y: 430 },
    { x: 300, y: 345 },
    { x: 500, y: 260 },
    { x: 700, y: 175 },
    { x: 900, y: 90 },
];

// Kurva halus (S-curve) yang melewati semua titik
function buildPath() {
    const start = { x: 0, y: 470 };
    const end = { x: VB_W, y: 55 };
    const all = [start, ...POINTS, end];
    let d = `M ${all[0].x} ${all[0].y}`;
    for (let i = 1; i < all.length; i++) {
        const p0 = all[i - 1];
        const p1 = all[i];
        const mx = (p0.x + p1.x) / 2;
        d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
}
const CURVE = buildPath();
// ─────────────────────────────────────────────────────────────────────────────

export default function TripFlow() {
    const handleConsultation = () => {
        window.open(waLink(WA_DEFAULT_MESSAGE), "_blank");
    };

    const Heading = (
        <div className="max-w-md">

            <ScrollReveal direction="up" delay={0.1}>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900">
                    Proses jelas,<br />
                    pendampingan penuh
                </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500">
                    Roadmap dari awal hingga berangkat. Setiap tahap kami dampingi agar
                    prosesmu aman, transparan, dan tenang.
                </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
                <button
                    onClick={handleConsultation}
                    className="mt-6 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600 cursor-pointer"
                >
                    Mulai Konsultasi via WhatsApp
                </button>
            </ScrollReveal>
        </div>
    );

    return (
        <section
            id="alur"
            className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-24 font-sans select-none"
        >
            {/* Lingkaran dekoratif latar */}
            <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-50 md:-right-10 md:top-0 md:h-[28rem] md:w-[28rem]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* ───────────── MOBILE & TABLET: timeline vertikal ───────────── */}
                <div className="md:hidden">
                    {Heading}

                    <div className="relative mt-12 pl-10">
                        {/* garis vertikal */}
                        <div
                            className="absolute"
                            style={{
                                left: 15,
                                top: 8,
                                bottom: 8,
                                width: 3,
                                borderRadius: 999,
                                background: "linear-gradient(to bottom, #fdba74, #f97316)",
                            }}
                        />

                        <div className="space-y-10">
                            {ROADMAP.map((step, i) => (
                                <ScrollReveal key={i} direction="up" delay={0.08 * i}>
                                    <div className="relative">
                                        {/* titik */}
                                        <span className="absolute -left-10 top-1 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-orange-500 bg-white shadow-md">
                                            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                                        </span>

                                        {/* angka samar */}
                                        <span className="pointer-events-none absolute -top-3 right-0 text-7xl font-extrabold leading-none text-slate-100">
                                            {i + 1}
                                        </span>

                                        <div className="relative pr-14">
                                            <h3 className="text-base font-bold leading-snug text-slate-900">
                                                {step.title}
                                            </h3>
                                            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ───────────── DESKTOP: kurva menanjak ───────────── */}
                <div
                    className="relative hidden md:block"
                    style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
                >
                    {/* Heading di kiri atas */}
                    <div className="absolute left-0 top-0 z-20">{Heading}</div>

                    {/* Kurva */}
                    <svg
                        className="pointer-events-none"
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "visible",
                        }}
                        viewBox={`0 0 ${VB_W} ${VB_H}`}
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d={CURVE}
                            fill="none"
                            stroke="rgba(249,115,22,0.18)"
                            strokeWidth={14}
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            transform="translate(0 10)"
                        />
                        <path
                            d={CURVE}
                            fill="none"
                            stroke="#f97316"
                            strokeWidth={3.5}
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* Titik + konten tiap tahap */}
                    {ROADMAP.map((step, i) => {
                        const p = POINTS[i];
                        const left = (p.x / VB_W) * 100;
                        const top = (p.y / VB_H) * 100;
                        return (
                            <div
                                key={i}
                                className="absolute"
                                style={{ left: `${left}%`, top: `${top}%` }}
                            >
                                {/* titik di atas kurva */}
                                <span className="absolute -left-3 -top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-orange-500 bg-white shadow-md" />

                                <ScrollReveal direction="up" delay={0.12 * i}>
                                    <div className="relative -ml-3 mt-6 w-[15rem] lg:w-[17rem]">
                                        {/* angka besar samar */}
                                        <span className="pointer-events-none absolute -top-4 left-24 z-0 text-[7rem] lg:text-[9rem] font-extrabold leading-none text-slate-100">
                                            {i + 1}
                                        </span>
                                        <div className="relative z-10 max-w-[13.5rem] lg:max-w-[15rem]">
                                            <h3 className="text-sm lg:text-base font-bold leading-snug text-slate-900">
                                                {step.title}
                                            </h3>
                                            <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-500">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}