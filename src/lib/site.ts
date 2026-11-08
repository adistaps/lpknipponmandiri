// Konfigurasi terpusat. Ganti nilai di sini, semua section ikut berubah.
export const SITE_NAME = "LPK Hikari Karya Mandiri"
export const SITE_URL = "https://lpkhikari.site"
export const SITE_TAGLINE = "Pelajari cara bekerja ke Jepang mandiri"
export const SITE_DESCRIPTION =
  "LPK Hikari Karya Mandiri mendampingi kamu bekerja ke Jepang lewat jalur resmi Tokutei Ginou (SSW) secara aman, transparan, dan mandiri. Panduan, sektor pekerjaan, dan roadmap dari persiapan sampai berangkat."

// TODO: ganti dengan nomor WhatsApp aktif (format internasional tanpa +)
export const WA_NUMBER = "6281249466910"
export const WA_DISPLAY = "+62 812-4946-6910"
export const SITE_EMAIL = "hidayatkhamim@gmail.com"
export const SITE_ADDRESS = "Dsn.Ngelo RT. 012 Rw.003 Ds.Sudungdewo Kec.Kertek Kab.Wonosobo"
export const SITE_MAPS_URL = "https://maps.app.goo.gl/Y2JLG7WXzXsFfw5r6"
export const SITE_MAPS_COORDS = { lat: -7.3650331, lng: 109.9400176 }

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA_DEFAULT_MESSAGE =
  "Halo Admin LPK Hikari Karya Mandiri 👋, saya ingin konsultasi mengenai program bekerja ke Jepang jalur Tokutei Ginou."

export const ROUTES = {
  caraMandiri: "/cara-mandiri",
  bidangPekerjaan: "/bidang-pekerjaan",
  blog: "/blog",
} as const
