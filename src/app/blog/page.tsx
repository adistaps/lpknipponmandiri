import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import BlogShell from "@/components/blog/BlogShell"
import FeaturedCarousel from "@/components/blog/FeaturedCarousel"
import { formatDateShort, getSortedPosts, type Post } from "@/lib/blog"
import { ROUTES, SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog & Pengalaman Kerja di Jepang | LPK Hikari Karya Mandiri",
  description:
    "Cerita, refleksi, dan pengalaman nyata bekerja di Jepang lewat jalur Tokutei Ginou: tips hidup di Jepang, budaya kerja, hingga persiapan mental.",
  alternates: { canonical: `${SITE_URL}${ROUTES.blog}` },
  keywords: [
    "blog kerja ke jepang",
    "pengalaman kerja di jepang",
    "kehidupan di jepang pekerja indonesia",
    "tips kerja jepang",
    "cerita tokutei ginou",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${ROUTES.blog}`,
    siteName: SITE_NAME,
    title: `Blog & Kisah Perjalanan Kerja ke Jepang | ${SITE_NAME}`,
    description:
      "Kumpulan artikel, cerita inspiratif, dan panduan praktis kehidupan serta karier di Jepang dari pengalaman langsung.",
    images: [
      {
        url: `${SITE_URL}/5.webp`,
        width: 1200,
        height: 630,
        alt: `Blog ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog & Kisah Perjalanan Kerja ke Jepang | ${SITE_NAME}`,
    description:
      "Kumpulan artikel, cerita inspiratif, dan panduan praktis kehidupan serta karier di Jepang dari pengalaman langsung.",
    images: [`${SITE_URL}/5.webp`],
  },
}

const LABEL =
  "font-[family-name:var(--font-blog-label)] text-[10px] font-medium uppercase tracking-[0.3em]"
const SERIF = "font-[family-name:var(--font-blog-serif)]"

function ReadMore({ href }: { href: string }) {
  return (
    <Link href={href} className={`${LABEL} group mt-6 inline-flex flex-col items-center gap-1.5 text-black`}>
      Baca selengkapnya
      <span className="h-px w-5 bg-black transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

function FeaturedPost({ post }: { post: Post }) {
  const href = `${ROUTES.blog}/${post.slug}`
  return (
    <article className="text-center">
      <p className={LABEL}>{post.category}</p>
      <h2 className={`${SERIF} mt-3 text-[28px] leading-tight sm:text-[32px]`}>
        <Link href={href}>{post.title}</Link>
      </h2>
      <p className={`${LABEL} mt-3 text-[9px]`}>
        Oleh {post.author} | {formatDateShort(post.date)}
      </p>
      <Link href={href} className="mt-6 block">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          width={post.cover.width}
          height={post.cover.height}
          sizes="(min-width:1024px) 760px, 100vw"
          className="h-auto w-full"
          priority
        />
      </Link>
      <p className={`${SERIF} mt-6 text-left text-[13px] leading-[1.95]`}>{post.excerpt}</p>
      <ReadMore href={href} />
    </article>
  )
}

function PostRow({ post }: { post: Post }) {
  const href = `${ROUTES.blog}/${post.slug}`
  return (
    <article className="grid items-center gap-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-8">
      <Link href={href} className="relative block aspect-[4/5] w-full overflow-hidden sm:w-[200px]">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="200px"
          className="object-cover"
        />
      </Link>
      <div className="text-center">
        <p className={LABEL}>{post.category}</p>
        <h2 className={`${SERIF} mt-3 text-[26px] leading-tight`}>
          <Link href={href}>{post.title}</Link>
        </h2>
        <p className={`${SERIF} mt-4 text-[13px] leading-[1.95]`}>{post.excerpt}</p>
        <ReadMore href={href} />
      </div>
    </article>
  )
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kategori?: string }>
}) {
  const { q, kategori } = await searchParams
  const all = getSortedPosts()

  const query = q?.trim().toLowerCase()
  const posts = all.filter((p) => {
    if (kategori && p.category !== kategori) return false
    if (query && !`${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(query)) return false
    return true
  })
  const filtering = Boolean(query || kategori)
  const [first, ...rest] = posts

  return (
    <BlogShell featured={!filtering ? <FeaturedCarousel posts={all} /> : undefined}>
      <h1 className="sr-only">Blog LPK Hikari Karya Mandiri</h1>
      {filtering && (
        <p className={`${LABEL} mb-8 text-center`}>
          {posts.length} hasil untuk &ldquo;{kategori ?? q}&rdquo; ·{" "}
          <Link href={ROUTES.blog} className="underline underline-offset-4">
            Lihat semua
          </Link>
        </p>
      )}

      {posts.length === 0 ? (
        <p className={`${SERIF} text-center text-[14px] italic`}>Belum ada artikel yang cocok.</p>
      ) : (
        <div>
          {first && <FeaturedPost post={first} />}
          {rest.map((post) => (
            <div key={post.slug}>
              <hr className="my-10 border-t border-black" />
              <PostRow post={post} />
            </div>
          ))}
        </div>
      )}
    </BlogShell>
  )
}
