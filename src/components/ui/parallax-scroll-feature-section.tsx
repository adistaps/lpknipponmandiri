"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export type Sector = {
    name: string
    jp: string
    summary: string
    tasks: string[]
}

// Foto stok Unsplash (urutan sesuai bidang). Bisa diganti lewat prop `images`.
const FALLBACK_SECTOR_IMAGES = [
    "/bidang/pertanian.webp", // Pertanian
    "/bidang/lansia.webp", // Kaigo
    "/bidang/pengolahan.webp", // Pengolahan Makanan
    "/bidang/pelayanan.webp", // Restoran
    "/bidang/konstruksi.webp", // Konstruksi
    "/bidang/kapal.webp", // Galangan Kapal
    "/bidang/manufaktur.webp", // Manufaktur
    "/bidang/kebersihan.webp", // Pembersihan Gedung
    "/bidang/akomodasi.webp", // Akomodasi
    "/bidang/otomotif.webp", // Otomotif
    "/bidang/penerbang.webp", // Penerbangan
]

// Deteksi layar kecil agar jarak gerak foto tidak terlalu jauh di ponsel
function useIsMobile(breakpoint = 768) {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
        const update = () => setMobile(mq.matches)
        update()
        mq.addEventListener("change", update)
        return () => mq.removeEventListener("change", update)
    }, [breakpoint])
    return mobile
}

/* ─────────────────── Satu section per bidang ─────────────────── */
// Hanya foto yang berparallax. Teks diam supaya rapi dan tidak saling menimpa.
function SectorSection({
    sector,
    index,
    image,
    isMobile,
}: {
    sector: Sector
    index: number
    image: string
    isMobile: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const reverse = index % 2 === 1
    const k = isMobile ? 0.5 : 1

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Muncul (reveal) di awal, lalu bergeser pelan selama section melintas
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.35],
        [
            reverse ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
            "inset(0 0% 0 0%)",
        ]
    )
    const y = useTransform(scrollYProgress, [0, 1], [60 * k, -60 * k])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])

    return (
        <div
            ref={ref}
            className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 py-10 sm:px-8 md:gap-16 md:py-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
        >
            {/* Foto */}
            <motion.div
                style={{ opacity, clipPath, y }}
                className="relative aspect-[4/5] w-full max-w-xs shrink-0 overflow-hidden rounded-3xl bg-slate-100 sm:max-w-sm md:w-1/2 md:max-w-none"
            >
                <motion.div style={{ scale }} className="absolute inset-0">
                    <Image
                        src={image}
                        alt={sector.name}
                        fill
                        sizes="(min-width: 768px) 600px, 90vw"
                        className="object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Teks (tanpa parallax, tanpa angka) */}
            <div className="w-full md:w-1/2">
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-[11px] font-bold text-orange-700">
                    {sector.jp}
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    {sector.name}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {sector.summary}
                </p>

                <ul className="mt-6 space-y-3">
                    {sector.tasks.map((t) => (
                        <li
                            key={t}
                            className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base"
                        >
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <span>{t}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

/* ───────────────────────── Daftar section ───────────────────────── */
export function ParallaxScrollFeatureSection({
    sectors,
    images = FALLBACK_SECTOR_IMAGES,
    heading = "Pilih Bidangmu",
}: {
    sectors: Sector[]
    /** Daftar URL foto, urutan sama dengan `sectors`. */
    images?: string[]
    heading?: string
}) {
    const isMobile = useIsMobile()

    return (
        <div className="w-full overflow-x-clip">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-4 pt-4 text-center sm:px-8">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    {heading}
                </h2>
            </div>

            {sectors.map((sector, i) => (
                <SectorSection
                    key={sector.name}
                    sector={sector}
                    index={i}
                    image={images[i % images.length]}
                    isMobile={isMobile}
                />
            ))}
        </div>
    )
}