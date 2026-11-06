import Image from "next/image"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp"

export default function PageShell({
  eyebrow,
  title,
  intro,
  heroImage,
  variant = "default",
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  heroImage?: string
  /** "tall" = hero lebih tinggi, judul lebih kecil, ada lapisan gelap untuk foto */
  variant?: "default" | "tall"
  children: React.ReactNode
}) {
  const tall = variant === "tall"

  return (
    <>
      <Navbar />
      <main className="font-sans">
        {/* Header gelap supaya navbar putih tetap terbaca */}
        <header
          className={`relative w-full overflow-hidden bg-slate-950 text-white ${tall ? "flex min-h-[75svh] items-center sm:min-h-[80vh]" : ""
            }`}
        >
          <Image
            src={heroImage || "/5.webp"}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-100"
            priority
          />

          {/* Lapisan gelap agar judul terbaca di atas foto yang ramai */}
          {tall && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />
          )}

          <div
            className={
              tall
                ? "relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-48"
                : "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16"
            }
          >
            {eyebrow && (
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                {eyebrow}
              </span>
            )}
            <h1
              className={
                tall
                  ? "mt-4 max-w-3xl text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
                  : "mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-5xl"
              }
            >
              {title}
            </h1>
            {intro && (
              <p className="mt-5 max-w-3xl text-sm sm:text-lg leading-relaxed text-white/80">{intro}</p>
            )}
          </div>
        </header>

        <div className="bg-[#272b2e] text-slate-100">{children}</div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}