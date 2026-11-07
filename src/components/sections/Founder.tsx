"use client";

import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

/*
  SKALA FONT PONSEL (di bawah 640px), dipakai sama di semua section:
  - Judul section : text-2xl
  - Teks sorot    : text-base  (kutipan, paragraf lead)
  - Teks isi      : text-sm
  - Keterangan    : text-xs
  Ukuran sm: ke atas (desktop) tidak diubah.
*/

export default function Founder() {
    return (
        <section id="tentang" className="py-10 sm:py-24 lg:py-32 bg-[#272b2e] text-slate-100 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Kolom Kiri: Kutipan / Cerita */}
                    <ScrollReveal direction="right" delay={0.1} className="lg:col-span-6 order-2 lg:order-1">
                        <div className="relative">
                            <span
                                aria-hidden="true"
                                className="block text-5xl sm:text-7xl leading-none text-white/80 mb-2"
                            >
                                &ldquo;
                            </span>

                            <blockquote className="italic text-base leading-relaxed sm:text-2xl sm:leading-snug lg:text-3xl text-white font-medium">
                                Berbekal 4 tahun pengalaman bekerja di Jepang dan latar belakang sebagai pengajar bahasa Jepang, saya tahu betul banyak orang ingin berkarier di sana, tetapi terhalang informasi dan biaya. Karena itu saya hadir sebagai pendamping yang aman, biaya transparan, dan membuat anda tenang sepanjang prosesnya.
                            </blockquote>

                            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-slate-400">
                                <span className="font-semibold text-white">Khidayat Hamim</span>
                                <span className="text-slate-500">, Pendiri &amp; Mentor</span>
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Kolom Kanan: Foto */}
                    <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6 order-1 lg:order-2">
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1f2326]">
                            <Image
                                src="/founder.webp"
                                alt="Foto Khidayat Hamim, pendiri LPK Nippon Mandiri"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}