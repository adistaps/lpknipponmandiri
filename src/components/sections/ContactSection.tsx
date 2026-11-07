"use client"

import React, { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, ArrowUpRight, Send } from "lucide-react"
import ScrollReveal from "../ui/ScrollReveal"

// ── Data konten Contact Us — edit langsung di sini ───────────────────────────
const CONTACT = {
  nama: "LPK Hikari Karya Mandiri",
  alamat: "Dsn.Ngelo RT. 012 Rw.003 Ds.Sudungdewo Kec.Kertek Kab.Wonosobo",
  wa: "6281249466910",          // format internasional tanpa +
  waTampil: "+62 812-4946-6910",
  email: "hidayatkhamim@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/Y2JLG7WXzXsFfw5r6",
  mapsKoordinat: { lat: -7.3650331, lng: 109.9400176 },
}

// Foto background section (ganti sesuai file di folder /public)
const BG_IMAGE = "/hero/2.webp"
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [pesan, setPesan] = useState("")

  const embedUrl = `https://maps.google.com/maps?q=${CONTACT.mapsKoordinat.lat},${CONTACT.mapsKoordinat.lng}&hl=id&z=15&output=embed`

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const text =
      `Halo Admin ${CONTACT.nama} 👋,\n\n` +
      `Saya ingin konsultasi mengenai program bekerja ke Jepang jalur Tokutei Ginou.\n\n` +
      `Nama: ${nama.trim()}\n` +
      `Email: ${email.trim()}\n` +
      `Pesan: ${pesan.trim()}\n\n` +
      `Terima kasih.`

    const url = `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const inputClass =
    "w-full rounded-full border border-black/10 bg-[#fafafa] px-5 py-3 text-sm text-[#111] placeholder-black/40 focus:border-black/40 focus:bg-white focus:outline-none transition-colors"

  return (
    <section
      id="kontak"
      className="relative w-full overflow-hidden bg-[#272b2e] py-14 sm:py-24 font-sans text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Kolom Kiri: Get in touch + Maps (tinggi mengikuti form) */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg">
                Get in touch
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/90 drop-shadow-md">
                Kami senang mendengar kabar darimu.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="mt-6 sm:mt-8 flex-1">
              <div className="relative h-[320px] sm:h-[420px] lg:h-full lg:min-h-[420px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#1f2326] shadow-2xl">
                <iframe
                  title="Lokasi Kantor LPK Hikari Karya Mandiri"
                  src={embedUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 block h-full w-full"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Kolom Kanan: Kartu Contact Us */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.25}>
              <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 text-[#111] shadow-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Hubungi Kami
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-black/50">
                  Kami senang mendengar kabar darimu.
                </p>

                {/* Informasi Kontak */}
                <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  <li className="flex items-start gap-3 py-3.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-black/60" />
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-black/40">
                        Alamat
                      </span>
                      {CONTACT.alamat}
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-black/60" />
                    <div className="text-xs sm:text-sm">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-black/40">
                        WhatsApp
                      </span>
                      <a
                        href={`https://wa.me/${CONTACT.wa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                      >
                        {CONTACT.waTampil}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3.5">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-black/60" />
                    <div className="text-xs sm:text-sm min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-black/40">
                        Email
                      </span>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="inline-flex items-center gap-1 break-all hover:opacity-60 transition-opacity"
                      >
                        {CONTACT.email}
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    </div>
                  </li>
                </ul>

                {/* Form → WhatsApp */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="contact-nama" className="mb-1.5 block text-sm font-medium">
                      Nama
                    </label>
                    <input
                      id="contact-nama"
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama lengkap kamu"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Alamat email kamu"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-pesan" className="mb-1.5 block text-sm font-medium">
                      Pesan
                    </label>
                    <textarea
                      id="contact-pesan"
                      required
                      rows={5}
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      placeholder="Tulis pesan kamu di sini"
                      className="w-full resize-none rounded-3xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-[#111] placeholder-black/40 focus:border-black/40 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-3.5 text-sm font-semibold text-white hover:bg-black/80 transition-colors cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim via WhatsApp</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}