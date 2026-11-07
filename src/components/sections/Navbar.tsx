"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ROUTES, SITE_NAME } from "@/lib/site"

const MENU_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Bidang Pekerjaan", href: ROUTES.bidangPekerjaan },
  { label: "Cara Mandiri", href: ROUTES.caraMandiri },
  { label: "Blog", href: ROUTES.blog },
  { label: "Kontak & Lokasi", href: "/#kontak" },
]

// Jarak scroll (px) sebelum navbar berubah mode
const SCROLL_THRESHOLD = 40

// Logo: path & ukuran ditulis sekali, dipakai di navbar dan menu overlay
const GRAY_LOGO_SHADOW =
  "[filter:drop-shadow(0_0_1px_rgba(107,114,128,1))_drop-shadow(0_2px_5px_rgba(107,114,128,0.9))]"

const renderLogo = (shadow = false) => (
  <Image
    src="/logo.webp"
    alt={SITE_NAME}
    width={240}
    height={75}
    priority
    className={`h-10 sm:h-14 w-auto object-contain ${shadow ? GRAY_LOGO_SHADOW : ""}`}
  />
)

export default function Navbar({ tone = "light" }: { tone?: "light" | "dark" } = {}) {
  // tone="light": teks putih (default, untuk halaman gelap/hero)
  // tone="dark" : teks & hamburger gelap, logo diberi bayangan abu-abu (untuk halaman berlatar putih seperti blog)
  const dark = tone === "dark"

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Deteksi scroll: dipakai untuk gradasi navbar dan tautan "Cara Mandiri"
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Tutup menu jika tekan ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Kunci scroll body ketika menu terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      {/* ========================================================================= */}
      {/* TOP NAVBAR — selalu transparan. tone="dark" = teks gelap untuk halaman berlatar putih (blog) */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 inset-x-0 z-40 font-sans transition-colors duration-300 ${dark
          ? "bg-transparent text-neutral-900"
          : scrolled
            ? "bg-transparent text-white"
            : "bg-gradient-to-b from-black/50 to-transparent text-white"
          }`}
      >
        <div className="mx-auto flex h-20 sm:h-24 w-full max-w-[1440px] items-center justify-between px-4 sm:px-8">

          {/* Kiri: Logo + Tautan Cara Mandiri */}
          <div className="flex items-center gap-4 sm:gap-7 min-w-0">
            <Link
              href="/"
              aria-label={SITE_NAME}
              className="flex items-center shrink-0 transition-opacity hover:opacity-85"
            >
              {renderLogo(dark)}
            </Link>

            {/* Hanya tampil di hero; hilang saat discroll */}
            <Link
              href={ROUTES.caraMandiri}
              tabIndex={scrolled ? -1 : 0}
              aria-hidden={scrolled}
              className={`hidden md:flex items-center gap-2.5 min-w-0 text-xs sm:text-sm lg:text-base font-medium hover:underline underline-offset-4 transition-all duration-300 ${dark
                ? "text-neutral-900 decoration-neutral-900/50"
                : "text-white drop-shadow-md decoration-white/60"
                } ${scrolled
                  ? "opacity-0 -translate-x-2 pointer-events-none"
                  : "opacity-100 translate-x-0"
                }`}
            >
              <span className="h-2 w-2 rounded-full bg-red-600 shrink-0" />
              <span className="truncate">Pelajari cara bekerja ke Jepang mandiri</span>
            </Link>
          </div>

          {/* Kanan: Tombol Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu navigasi"
            className={`shrink-0 ml-4 flex items-center gap-2.5 text-sm sm:text-base font-semibold hover:opacity-80 transition-opacity cursor-pointer ${dark ? "text-neutral-900" : "text-white drop-shadow-md"
              }`}
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`block h-[2px] w-6 ${dark ? "bg-neutral-900" : "bg-white"}`} />
              <span className={`block h-[2px] w-6 ${dark ? "bg-neutral-900" : "bg-white"}`} />
            </span>
            <span>Menu</span>
          </button>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* MENU OVERLAY (SIMPLE, RATA KANAN) */}
      {/* ========================================================================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#272b2e] text-white flex flex-col overflow-y-auto animate-in fade-in duration-300 font-sans">

          {/* Bar atas: Logo & Close */}
          <div className="mx-auto flex h-20 sm:h-24 w-full max-w-[1440px] shrink-0 items-center justify-between px-4 sm:px-8">
            <Link
              href="/"
              aria-label={SITE_NAME}
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
            >
              {renderLogo()}
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white hover:opacity-50 transition-opacity cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Daftar menu (rata kanan) */}
          <nav className="mx-auto w-full max-w-[1440px] flex-1 flex flex-col justify-center items-end px-6 sm:px-8 lg:px-16 py-10">
            <ul className="w-full max-w-md flex flex-col">
              {MENU_ITEMS.map((item) => (
                <li key={item.label} className="border-b border-white/15 first:border-t">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline justify-end py-4 sm:py-5 text-right"
                  >
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-white transition-transform duration-300 group-hover:-translate-x-1.5">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      )}
    </>
  )
}