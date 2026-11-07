import type { Metadata } from "next"
import Link from "next/link"
import PageShell from "@/components/sections/PageShell"
import { ROUTES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/site"

// ── Data konten — edit langsung di sini ──────────────────────────────────────
type IconName = "user" | "book" | "badge" | "search" | "chat" | "doc"

const MANDIRI_STEPS: {
  icon: IconName
  title: string
  body: string[]
  bullets: string[]
  after?: string
}[] = [
    {
      icon: "user",
      title: "Pahami Syarat Dasar dan Pilih Sektor Pekerjaan",
      body: ["Sebelum melangkah, pastikan kamu memenuhi kriteria umum berikut:"],
      bullets: [
        "Usia minimal 18 tahun.",
        "Sehat jasmani dan rohani (lulus Medical Check-Up).",
        "Memiliki SKCK, dokumen yang umumnya diminta saat mengurus berkas.",
        "Memiliki kemampuan dasar bahasa Jepang dan keahlian di bidang tertentu.",
      ],
      after:
        "Lalu pilih salah satu sektor resmi Tokutei Ginou yang kamu minati, misalnya pertanian, pengolahan makanan, restoran, perawatan lansia (Kaigo), atau konstruksi.",
    },
    {
      icon: "book",
      title: "Kuasai Bahasa Jepang & Lulus Ujian Kemampuan",
      body: [
        "Visa Tokutei Ginou menuntut bukti bahwa kamu bisa berkomunikasi dalam standar kerja di Jepang. Kamu perlu lulus salah satu dari dua ujian berikut:",
      ],
      bullets: [
        "JFT-Basic (Japan Foundation Test for Basic Japanese): tes berbasis komputer (CBT) tingkat dasar (A2). Paling sering diambil karena jadwalnya fleksibel.",
        "JLPT (Japanese Language Proficiency Test): minimal lulus Level N4.",
      ],
      after:
        "Cara belajar mandiri: gunakan buku panduan resmi gratis seperti Irodori atau modul Marugoto, tonton kanal YouTube edukasi bahasa Jepang, atau manfaatkan aplikasi belajar bahasa.",
    },
    {
      icon: "badge",
      title: "Lulus Ujian Keahlian Bidang (Skill Evaluation Test)",
      body: [
        "Selain bahasa, kamu harus menguasai bidang pekerjaan yang dipilih dan lulus ujian teknis dari kementerian terkait di Jepang.",
      ],
      bullets: [
        "Cara daftar: kunjungi situs resmi penyelenggara ujian untuk sektor pilihanmu.",
        "Modul belajar: modul resmi biasanya dibagikan gratis dalam format PDF di situs kementerian Jepang, sering kali dengan terjemahan bahasa Indonesia.",
        "Pelaksanaan: daftar akun online, bayar biaya ujian, lalu ikuti tes CBT di lokasi resmi di Indonesia (umumnya kota besar seperti Jakarta).",
      ],
    },
    {
      icon: "search",
      title: "Mencari Lowongan Pekerjaan secara Mandiri",
      body: [
        "Karena tidak melalui penyalur, kamu mencari sendiri perusahaan (kaisha) di Jepang yang bersedia menerima pekerja asing jalur Tokutei Ginou.",
      ],
      bullets: [
        "Portal kerja yang mendukung perekrutan Tokutei Ginou, misalnya JAC Recruitment atau GaijinPot, serta informasi dari pemerintah Jepang.",
        "Melamar langsung ke halaman rekrutmen (saiyou) perusahaan dengan CV berbahasa Jepang (rirekisho dan shokumukeirekisho).",
        "Sertifikat atau kartu hasil ujian bahasa dan keahlian menjadi bukti sah saat melamar.",
      ],
    },
    {
      icon: "chat",
      title: "Wawancara Kerja (Mensetsu) & Kontrak Kerja",
      body: [
        "Jika lamaranmu direspons, kamu akan dijadwalkan wawancara, biasanya online lewat Zoom atau Google Meet.",
      ],
      bullets: [
        "Siapkan perkenalan diri (jiko shoukai), alasan melamar, dan kelebihan dirimu dengan bahasa Jepang yang sopan.",
        "Jika diterima, perusahaan mengirim Kontrak Kerja (koyou keiyaku) dan surat pemberitahuan kondisi kerja. Pelajari dengan teliti sebelum menandatangani.",
      ],
    },
    {
      icon: "doc",
      title: "Pengurusan Dokumen dan Visa Kerja (COE)",
      body: [
        "Setelah punya kontrak resmi, tahap birokrasi dimulai. Kamu bisa mengurusnya sendiri atau dibantu HR perusahaan di Jepang.",
      ],
      bullets: [
        "COE (Certificate of Eligibility): diajukan perusahaan ke Kantor Imigrasi setempat di Jepang.",
        "Dokumen dari Indonesia: paspor aktif, SKCK, sertifikat JFT/JLPT dan ujian keahlian SSW, serta hasil Medical Check-Up dari klinik rujukan.",
        "Visa: setelah COE diterima, ajukan permohonan visa ke Kedutaan Besar Jepang di Indonesia (lewat agen visa resmi yang ditunjuk atau loket kedubes).",
      ],
    },
  ]
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Cara Mandiri Berangkat Kerja ke Jepang (Tokutei Ginou)",
  description:
    "Panduan lengkap 6 tahap berangkat kerja ke Jepang dengan visa Tokutei Ginou (SSW) secara mandiri, tanpa LPK atau perusahaan penyalur.",
  alternates: { canonical: ROUTES.caraMandiri },
}

