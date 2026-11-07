import Link from "next/link"
import { Montserrat, Playfair_Display } from "next/font/google"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp"
import BlogSidebar from "@/components/blog/BlogSidebar"
import { BLOG_TITLE_LINES } from "@/lib/blog"
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
        <Link
          href={ROUTES.blog}
          aria-label="Blog LPK Nippon Mandiri"
          className="block px-4 pb-10 pt-10 text-center sm:pb-14 sm:pt-14"
        >
          <div className="font-[family-name:var(--font-blog-serif)] text-[clamp(52px,11vw,132px)] font-normal uppercase leading-[0.86] tracking-[-0.03em]">
            {BLOG_TITLE_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
        </Link>

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