"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Post } from "@/lib/blog"
import { ROUTES } from "@/lib/site"

const GAP = 20 // px, sama dengan gap-5

export default function FeaturedCarousel({ posts }: { posts: Post[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  // Perbarui status tombol (awal / akhir) mengikuti posisi scroll
  const updateEdge = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setEdge({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    })
  }, [])

  useEffect(() => {
    updateEdge()
    window.addEventListener("resize", updateEdge)
    return () => window.removeEventListener("resize", updateEdge)
  }, [updateEdge])

  // Geser satu kartu per klik
  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + GAP : el.clientWidth / 2
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  const arrowClass =
    "absolute top-[38%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/90 text-black shadow-sm transition-opacity hover:bg-white disabled:pointer-events-none disabled:opacity-30 sm:h-8 sm:w-8"

  return (
    <section aria-label="Artikel pilihan" className="relative mb-10">
      {/* Bisa digeser dengan jari (swipe) di ponsel, dan dengan tombol panah di semua layar */}
      <div
        ref={trackRef}
        onScroll={updateEdge}
        className="flex touch-pan-x snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`${ROUTES.blog}/${post.slug}`}
            className="group w-[78%] shrink-0 snap-start sm:w-[calc((100%-2.5rem)/3)]"
          >
            <div className="relative aspect-[16/15] overflow-hidden">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                sizes="(min-width:640px) 340px, 78vw"
                draggable={false}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-0 left-1/2 max-w-[80%] -translate-x-1/2 bg-white px-4 py-2 text-center font-[family-name:var(--font-blog-label)] text-[9px] font-medium uppercase leading-[1.7] tracking-[0.25em] text-black">
                {post.category}
              </span>
            </div>
            <h3 className="mt-5 px-2 text-center font-[family-name:var(--font-blog-serif)] text-[20px] leading-[1.3] text-black">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>

      {posts.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={edge.start}
            aria-label="Sebelumnya"
            className={`${arrowClass} left-2`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={edge.end}
            aria-label="Berikutnya"
            className={`${arrowClass} right-2`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </section>
  )
}