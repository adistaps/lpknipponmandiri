import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';
import { SITE_NAME } from '@/lib/site';

export default function Hero() {
    return (
        <section id="hero" className="relative w-full z-30 font-sans select-none overflow-hidden h-screen min-h-[700px] bg-[#272b2e]">

            <h1 className="sr-only">
                {SITE_NAME} - Pelajari cara bekerja ke Jepang mandiri lewat jalur resmi Tokutei Ginou
            </h1>

            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#272b2e]">
                <Image
                    src="/hero/2.webp"
                    alt="Latar belakang hero"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover object-center"
                />
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