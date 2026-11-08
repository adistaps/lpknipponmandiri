import type { Metadata } from "next"
import Link from "next/link"
import PageShell from "@/components/sections/PageShell"
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section"
import { ROUTES, SITE_NAME, SITE_URL, waLink, WA_DEFAULT_MESSAGE } from "@/lib/site"

// ── Data konten — edit langsung di sini ──────────────────────────────────────
// Foto tiap bidang ada di komponen parallax (prop `images`), urutan sama dengan array ini.
const SECTORS = [
  {
    name: "Pertanian",
    jp: "Nougyou",
    summary: "Salah satu sektor paling diminati pekerja Indonesia, dibagi menjadi dua kualifikasi utama.",
    tasks: [
      "Budidaya tanaman: pengelolaan tanah, pembibitan, pemeliharaan, pengendalian hama, panen, dan pengemasan.",
      "Peternakan: pemeliharaan ternak (sapi, babi, ayam), manajemen pakan, kebersihan kandang, dan pengolahan hasil ternak.",
    ],
  },
  {
    name: "Perawatan Lansia",
    jp: "Kaigo",
    summary: "Permintaan tenaga kerja asing tertinggi di Jepang karena populasi lansia yang terus bertambah.",
    tasks: [
      "Membantu aktivitas harian lansia: makan, mandi, berpakaian, dan mobilitas.",
      "Memberi dukungan emosional dan komunikasi harian di panti atau fasilitas perawatan.",
      "Catatan: selain tes keahlian, peserta juga wajib lulus tes bahasa Jepang khusus keperawatan.",
    ],
  },
  {
    name: "Pengolahan Makanan & Minuman",
    jp: "Inshokuryou Seizou",
    summary: "Industri pengolahan bahan makanan skala pabrik maupun menengah.",
    tasks: [
      "Pembuatan, pengolahan, pemotongan, penyusunan, dan pengemasan produk makanan atau minuman.",
      "Menjaga kebersihan, sanitasi, dan keselamatan kerja sesuai regulasi keamanan pangan Jepang.",
    ],
  },
  {
    name: "Restoran & Pelayanan Makanan",
    jp: "Gaishoku",
    summary: "Industri kuliner dan pelayanan langsung di restoran atau warung makan.",
    tasks: [
      "Menyiapkan bahan dan memasak di dapur.",
      "Melayani pelanggan di area depan dan menjaga kebersihan restoran.",
    ],
  },
  {
    name: "Konstruksi",
    jp: "Kensetsu",
    summary: "Peluang bagi tenaga terampil di pembangunan infrastruktur dan gedung.",
    tasks: [
      "Bekisting, pembesian, perancah (scaffolding), dan pengecoran beton.",
      "Pekerjaan atap serta pengoperasian alat berat di area proyek.",
    ],
  },
  {
    name: "Galangan Kapal & Maritim",
    jp: "Zousen",
    summary: "Industri pembuatan dan perawatan kapal komersial maupun kapal nelayan.",
    tasks: [
      "Pengelasan, pengecatan kapal, dan perakitan struktur besi.",
      "Permesinan dan pemeliharaan komponen kelautan.",
    ],
  },
  {
    name: "Manufaktur & Bahan Baku",
    jp: "Seizougyou",
    summary: "Gabungan beberapa bidang manufaktur seperti pengolahan logam, permesinan, dan elektronik.",
    tasks: [
      "Pengolahan cetakan plastik, pengecoran logam, dan pemrosesan mesin CNC.",
      "Perakitan perangkat elektronik dan inspeksi kualitas produk industri.",
    ],
  },
  {
    name: "Pembersihan Gedung",
    jp: "Biru Kuriningu",
    summary: "Perawatan dan pemeliharaan kebersihan fasilitas umum dan gedung perkantoran.",
    tasks: [
      "Pembersihan bagian dalam dan luar gedung, perawatan lantai, dan sanitasi toilet.",
      "Mengoperasikan mesin pembersih profesional dengan standar higienis tinggi.",
    ],
  },
  {
    name: "Akomodasi & Perhotelan",
    jp: "Shukuhaku",
    summary: "Sektor pariwisata dan perhotelan di berbagai destinasi wisata Jepang.",
    tasks: [
      "Layanan resepsionis (front desk).",
      "Housekeeping dan pelayanan tamu di restoran hotel.",
    ],
  },
  {
    name: "Otomotif & Perawatan Mobil",
    jp: "Jidousha Seibi",
    summary: "Sektor mekanik dan perawatan kendaraan di bengkel-bengkel resmi Jepang.",
    tasks: [
      "Inspeksi rutin dan pemeliharaan berkala kendaraan.",
      "Perbaikan mesin dan penggantian suku cadang.",
    ],
  },
  {
    name: "Penerbangan",
    jp: "Kuukou",
    summary: "Mendukung operasional bandara internasional dan domestik Jepang.",
    tasks: [
      "Penanganan bagasi dan kargo di darat (ground handling).",
      "Pengoperasian kendaraan operasional bandara dan kebersihan interior pesawat.",
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "11 Bidang Pekerjaan Visa Tokutei Ginou (SSW) Jepang & Syaratnya",
  description:
    "Pelajari 11 sektor pekerjaan resmi program Tokutei Ginou (SSW) di Jepang: pertanian, pengolahan makanan, kaigo (perawatan lansia), perhotelan, hingga manufaktur lengkap dengan syarat dan tugas.",
  alternates: { canonical: `${SITE_URL}${ROUTES.bidangPekerjaan}` },
  keywords: [
    "sektor tokutei ginou",
    "bidang pekerjaan jepang ssw",
    "kaigo jepang",
    "pekerjaan restoran jepang",
    "pertanian jepang ssw",
    "syarat tokutei ginou",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${ROUTES.bidangPekerjaan}`,
    siteName: SITE_NAME,
    title: `11 Bidang Pekerjaan Visa Tokutei Ginou (SSW) di Jepang | ${SITE_NAME}`,
    description:
      "Daftar lengkap 11 sektor resmi program Tokutei Ginou di Jepang: tugas harian, gaji setara lokal, dan persyaratan keahlian.",
    images: [
      {
        url: `${SITE_URL}/bg2.webp`,
        width: 1200,
        height: 630,
        alt: "Bidang Pekerjaan Tokutei Ginou Jepang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `11 Bidang Pekerjaan Visa Tokutei Ginou (SSW) di Jepang | ${SITE_NAME}`,
    description:
      "Daftar lengkap 11 sektor resmi program Tokutei Ginou di Jepang: tugas harian, gaji setara lokal, dan persyaratan keahlian.",
    images: [`${SITE_URL}/bg2.webp`],
  },
}

export default function BidangPekerjaanPage() {
  return (
    <PageShell
      eyebrow=""
      title="Mengenal Sektor dan Bidang Pekerjaan Visa Tokutei Ginou (SSW) di Jepang"
      heroImage="/bg2.webp"
      variant="tall"
    >
      {/* Seluruh konten di bawah hero: latar putih, satu lebar container (max-w-7xl) */}
      <div className="bg-white text-slate-900">
        {/* Pengantar */}
        <section className="mx-auto w-full max-w-7xl px-5 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-lg font-medium leading-relaxed text-slate-900 sm:text-xl">
              Tokutei Ginou adalah jalur kerja resmi Pemerintah Jepang untuk mengatasi krisis tenaga kerja di berbagai industri. Pemegang visanya diakui sebagai pekerja profesional dengan hak dan standar gaji setara pekerja lokal.
            </p>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Berbeda dengan program magang (Ginou Jisshusei), Tokutei Ginou membuka peluang kerja ke dalam beberapa sektor utama. Berikut daftar dan penjelasan bidang pekerjaan yang bisa kamu pilih.
            </p>
          </div>
        </section>

        {/* Parallax foto per bidang pekerjaan */}
        <ParallaxScrollFeatureSection sectors={SECTORS} />
        {/* Syarat utama — kartu oranye */}
        <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="relative">
            {/* Aksen garis pojok kiri-atas & kanan-bawah */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-3 h-1/2 w-1/2 rounded-tl-[2.25rem] border-l-[3px] border-t-[3px] border-[#ff6a00]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-3 h-1/2 w-1/2 rounded-br-[2.25rem] border-b-[3px] border-r-[3px] border-[#ff6a00]"
            />

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff6a00] to-[#cc3700] p-6 text-white shadow-[0_24px_50px_-18px_rgba(255,106,0,0.55)] ring-1 ring-inset ring-white/40 sm:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Syarat Utama untuk Semua Sektor
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">
                Untuk melamar di salah satu sektor di atas, calon pekerja asing wajib memenuhi dua kualifikasi utama:
              </p>

              <ol className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                <li className="border-t-2 border-white/60 pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    1. Sertifikat Bahasa Jepang
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-white/90">
                    Lulus JFT-Basic A2 atau JLPT Level N4 (ke atas).
                  </p>
                </li>
                <li className="border-t-2 border-white/60 pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    2. Sertifikat Keahlian Bidang
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-white/90">
                    Lulus ujian evaluasi keterampilan (Skill Evaluation Test) sesuai sektor yang dipilih.
                  </p>
                </li>
              </ol>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(WA_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-[#e65100] transition-colors hover:bg-orange-50"
                >
                  Tanya sektor yang cocok untukmu
                </a>
                <Link
                  href={ROUTES.caraMandiri}
                  className="rounded-xl border border-white/50 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Pelajari cara mandiri
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
            Aturan dan persyaratan bisa berubah sewaktu-waktu mengikuti kebijakan Pemerintah Jepang. Sebelum mendaftar, cek kembali informasi terbaru di sumber resmi.
          </p>
        </section>
      </div>
    </PageShell>
  )
}