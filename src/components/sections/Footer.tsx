"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import { ROUTES, SITE_NAME } from "@/lib/site";

const LINK_GROUPS = [
    {
        title: "General",
        links: [
            { label: "Home", href: "/#hero" },
            { label: "Tentang", href: "/#tentang" },
            { label: "Keunggulan", href: "/#keunggulan" },
            { label: "Checklist", href: "/#checklist" },
        ],
    },
    {
        title: "Panduan",
        links: [
            { label: "Cara Mandiri", href: ROUTES.caraMandiri },
            { label: "Bidang Pekerjaan", href: ROUTES.bidangPekerjaan },
            { label: "Blog", href: ROUTES.blog },
        ],
    },
    {
        title: "Program",
        links: [
            { label: "Persyaratan", href: "/#program" },
            { label: "Alur Program", href: "/#alur" },
            { label: "FAQ", href: "/#faq" },
        ],
    },
];

export default function FooterFull() {
    return (
        <section className="relative w-full bg-white">
            <ScrollReveal direction="up" delay={0.1}>
                <footer className="relative w-full overflow-hidden bg-white text-[#111]">

                    {/* ===================== ATAS: Link ===================== */}
                    <div className="flex flex-col items-center gap-12 px-8 pt-10 max-sm:px-5 max-sm:pt-8 max-sm:gap-6 sm:px-12 sm:pt-12 lg:flex-row lg:items-start lg:justify-between">
                        {/* Kiri: Logo (tengah di ponsel & tablet) */}
                        <Link href="/" aria-label={SITE_NAME} className="mx-auto inline-block w-fit transition-opacity hover:opacity-80 lg:mx-0">
                            <Image
                                src="/logo2.webp"
                                alt={SITE_NAME}
                                width={400}
                                height={200}
                                className="h-14 w-auto object-contain sm:h-18 lg:h-20"
                            />
                        </Link>

                        {/* Kanan: Kolom link */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-10 max-sm:grid-cols-3 max-sm:gap-x-4 max-sm:gap-y-0 sm:grid-cols-3 sm:gap-x-16">
                            {LINK_GROUPS.map((group) => (
                                <div key={group.title} className="flex flex-col lg:items-end lg:text-right">
                                    <span className="mb-5 text-sm font-semibold text-[#111] max-sm:mb-3">{group.title}</span>
                                    <nav className="flex flex-col gap-4 text-sm text-zinc-400 max-sm:gap-2.5 lg:items-end">
                                        {group.links.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="transition-colors hover:text-[#111]"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===================== TEKS BESAR MEMUDAR ===================== */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none mt-10 flex h-[9rem] w-full select-none items-start justify-center overflow-hidden px-8 max-sm:mt-6 max-sm:h-[6rem] max-sm:px-5 sm:h-[13rem] sm:px-12 lg:h-[17rem]"
                    >
                        <span
                            className="block w-full bg-gradient-to-b from-zinc-200 via-zinc-100 to-transparent bg-clip-text text-center font-black uppercase text-transparent"
                            style={{ fontSize: "20vw", lineHeight: 0.85, letterSpacing: "-0.02em" }}
                        >
                            HIKARI
                        </span>
                    </div>

                    {/* ===================== BAWAH: Hak cipta ===================== */}
                    <div className="flex flex-col items-center justify-between gap-3 px-8 pb-6 text-[11px] text-zinc-400 max-sm:gap-1 max-sm:px-5 max-sm:pb-4 sm:px-12 md:flex-row sm:text-xs">
                        <p>
                            © {new Date().getFullYear()} {SITE_NAME}. Seluruh hak cipta dilindungi.
                        </p>
                        <p className="text-center md:text-right">
                            Informasi bersifat umum. Selalu cek sumber resmi untuk aturan terbaru.
                        </p>
                    </div>

                </footer>
            </ScrollReveal>
        </section>
    );
}