function StepIcon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }
  switch (name) {
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      )
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
          <path d="M4 19V5" />
        </svg>
      )
    case "badge":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="6" />
          <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
        </svg>
      )
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      )
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
        </svg>
      )
    case "doc":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      )
  }
}

/** Posisi aksen sudut oren (bergantian seperti gambar referensi) */
const CORNERS = [
  "-left-2 -top-2 border-l-[6px] border-t-[6px] rounded-tl-[2rem]",
  "-right-2 -top-2 border-r-[6px] border-t-[6px] rounded-tr-[2rem]",
  "-left-2 -bottom-2 border-l-[6px] border-b-[6px] rounded-bl-[2rem]",
  "-right-2 -bottom-2 border-r-[6px] border-b-[6px] rounded-br-[2rem]",
]

export default function CaraMandiriPage() {
  return (
    <PageShell
      eyebrow=""
      title="Cara Mandiri Berangkat Kerja ke Jepang dengan Visa Tokutei Ginou"
      heroImage="/bg1.webp"
      variant="tall"
    >
      <div className="bg-white text-slate-900">
        {/* ── Tahapan (kartu infografis) ───────────────────────── */}
        <section id="tahapan" className="mx-auto max-w-[88rem] scroll-mt-24 px-3 pb-8 pt-10 sm:px-4 sm:pt-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              6 Tahap Berangkat Mandiri
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Ikuti urutan berikut, dari persiapan syarat sampai visa kerja terbit.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {MANDIRI_STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                {/* aksen sudut oren */}
                <div
                  className={`pointer-events-none absolute h-1/2 w-1/2 border-orange-500 ${CORNERS[i % 4]}`}
                />
                <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-white to-slate-100 p-6 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.25)] sm:p-8">
                  {/* angka outline besar */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 -right-2 select-none text-[9rem] font-extrabold leading-none text-transparent opacity-70 sm:text-[11rem]"
                    style={{ WebkitTextStroke: "1.5px #f97316" }}
                  >
                    {i + 1}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/30 ring-4 ring-white">
                        <StepIcon name={step.icon} />
                      </span>
                      <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                        Tahap {i + 1}
                      </p>
                    </div>

                    <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                      {step.title}
                    </h3>

                    {step.body.map((para) => (
                      <p key={para} className="mt-3 text-sm leading-relaxed text-slate-600">
                        {para}
                      </p>
                    ))}

                    <ul className="mt-4 space-y-2.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {step.after && (
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{step.after}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Kelebihan & Tantangan ────────────────────────────── */}
        <section className="mx-auto max-w-[88rem] px-3 py-12 sm:px-4 sm:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-white to-slate-100 p-6 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.25)] sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">Keuntungan jalur mandiri</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Kamu lebih hemat biaya karena tidak perlu membayar biaya diklat atau jasa penyaluran agen swasta, dan punya kebebasan penuh memilih perusahaan tujuan.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-white to-slate-100 p-6 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.25)] sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">Tantangannya</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Jalur ini menuntut kemandirian tinggi, disiplin belajar tanpa pengawas, ketelitian mengurus dokumen hukum internasional, dan kemampuan aktif mencari lowongan di Jepang secara daring.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
            Dengan persiapan matang, ketekunan belajar bahasa minimal level N4, dan riset dari sumber resmi pemerintah, impian bekerja ke Jepang secara mandiri sangat mungkin diwujudkan.
          </p>

          {/* CTA LPK */}
          <div className="relative mt-12">
            <div className="pointer-events-none absolute -left-2 -top-2 h-1/2 w-1/2 rounded-tl-[2.25rem] border-l-[6px] border-t-[6px] border-orange-500" />
            <div className="pointer-events-none absolute -bottom-2 -right-2 h-1/2 w-1/2 rounded-br-[2.25rem] border-b-[6px] border-r-[6px] border-orange-500" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-orange-500 to-orange-700 p-7 text-white shadow-xl shadow-orange-600/25 sm:p-10">
              <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                Tidak perlu menjalaninya sendirian
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                Mandiri bukan berarti sendirian. LPK Hikari Karya Mandiri hadir sebagai mentor dan pendamping tepercaya yang pernah menjalaninya sendiri, membantumu melangkah ke Jepang secara aman, transparan, dan tenang sepanjang prosesnya.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(WA_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-orange-600 transition-colors hover:bg-white/90"
                >
                  Konsultasi via WhatsApp
                </a>
                <Link
                  href={ROUTES.bidangPekerjaan}
                  className="rounded-xl border border-white/40 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Lihat bidang pekerjaan
                </Link>
              </div>
            </div>
          </div>


        </section>
      </div>
    </PageShell>
  )
}