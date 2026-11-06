import type { Metadata } from "next"
import Link from "next/link"
import { ROUTES } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog",
  description: "Cerita dan hasil kerja dari pengalaman bekerja di Jepang. Segera hadir.",
  alternates: { canonical: ROUTES.blog },
}

export default function BlogPage() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center bg-cover bg-center bg-no-repeat px-5 text-center text-white"
      style={{ backgroundImage: "url('/bg2.webp')" }}
    >
      <Link
        href="/"
        className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:text-sm"
      >
        LPK Nippon Mandiri
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center pb-24">
        <h1 className="text-5xl font-medium tracking-tight sm:text-7xl">Segera hadir.</h1>
        <p className="mt-4 max-w-md text-xs leading-relaxed sm:text-sm">
          Artikel tentang hasil kerja dan pengalaman bekerja di Jepang sedang kami siapkan.
        </p>
        <Link
          href="/"
          className="mt-8 border border-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  )
}