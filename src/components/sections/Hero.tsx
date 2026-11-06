'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';
import { SITE_NAME } from '@/lib/site';

const HERO_SLIDES = [
    {
        src: '/hero/1.webp',
        alt: 'Latar belakang hero 1',
    },
    {
        src: '/hero/2.webp',
        alt: 'Latar belakang hero 2',
    },
    {
        src: '/hero/3.webp',
        alt: 'Latar belakang hero 3',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide Hero setiap 5 detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative w-full z-30 font-sans select-none overflow-hidden h-screen min-h-[700px] bg-[#272b2e]">

            <h1 className="sr-only">
                {SITE_NAME} - Pelajari cara bekerja ke Jepang mandiri lewat jalur resmi Tokutei Ginou
            </h1>

            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#272b2e]">
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                    </div>
                ))}
                {/* Gradasi hanya di bagian bawah */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-[#272b2e] to-transparent pointer-events-none" />
            </div>

            {/* Container Utama */}
            <div className="relative z-20 h-full max-w-[1400px] mx-auto w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 pt-32 pb-8">
                <div className="max-w-4xl text-center w-full flex flex-col items-center">
                    <ScrollReveal direction="down" delay={0.1}>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-white drop-shadow-xl">
                            Pengalamanmu adalah aset.<br />
                            Jepang adalah panggungmu berikutnya.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.3}>
                        <p className="mt-5 text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed max-w-[34rem] mx-auto font-medium drop-shadow-md">
                            {SITE_NAME} mengawal pengalamanmu menuju karier dan kemandirian finansial di Jepang lewat jalur resmi Tokutei Ginou.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}