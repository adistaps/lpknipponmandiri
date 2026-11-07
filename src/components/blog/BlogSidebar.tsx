import Image from "next/image"
import Link from "next/link"
import Inline from "@/components/blog/Inline"
import { BLOG_AUTHOR, CATEGORY_GROUPS, getSortedPosts } from "@/lib/blog"
import { ROUTES } from "@/lib/site"

const LABEL =
  "font-[family-name:var(--font-blog-label)] text-[10px] font-medium uppercase tracking-[0.3em]"
const SERIF = "font-[family-name:var(--font-blog-serif)]"

function Divider() {
  return <hr className="my-8 border-t border-black" />
}

export default function BlogSidebar() {
  const pick = getSortedPosts()[0]

  return (
    <div className="text-center">
      <hr className="mb-8 hidden border-t border-black lg:block" />

      {/* Tentang penulis */}
      <p className={`${LABEL}`}>Halo, saya Khamim</p>
      <div className="relative mx-auto mt-5 h-[170px] w-[136px] overflow-hidden">
        <Image
          src={BLOG_AUTHOR.photo}
          alt={BLOG_AUTHOR.name}
          fill
          sizes="136px"
          className="object-cover object-top"
        />
      </div>
      <p className={`${SERIF} mt-5 text-[13px] italic leading-[1.9]`}>
        <Inline text={BLOG_AUTHOR.bio} />
      </p>
      <p className={`${SERIF} mt-3 text-[13px] italic`}>
        Selengkapnya{" "}
        <Link href="/#tentang" className="underline underline-offset-2">
          di sini
        </Link>
        .
      </p>

      <Divider />

      {/* Pencarian */}
      <form action={ROUTES.blog} method="get" role="search">
        <input
          type="search"
          name="q"
          placeholder="Cari ..."
          aria-label="Cari artikel"
          className={`${SERIF} w-[170px] border border-black px-2 py-1 text-[13px] outline-none placeholder:text-black/60`}
        />
      </form>

      <Divider />

      {/* Ajakan */}
      <p className={LABEL}>Untuk calon pekerja</p>
      <div className="relative mx-auto mt-5 aspect-[4/3] w-full max-w-[220px] overflow-hidden">
        <Image src="/hero/1.webp" alt="" fill sizes="220px" className="object-cover" />
      </div>
      <p className={`${SERIF} mt-5 text-[13px] leading-[1.9]`}>
        Kamu diundang belajar cara bekerja ke Jepang secara mandiri lewat{" "}
        <Link href={ROUTES.caraMandiri} className="italic underline underline-offset-2">
          panduan Tokutei Ginou
        </Link>
        : jelas, aman, dan transparan.
      </p>

      <Divider />

      {/* Kategori */}
      <nav aria-label="Kategori" className="text-left">
        {CATEGORY_GROUPS.map((group) => (
          <div key={group.title} className="mb-5">
            <p className={`${SERIF} text-[12px] uppercase tracking-[0.12em]`}>{group.title}</p>
            <ul className="mt-2 space-y-2 pl-4">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={`${ROUTES.blog}?kategori=${encodeURIComponent(item.match)}`}
                    className={`${SERIF} text-[12px] hover:underline`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <Divider />

      {/* Pilihan minggu ini */}
      <p className={LABEL}>Pilihan Minggu Ini</p>
      <hr className="mx-auto mt-3 w-24 border-t border-black" />
      {pick && (
        <div className="mt-6">
          <div className="relative mx-auto h-24 w-36 overflow-hidden">
            <Image src={pick.cover.src} alt={pick.cover.alt} fill sizes="144px" className="object-cover" />
          </div>
          <p className={`${LABEL} mt-6 px-4 leading-[2]`}>{pick.title}</p>
          <p className={`${SERIF} mt-4 text-[13px] leading-[1.9]`}>{pick.excerpt.slice(0, 110).trim()}…</p>
          <Link
            href={`${ROUTES.blog}/${pick.slug}`}
            className={`${SERIF} mt-2 inline-block text-[13px] underline underline-offset-2`}
          >
            Baca selengkapnya →
          </Link>
        </div>
      )}
      <hr className="mt-8 border-t border-black" />
    </div>
  )
}
