import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import BlogShell from "@/components/blog/BlogShell"
import Inline from "@/components/blog/Inline"
import { POSTS, formatDateLong, formatDateShort, getPost } from "@/lib/blog"
import { ROUTES, SITE_NAME, SITE_URL } from "@/lib/site"

const LABEL =
  "font-[family-name:var(--font-blog-label)] text-[10px] font-medium uppercase tracking-[0.3em]"
const SERIF = "font-[family-name:var(--font-blog-serif)]"

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const canonicalUrl = `${SITE_URL}${ROUTES.blog}/${post.slug}`
  const imageUrl = `${SITE_URL}${post.cover.src}`

  return {
    title: `${post.title} | Blog ${SITE_NAME}`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: post.cover.width,
          height: post.cover.height,
          alt: post.cover.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover.src}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${ROUTES.blog}/${post.slug}`,
    },
  }

  return (
    <BlogShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="text-center">
          <p className={LABEL}>{post.category}</p>
          <h1 className={`${SERIF} mt-3 text-[28px] leading-tight sm:text-[32px]`}>{post.title}</h1>
          <p className={`${LABEL} mt-3 text-[9px]`}>
            Oleh {post.author} | {formatDateShort(post.date)}
          </p>
          <p className={`${LABEL} mt-2 text-[9px] text-black/60`}>
            {post.readMinutes} menit baca
            {post.updated ? ` · Diperbarui ${formatDateLong(post.updated)}` : ""}
          </p>
        </header>

        <figure className="mt-8">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            sizes="(min-width:1024px) 760px, 100vw"
            className="h-auto w-full"
            priority
          />
          {post.cover.caption && (
            <figcaption className={`${SERIF} mt-2 text-center text-[12px] italic text-black/70`}>
              {post.cover.caption}
            </figcaption>
          )}
        </figure>

        <div className="mt-8 space-y-6">
          {post.content.map((block, i) => {
            switch (block.type) {
              case "h":
                return (
                  <h2 key={i} className={`${SERIF} pt-4 text-[20px] font-semibold leading-snug`}>
                    <Inline text={block.text} />
                  </h2>
                )
              case "quote":
                return (
                  <blockquote
                    key={i}
                    className={`${SERIF} border-l-2 border-black pl-5 text-[14px] italic leading-[1.95]`}
                  >
                    <Inline text={block.text} />
                  </blockquote>
                )
              case "img":
                return (
                  <figure key={i} className="py-2">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      sizes="(min-width:1024px) 760px, 100vw"
                      className="mx-auto h-auto w-full"
                      style={{ maxWidth: block.width }}
                    />
                    {block.caption && (
                      <figcaption className={`${SERIF} mt-2 text-center text-[12px] italic text-black/70`}>
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              default:
                return (
                  <p key={i} className={`${SERIF} text-[14px] leading-[1.95]`}>
                    <Inline text={block.text} />
                  </p>
                )
            }
          })}
        </div>

        <hr className="mt-12 border-t border-black" />
        <div className="mt-8 text-center">
          <Link
            href={ROUTES.blog}
            className={`${LABEL} group inline-flex flex-col items-center gap-1.5 text-black`}
          >
            ← Kembali ke blog
            <span className="h-px w-5 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </article>
    </BlogShell>
  )
}
