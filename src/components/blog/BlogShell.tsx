import Link from "next/link"
import { Montserrat, Playfair_Display } from "next/font/google"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp"
import BlogSidebar from "@/components/blog/BlogSidebar"
import { BLOG_MASTHEAD } from "@/lib/blog"
import { ROUTES } from "@/lib/site"

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-blog-serif",
  display: "swap",
})
const label = Montserrat({
  subsets: ["latin"],
  variable: "--font-blog-label",
  display: "swap",
})

export default function BlogShell({
  children,
  featured,
}: {
  children: React.ReactNode
  /** Slot opsional di atas kolom utama (carousel di halaman daftar) */
  featured?: React.ReactNode
}) {
  return (
    <div className={`${serif.variable} ${label.variable}`}>
      {/* Navbar milik situs: transparan, teks/hamburger gelap, logo bershadow abu-abu */}
      <Navbar tone="dark" />

      {/* Font serif untuk seluruh isi blog. Aturan `* { font-family }` di globals.css membuat elemen
          anak (span, a, strong, em) tidak mewarisi font, jadi diwariskan paksa lewat varian :where()
          (spesifisitas 0, sehingga class font di elemen mana pun tetap menang). */}
      <main className="bg-white pt-20 font-[family-name:var(--font-blog-serif)] text-black [:where(&)_*]:[font-family:inherit] sm:pt-24">
        {/* Masthead */}
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-10 text-center sm:pb-14 sm:pt-14">
          <Link
            href={ROUTES.blog}
            aria-label={BLOG_MASTHEAD.title}
            className="inline-block transition-opacity hover:opacity-80"
          >
            <h1 className="font-[family-name:var(--font-blog-serif)] text-[clamp(44px,7vw,84px)] font-bold tracking-tight text-black sm:text-[clamp(52px,8vw,96px)]">
              {BLOG_MASTHEAD.title}
            </h1>
          </Link>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/75 sm:mt-5 sm:text-base md:text-lg">
            {BLOG_MASTHEAD.quote}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          {featured}

          <div className="grid gap-10 pb-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-0">
            <div className="min-w-0 lg:pr-10">
              <hr className="mb-10 hidden border-t border-black lg:block" />
              {children}
            </div>

            {/* Garis ganda vertikal pemisah, seperti referensi */}
            <aside className="min-w-0 lg:border-l-[3px] lg:border-double lg:border-black lg:pl-10">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}