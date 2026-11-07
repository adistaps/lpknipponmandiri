"use client"

import React, { useRef, useState } from "react"
import { Check, ArrowUpRight, Star } from "lucide-react"
import ScrollReveal from "../ui/ScrollReveal"

// ── Data konten Pricing — edit langsung di sini ───────────────────────────────
const PRICING_HEADER = {
  title: "Harga Transparan,\nTanpa Biaya Tersembunyi",
  subtitle:
    "Pilih kelas yang sesuai dengan levelmu sekarang. Semua paket sudah termasuk materi, bimbingan mentor, dan persiapan ujian sertifikasi resmi.",
}

const PACKAGES = [
  {
    id: "dasar",
    highlight: false,
    name: "Kelas Dasar",
    level: "Setara JLPT N5",
    price: "3.500.000",
    duration: "2 Bulan",
    desc: "Cocok untuk kamu yang baru mulai belajar bahasa Jepang dari nol. Fondasi kuat sebelum mengambil ujian sertifikasi.",
    features: [
      "Materi hiragana, katakana & kanji dasar",
      "Percakapan sehari-hari level N5",
      "Kosakata & tata bahasa dasar",
      "Latihan soal ujian JLPT N5",
      "Bimbingan mentor berpengalaman",
      "Akses grup belajar komunitas",
    ],
    cta: "Daftar Kelas Dasar",
    ctaMsg:
      "Halo Admin LPK Nippon Mandiri 👋, saya tertarik mendaftar Kelas Dasar (setara JLPT N5). Boleh info lebih lanjut?",
  },
  {
    id: "lanjutan",
    highlight: true,
    name: "Kelas Lanjutan",
    level: "Untuk JFT-Basic A2",
    price: "3.500.000",
    duration: "2 Bulan",
    desc: "Dirancang khusus untuk mempersiapkan ujian JFT-Basic A2 — syarat wajib visa Tokutei Ginou (SSW) ke Jepang.",
    features: [
      "Semua materi Kelas Dasar +",
      "Fokus materi JFT-Basic A2",
      "Simulasi ujian CBT JFT-Basic",
      "Latihan mendengar & membaca cepat",
      "Tips & strategi ujian dari lulusan Jepang",
      "Sertifikat kelulusan program LPK",
      "Prioritas konsultasi kerja ke Jepang",
    ],
    cta: "Daftar Kelas Lanjutan",
    ctaMsg:
      "Halo Admin LPK Nippon Mandiri 👋, saya tertarik mendaftar Kelas Lanjutan untuk persiapan JFT-Basic A2. Boleh info lebih lanjut?",
  },
]

// ─────────────────────────────────────────────────────────────────────────────

function waLink(msg: string) {
  return `https://wa.me/6281249466910?text=${encodeURIComponent(msg)}`
}

// Ikon WhatsApp (SVG inline, lucide tidak menyediakan ikon brand)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function PricingSection() {
  // Slider kartu khusus ponsel (di bawah md); desktop tetap grid 2 kolom
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    if (max <= 0) return
    setActive(Math.round((el.scrollLeft / max) * (PACKAGES.length - 1)))
  }

  // Urutan tampil di ponsel sama dengan urutan PACKAGES (Kelas Dasar paling kiri)
  const goTo = (index: number) => {
    scrollerRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    })
  }

  return (
    <section
      id="harga"
      className="w-full bg-[#272b2e] py-3 sm:py-4 pb-12 sm:pb-20 font-sans select-none"
    >
      {/* ───────── Banner oranye — hampir selebar layar ───────── */}
      <div className="px-2 sm:px-4">
        <div
          className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] px-5 pt-20 pb-60 sm:px-10 sm:pt-32 sm:pb-80 lg:pt-36 lg:pb-[26rem] text-center"
          style={{
            background:
              "linear-gradient(135deg, #fb923c 0%, #f97316 45%, #ea580c 100%)",
          }}
        >
          {/* Blok dekoratif transparan (kiri & kanan) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
            <div className="absolute -left-10 top-40 h-96 w-44 rounded-3xl bg-white/10" />
            <div className="absolute left-20 top-52 h-80 w-32 rounded-3xl bg-white/10" />
            <div className="absolute left-44 top-64 h-64 w-28 rounded-3xl bg-white/10" />
            <div className="absolute -right-10 top-40 h-96 w-44 rounded-3xl bg-white/10" />
            <div className="absolute right-20 top-52 h-80 w-32 rounded-3xl bg-white/10" />
            <div className="absolute right-44 top-64 h-64 w-28 rounded-3xl bg-white/10" />
          </div>
          {/* Cahaya lembut */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

          <ScrollReveal direction="up" delay={0.1} className="relative z-10">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
              Biaya Program
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white whitespace-pre-line">
              {PRICING_HEADER.title}
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base text-orange-50 leading-relaxed">
              {PRICING_HEADER.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ───────── Kartu sejajar horizontal (menumpuk ke atas banner) ───────── */}
      <div className="relative z-10 mx-auto -mt-52 sm:-mt-64 lg:-mt-80 max-w-5xl px-4 sm:px-6">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 -mx-4 px-4 pt-2 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:snap-none md:overflow-visible md:p-0"
        >
          {PACKAGES.map((pkg, i) => (
            <ScrollReveal
              key={pkg.id}
              direction="up"
              delay={0.1 + i * 0.1}
              className="h-full w-full shrink-0 snap-start max-md:flex max-md:h-auto max-md:self-stretch md:w-auto md:shrink"
            >
              <div
                className={`relative flex h-full flex-col rounded-[1.5rem] sm:rounded-[2rem] bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${pkg.highlight
                  ? "border-2 border-orange-500 shadow-2xl shadow-orange-500/25"
                  : "border border-orange-100 shadow-xl shadow-slate-900/10"
                  }`}
              >
                {/* Level */}
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Star className="h-4 w-4 fill-white" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-orange-500">
                    {pkg.level}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900">
                  {pkg.name}
                </h3>

                {/* Harga */}
                <div className="mt-3 flex items-end gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Rp</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    {pkg.price}
                  </span>
                  <span className="mb-1 text-xs font-semibold text-slate-400">
                    / {pkg.duration}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {pkg.desc}
                </p>

                <div className="my-6 h-px w-full bg-orange-100" />

                {/* Fitur */}
                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-snug text-slate-700">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={waLink(pkg.ctaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 ${pkg.highlight
                    ? "text-white shadow-lg shadow-orange-500/30"
                    : "border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                    }`}
                  style={
                    pkg.highlight
                      ? { background: "linear-gradient(135deg, #fb923c, #ea580c)" }
                      : undefined
                  }
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {pkg.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dots indikator (ponsel saja) */}
        <div className="-mt-2 flex items-center justify-center gap-2 md:hidden" role="tablist" aria-label="Pilih paket">
          {PACKAGES.map((pkg, i) => (
            <button
              key={pkg.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Lihat ${pkg.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-orange-500" : "w-2 bg-white/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}