"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

// ── Data konten — edit langsung di sini ──────────────────────────────────────
const CHECKLIST = [
  ["Paspor Aktif", "Pastikan masa berlaku masih panjang sebelum mengurus visa."],
  ["SKCK", "Surat Keterangan Catatan Kepolisian untuk kelengkapan berkas."],
  ["Medical Check-Up", "Hasil MCU dari klinik rujukan sebagai bukti sehat jasmani dan rohani."],
  ["Sertifikat JFT / JLPT", "Bukti kemampuan bahasa Jepang: JFT-Basic A2 atau JLPT N4."],
  ["Sertifikat Ujian SSW", "Bukti lulus ujian keahlian sesuai sektor pekerjaan pilihanmu."],
  ["CV Bahasa Jepang", "Rirekisho dan shokumukeirekisho untuk melamar ke perusahaan."],
  ["Kontrak Kerja", "Koyou keiyaku dan surat kondisi kerja, dibaca teliti sebelum tanda tangan."],
  ["COE", "Certificate of Eligibility yang diajukan perusahaan ke imigrasi Jepang."],
] as const
// ─────────────────────────────────────────────────────────────────────────────

export default function Checklist() {
    const duplicated = [...CHECKLIST, ...CHECKLIST];

    return (
        <section id="checklist" className="w-full bg-[#272b2e] py-16 sm:py-24 text-white font-sans overflow-hidden select-none">

            {/* Header Section */}
            <ScrollReveal direction="up" delay={0.1} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex flex-col items-center text-center">
                <h2 className="max-w-3xl text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
                    Siapkan Dokumen &<br />
                    Persyaratanmu Sejak Dini
                </h2>
                <p className="mt-4 max-w-xl text-xs sm:text-base text-slate-300 leading-relaxed">
                    Checklist dokumen yang umumnya dibutuhkan untuk berangkat kerja ke Jepang lewat jalur Tokutei Ginou.
                </p>
            </ScrollReveal>

            {/* Marquee Track */}
            <ScrollReveal direction="up" delay={0.25}>
                <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex shrink-0 gap-6 pr-6"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicated.map(([title, desc], index) => (
                            <figure
                                key={`${title}-${index}`}
                                className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-white/10 bg-[#1f2326] p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#23282b] hover:shadow-md"
                            >
                                <div>
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                                        <FileCheck2 className="h-5 w-5" />
                                    </div>
                                    <p className="text-base sm:text-lg font-bold text-white">{title}</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-300">
                                        {desc}
                                    </p>
                                </div>
                            </figure>
                        ))}
                    </motion.div>
                </div>
            </ScrollReveal>

        </section>
    );
}
