"use client";

import React from "react";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { waLink } from "@/lib/site";

const faqs = [
    {
        question: "Apa itu visa Tokutei Ginou (SSW)?",
        answer: "Tokutei Ginou atau Specified Skilled Worker adalah jalur kerja resmi Pemerintah Jepang untuk mengatasi kekurangan tenaga kerja di berbagai industri. Pemegangnya diakui sebagai pekerja profesional dengan hak dan standar gaji setara pekerja lokal Jepang."
    },
    {
        question: "Apakah saya wajib mendaftar lewat LPK atau perusahaan penyalur?",
        answer: "Tidak wajib. Jalur mandiri (self-processing) tersedia dan sah. LPK Nippon Mandiri hadir sebagai mentor dan pendamping agar proses yang kamu jalani tetap aman, transparan, dan tenang."
    },
    {
        question: "Siapa saja yang bisa mendaftar?",
        answer: "Usia 18 – 35 tahun, pendidikan minimal SMP, lulus medical check-up (MCU), serta memiliki sertifikat bahasa Jepang (JFT) dan sertifikat uji keahlian SSW."
    },
    {
        question: "Bahasa Jepang level berapa yang dibutuhkan?",
        answer: "Kamu perlu lulus JFT-Basic (A2) atau JLPT minimal Level N4. Khusus sektor perawatan lansia (Kaigo), ada tambahan tes bahasa Jepang khusus keperawatan."
    },
    {
        question: "Berapa lama kontrak kerjanya?",
        answer: "Kontrak kerja diperbarui per tahun dan dapat berlanjut hingga 5 tahun, dengan gaji dan hak setara pekerja lokal Jepang."
    },
    {
        question: "Bagaimana cara berkonsultasi?",
        answer: "Hubungi kami lewat WhatsApp, ceritakan latar belakang dan sektor yang kamu minati. Kami bantu cek kelayakan dan jelaskan langkah selanjutnya."
    }
];

export default function FAQ() {
    const handleContact = () => {
        window.open(waLink("Halo Admin LPK Nippon Mandiri 👋, saya punya beberapa pertanyaan seputar program kerja ke Jepang jalur Tokutei Ginou."), "_blank");
    };

    return (
        <section id="faq" className="w-full bg-[#272b2e] py-12 sm:py-24 font-sans text-white select-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-10 md:mb-20">
                    <ScrollReveal direction="up" delay={0.1} className="w-full md:w-1/2">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-lg">
                            Pertanyaan yang Sering Ditanyakan
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2} className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
                        <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-md mb-6">
                            Punya pertanyaan sebelum memulai langkahmu? Temukan informasi seputar jalur Tokutei Ginou, persyaratan, dan pendampingan dari LPK Nippon Mandiri.
                        </p>
                        <button
                            onClick={handleContact}
                            className="w-full sm:w-auto rounded-full border border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
                        >
                            Hubungi Kami
                        </button>
                    </ScrollReveal>
                </div>

                {/* FAQ Grid */}
                <ScrollReveal direction="up" delay={0.25} className="w-full mb-12 md:mb-24">
                    <Accordion type="single" collapsible className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
                            {faqs.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-white/10 px-0"
                                >
                                    <AccordionTrigger className="flex w-full items-center justify-between py-4 sm:py-6 text-left text-sm md:text-base font-medium text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                        <span className="pr-4 leading-snug">
                                            {index + 1}. {item.question}
                                        </span>
                                        <ChevronDown className="h-4 w-4 shrink-0 text-white transition-transform duration-200" />
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed pr-4 sm:pr-8">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </div>
                    </Accordion>
                </ScrollReveal>



            </div>
        </section>
    );
}