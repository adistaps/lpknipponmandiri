// Data blog terpusat. Tambah artikel baru cukup dengan menambah satu objek di POSTS.
// Teks mendukung penanda sederhana: **tebal** dan *miring*.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "img"; src: string; alt: string; width: number; height: number; caption?: string }

export type Post = {
  slug: string
  title: string
  category: string
  author: string
  date: string // YYYY-MM-DD
  updated?: string // YYYY-MM-DD
  readMinutes: number
  excerpt: string
  cover: { src: string; alt: string; width: number; height: number; caption?: string }
  content: Block[]
}

export const BLOG_TITLE_LINES = ["LPK", "HIKARI", "KARYA", "MANDIRI"] as const

export const BLOG_AUTHOR = {
  name: "Khamim Hidayat",
  photo: "/founder.webp",
  bio: "*Blog ini* adalah tempat saya berbagi cerita nyata dari perjalanan bekerja di Jepang: suka dukanya, pelajarannya, dan hal-hal yang jarang dibicarakan. Tanpa janji manis, hanya pengalaman apa adanya.",
}

// Grup kategori di sidebar. `match` harus sama persis dengan Post.category.
export const CATEGORY_GROUPS = [
  {
    title: "Cerita",
    items: [{ label: "Refleksi + Perjuangan", match: "Refleksi + Perjuangan" }],
  },
  {
    title: "Tempat",
    items: [{ label: "Hidup + Budaya", match: "Hidup + Budaya" }],
  },
]

export const POSTS: Post[] = [
  {
    slug: "kehidupan-di-negara-jepang",
    title: "Kehidupan di Negara Jepang",
    category: "Hidup + Budaya",
    author: "Khamim Hidayat",
    date: "2021-08-14",
    updated: "2021-10-20",
    readMinutes: 4,
    excerpt:
      "Berdasarkan pengalaman pribadi selama 2 tahun di Jepang: dari empat musim, konbini, makanan, tempat tinggal, transportasi umum, sampai prasangka terhadap orang asing.",
    cover: {
      src: "/blog/kehidupan-di-jepang/cover.jpg",
      alt: "Pemandangan Jepang",
      width: 925,
      height: 499,
      caption: "source : Japan state.gov",
    },
    content: [
      {
        type: "p",
        text: "Apa yang akan aku bahas adalah berdasarkan pengalaman pribadi. Apa yang aku tuliskan juga terbatas pada pengetahuanku saja, jadi apabila ada dari kalian yang hidup lebih lama di Jepang, lebih berpendidikan atau lebih pintar tidaklah fair untuk menjudge apa yang aku tuliskan ini. (^^)",
      },
      {
        type: "p",
        text: "Selama 24 tahun hidup di Desa, dan here I am in Japan. Saya terlahir dari keluarga petani di Wonosobo, Jawa Tengah. Tidak kaya dan tidak miskin, semuanya serba tercukupi alhamdulillah. Wonosobo merupakan kota kecil dan tak seberapa, kota tetangga yang ukurannya dan ekonominya lebih besar seperti Semarang atau Jogja tentu pernah aku kunjungi, semua tampak tak begitu berbeda.",
      },
      {
        type: "p",
        text: "Hanya saja berbeda dengan Jakarta. 3 bulan lamanya aku berkesempatan bekerja membantu kerabat disana, dan Waw! Amazing menurutku. Dari lingkungan “paling worst” hingga “paling clean” sudah aku saksikan, aku juga berkesempatan melihat life style ala orang-orang kaya yang belum pernah saya lihat sebelumnya. Tak lupa, tentang gedung-gedung tinggi pencakar langit, mereka selalu membuatku terkagum saat melihatnya.",
      },
      {
        type: "p",
        text: "Saat pertama kali datang ke Jepang semuanya tampak luar biasa menarik, dimana-mana bersih dan serba berbangunan gedung. Tahun pertama yang saya rasakan adalah every chance is like an adventure, petualang mengeksplore apa saja hal-hal yang bisa saya ketahui di negara ini, dan apa-apa yang bisa aku pelajari membuatku ingin menciptakan kenangan indah yang bisa menjadi hadiah cerita untuk calon generasiku nanti. Sorry agak lebay,he.",
      },
      {
        type: "p",
        text: "Belum lama saya tinggal di Jepang, saat ini sudah terhitung 2 tahun, dan kira-kira seperti inilah kehidup di Jepang.",
      },

      { type: "h", text: "1. Musim" },
      {
        type: "img",
        src: "/blog/kehidupan-di-jepang/musim.jpg",
        alt: "Musim di Jepang",
        width: 438,
        height: 313,
      },
      {
        type: "p",
        text: "Jepang memiliki 4 musim. Musim gugur dan musim semi adalah waktu yang paling pas untuk bersantai merasakan keindahan alam yang tidak biasa di lihat di Indonesia. Saat musim gugur daun-daun pepohonan akan berubah warna menjadi kuning atau kemerah-merahan kemudian berguguran. Ketika musim semi berbagai jenis bunga-bunga akan bermekaran, dan daun-daun pohon yang berguguran mulai tumbuh/bersemi lagi. Sedangkan musim dingin dan musim panas adalah waktu yang sangat ekstrem. Saat musim panas udara di jepang sangatlah panas, namun di musim ini kalian biasanya akan mengingat suasana kampung halaman di Indonesia, karena di Indonesia kan seringnya panas ya,hehe. Sedangkan saat musim dingin kalian akan merasakan dinginnya sampai masuk ke tulang, (saking dinginnya). Ini adalah kesempatan kalian menikmati sensasi berada di bawah hujan salju ala film-film amerika atau korea. Tapi percaya atau tidak bahwa orang di negara ini menganggap salju turun adalah hal yang sangat merepotkan dan membahayakan karena jalan menjadi licin. Ini membuat warganya perlu berfikir 2 kali jika ingin berpergian menggunakan kendaraan pribadi. Kecelakaan lalu lintas meningkat di musim ini.",
      },

      { type: "h", text: "2. Minimarket" },
      {
        type: "img",
        src: "/blog/kehidupan-di-jepang/konbini.jpg",
        alt: "Konbini, minimarket di Jepang",
        width: 438,
        height: 246,
      },
      {
        type: "p",
        text: "Orang Jepang menyebut minimarketnya KONBINI, ini adalah bahasa serapan dari bahasa inggris yaitu Convenience Store. *\"nggak tahu nyambungnya dimana ya, hehe.\"* Konten didalamnya tidak jauh berbeda dengan minimarket di Indonesia, hanya saja setiap Minimarket di Jepang selalu memiliki lahan parkir yang lebih luas. ( karena kebanyakan orang Jepang adalah pengendara mobil kali ya). Kalau kebelet pipis kalian bisa pakai toilet di konbini dan gratis lo. Sangat berbeda dengan di Indonesia kalau tiba-tiba di perjalanan ingin ke toilet mampirnya ke pom bensin, dan biasanya perlu bayar ya.(-_-).",
      },

      { type: "h", text: "3. Makanan" },
      {
        type: "img",
        src: "/blog/kehidupan-di-jepang/makanan.png",
        alt: "Makanan Jepang",
        width: 438,
        height: 284,
      },
      {
        type: "p",
        text: "Jauh berbeda dengan makanan di Indonesia baik rasa dan bumbunya. Jika di Indonesia makanan identik berasa asin, makanan di Jepang identik dengan rasa manis. Makanan di Indonesia mengandung banyak jenis bumbu atau rempah-rempah sedangkan di Jepang bumbu sepertinya lebih sederhana. Meskipun saya tidak begitu yakin dengan hal ini, jika kalian makan-makanan jepang kalian akan lebih merasakan rasa aslinya dari pada rasa bumbunya. Pertama kali makan-makanan Jepang, saya ingin muntah, rasanya nggak biasa dan tak bisa langsung di terima oleh mulut. Makanan di Jepang terasa lebih hambar. Mengenai rasa makanan Indonesia juaranya, namun kalau tentang kesehatan, makanan Jepang sangatlah menyehatkan dan bersih. Salah satu faktor penyebab orang jepang bisa hidup lebih lama adalah karena makanannya.",
      },

      { type: "h", text: "4. Tempat tinggal" },
      {
        type: "img",
        src: "/blog/kehidupan-di-jepang/tempat-tinggal.jpg",
        alt: "Tempat tinggal di Jepang",
        width: 438,
        height: 313,
      },
      {
        type: "p",
        text: "Jika kalian datang ke Jepang adalah untuk magang atau bekerja, kalian pasti membutuhkan tempat tinggal. Kebanyakan kontrakan/kos-kosan/asrama di Jepang pasti di lengkapi dengan perabotan seperti AC, Mesin Cuci, Magic Com (penanak nasi) Microwave (penghangat makanan), dan Water Heater (pemanas air). Ini adalah perabotan yang pasti selalu ada di jepang. AC kebanyakan sudah bisa di setting supaya bisa mensejukkan ruangan (saat musim panas) dan menghangatkan ruangan (saat musim dingin). Jika kalian ingin mandi air hangat karena kedinginan kalian bisa mensetting kran supaya airnya menjadi hangat. Dan yang tidak kalah keren adalah air kran di Jepang adalah air minum. Kalian tak perlu repot-repot masak air untuk minum. Tinggal nyalakan kran dan minumlah tanpa takut sakit perut. Di jepang semua serba praktis.",
      },

      { type: "h", text: "5. Transportasi umum" },
      {
        type: "img",
        src: "/blog/kehidupan-di-jepang/transportasi.jpg",
        alt: "Transportasi umum di Jepang",
        width: 438,
        height: 291,
      },
      {
        type: "p",
        text: "Di Jepang kamu mungkin nggak akan menemukan Ojek, tapi percayalah jika kamu ingin berpergian ke tempat lain maka kamu akan menemukan bahwa transportasi umum di Jepang sangatlah luar biasa keren. Sistemnya sangat mudah di akses, ada dimana-mana dan tepat waktu. Kalian bisa dengan mudah berpergian kemanapun dengan transportasi umum di jepang. Jika tidak dengan bus kamu bisa pergi dengan kereta dan sebaliknya. Selama saya tinggal di Jepang, jika ingin pergi untuk jalan-jalan dan berwisata, saya tak pernah mengeluh karena tidak punya motor atau mobil sendiri karena kemanapun hampir bisa di jangkau dengan transportasi umum.",
      },

      { type: "h", text: "6. Prasangka terhadap orang asing" },
      {
        type: "p",
        text: "Ini lebih kepada pengalaman pribadi masing-masing orang, tergantung waktu dan tempat dimana kita berada. Banyak berita atau kasus terjadi di Jepang yang disebabkan olah orang-orang pendatang, alhasil kejadian ini menghasilkan image negatif terhadap keberadaan orang asing di Jepang. Saya sendiri pernah merasa insecure saat keluar rumah karena maraknya berita-berita negatif yang terjadi di sebabkan orang asing dari negara Vietnam. Ketika maraknya masa pandemi covid 19, Orang-orang dari negara Vietnam tidak di ijinkan pulang ke negaranya oleh pemerintahnya. Akibatnya mereka harus stay di Jepang sampai waktu tertentu tanpa pekerjaan. Selama itu benar-benar terus bermunculan macam-macam kasus yang terjadi yang kebanyakan adalah pencurian. Beberapa orang asing di konfirmasi memang mendapat perlakuan tidak baik dari lingkungan sekitar, namun saya pribadi belum pernah mengalami hal-hal negatif selama hidup di Jepang.",
      },
      { type: "p", text: "Demikianlah mengenai kehidupan di Jepang yang bisa saya share, semoga menambah wawasan kalian." },
      { type: "p", text: "Terima kasih telah membaca." },
      { type: "p", text: "*Arigatou Gozaimashita!*" },
    ],
  },
  {
    slug: "menoleh-ke-belakang-melihat-masa-perjuangan",
    title: "Menoleh ke Belakang Melihat Masa Perjuangan",
    category: "Refleksi + Perjuangan",
    author: "Khamim Hidayat",
    date: "2021-06-07",
    updated: "2021-10-20",
    readMinutes: 4,
    excerpt:
      "Foto ini diambil di Sragen pada 1 Januari 2019, di hari-hari terakhir Pelatihan Daerah. Sebuah refleksi tentang kawan-kawan yang memutuskan pulang sebelum kontrak praktik kerja selesai.",
    cover: {
      src: "/blog/menoleh-ke-belakang/cover.jpg",
      alt: "Pelatihan Daerah di Sragen, Jawa Tengah",
      width: 925,
      height: 405,
    },
    content: [
      {
        type: "p",
        text: "Foto ini diambil di Sragen, Jawa Tengah pada tanggal 1 Januari 2019. Momen ini merupakan hari-hari terakhir mengikuti Pelatihan Daerah selama 3 bulan. Saat itu kami masih berstatus sebagai Calon Peserta Praktik Kerja IM JAPAN. Kenapa di sebut Calon? karena kami masih akan di saring kembali apakah layak mengikuti program Praktik Kerja Jepang atau tidak di Pelatihan Pusat Lembang, Bandung.",
      },
      {
        type: "p",
        text: "Postingan blog ini akan membahas hal terkait beberapa kawan yang memutuskan untuk **pulang ke Indonesia sebelum selesai Kontrak Praktik Kerja**. Tulisan ini tidak bermaksud untuk **men-judge keputusan** yang mereka. Mengambil keputusan untuk Pulang Kampung sebelum Kontrak Praktik Kerja habis bukanlah perkara yang mudah. ini serius!",
      },
      { type: "p", text: "Be realize, dan mari kita jujur." },
      {
        type: "p",
        text: "Kenyataannya bahwa berada di kampung halaman bersama keluarga, sahabat dan orang-orang yang kita kenal adalah hal yang paling menyenangkan. Banyak yang bilang Kesenangan/Kebahagiaan tidak bisa dibeli dengan uang.",
      },
      {
        type: "p",
        text: "Namun tidak bisa ditepis kenyataan pula bahwa pada akhirnya banyak dari kita yang merasa bersyukur dan beruntung karena berada di Luar Negeri/Perantauan, telah membuat kita menjadi orang yang lebih kuat dan lebih mandiri.",
      },
      {
        type: "p",
        text: "Jika di tanya apakah kamu merasa beruntung bisa bekerja di Jepang? tentu jawabannya adalah \"iya\" ! Sebagian besar pasti akan mengatakan hal yang sama, namun beberapa saya yakin ada yang menjawab sebaliknya. Setiap jawaban tergantung dari pengalaman masing-masing Peserta Magang dan jawabanku tidak mewakilkan jawaban mereka.",
      },
      { type: "h", text: "Keputusan untuk bekerja ke Luar Negeri pasti telah di pertimbangkan dengan matang!" },
      {
        type: "p",
        text: "Aku ingat perkataan Sensei/Guru Bahasa Jepang Kami saat mengikuti pelatihan Daerah dan Pusat. kira-kira seperti inilah perkataanya \"Saya tidak perduli siapa kalian! Jika ada diantara kalian adalah orang kaya atau berhasil, anda tidak akan mengikuti program ini.!\" kata-kata ini sangat lugas dan terasa \"NYER!\" di dadaku.",
      },
      {
        type: "p",
        text: "Kemudian acara dilanjutkan dengan sesi tanya jawab antara Sensei dengan Murid tentang alasan mengapa kami mengikuti program ini. Beberapa jawaban diantaranya adalah ada dari kami yang tidak lulus seleksi perekrutan tentara/polisi, ada yang karena tidak bisa menyelesaikan Kuliahnya, ada yang karena bingung mau kerja apa, ingin gaji yang lebih besar, Ingin memakmurkan keluarga, dll. Ini hanya beberapa alasan dari ribuan orang yang mengikuti program pada saat itu. Tentu saja orang sebanyak itu seharusnya memiliki alasan yang banyak pula. Aku sendiri memiliki alasan khusus mengapa mengikuti program ini. Aku memiliki impian besar, besarnya segede Gunung ! (lebay banget). Untuk mencapai impian yang besar diperlukan usaha yang besar khan..*-*.",
      },
      {
        type: "img",
        src: "/blog/menoleh-ke-belakang/kelas.jpg",
        alt: "Foto satu kelas bersama wali kelas",
        width: 925,
        height: 469,
      },
      {
        type: "p",
        text: "Foto Satu Kelas bersama Wali Kelas/Guru/Sensei ( paling tengah-memakai batik) dan Murid. Aku pas berada di tengah di depan Guru😎",
      },
      {
        type: "h",
        text: "Mengapa Peserta Praktik Kerja ada yang memutuskan untuk Pulang/Mengundurkan diri sebelum kontrak kerja berakhir dan Mengapa yang lainnya memutuskan untuk stay?",
      },
      { type: "p", text: "Sebelum aku mencoba menjawab, ijinkan aku bercerita pengalamanku pribadi." },
      {
        type: "p",
        text: "Berada di Negeri yang sangat berbeda saat pertama kali, sendiri, dengan jiwa yang masih polos tak mengerti apa-apa! Yang aku sadari hanya Yes!! akhirnya pengorbanan itu telah terbayarkan ! aku sampai ! (Japan! here I come! seakan berteriak dengan hati yang menggebu karena bahagia) di sinilah kehidupan baruku akan dimulai.",
      },
      {
        type: "p",
        text: "Bertemu dengan Orang-orang baru, Bahasa yang Baru, Budaya yang baru, Peraturan yang baru.( serba baru yang enak cuma ada saat menjelang idul fitri yeah ). Hampir berbulan-bulan lamanya perasaan streess, takut, merasa horror hampir setiap hari aku rasakan. Saat berjalan menuju tempat kerja, saat berjalan sendiri, pikiranku kadang melayang, sambil ngebatin (berkata dalam hati) sedang Dimana Aku? (kaya orang linglung, setengah sadar, horror khan🎵) ini nggak boleh lo, itu nggak boleh lo, salah, marah, salah, marah (dimarah-marahi maksutnya) (karena nggak tahu bahasa , nggak paham sama perintah mereka).",
      },
      { type: "quote", text: "\"Aku nggak tahu, please jangan perlakukan aku seperti ini!\". 😣" },
      { type: "p", text: "Ini terjadi di bulan-bulan pertama saat aku masih newbee di Jepang." },
      {
        type: "p",
        text: "Dengan berjalannya waktu kami belajar, dan bahasa yang baru ini mulai terbiasa dan bisa dipahami. Semua tampak berjalan begitu saja tapi tidak semudah itu. Banyak sekali jenis pekerjaan yang tersedia bagi Perserta Praktik Kerja, dari yang paling mudah sampai yang paling berat. Paling berat disini maksutnya bukan mengangkat beban-beban berat (walaupun sebagian besar memang begitu), tapi pekerjaanya yang susah dan harus berfikir!. Jika kita tidak berfikir bisa terjadi hal-hal yang tidak diinginkan seperti kecelakaan yang akan merugikan orang lain bahkan diri kita sendiri. Selain itu orang-orang Jepang yang bekerja di sektor ini terkenal keras.",
      },
      { type: "p", text: "Dengan ilustrasi sedikit itu tersampaikan maksutku nggak ya ?" },
      {
        type: "p",
        text: "Karena perasaan yang seperti itu tidak hanya sesekali tapi sering Peserta Praktek Kerja merasa \"ingin pulang\", merasa tidak betah, (Oweslah, Aku Lelah 😩), bahkan berfikiran untuk kabur dari program ini. Namun kabur bisa berakibat serius pada situasi mental! (aku sangat menghindari keputusan ini).",
      },
      {
        type: "p",
        text: "Saat pikiran terasa terbebani oleh hal-hal yang tidak menyenangkan, sedih atau merasa terjerat dalam situasi sulit memang pada akhirnya yang terbesit dalam pikiran adalah Bali Wae po Yo? ( Pulang saja kali ya). Tapi jika menoleh kebelakang, mengingat masa-masa sulit dan perjuangan saat itu, kemudian menyadari bahwa tujuanku masih belum sepenuhnya berhasil, aku rasa \"Sabar\" menjadi kata yang menguatkan.",
      },
      {
        type: "p",
        text: "Setiap manusia memiliki tujuan dan goal yang berbeda-beda. Dititik mana tujuan dan goal itu dianggap selesai tidak ada standarnya. Tujuan dan Goal yang terasa selesai kadang di rasakan saat setelah suatu keputusan itu di ambil.",
      },
      {
        type: "p",
        text: "Keputusan yang telah diambil beberapa kawan-kawan kami adalah bukan perkara mudah, dan pasti sudah pikirkan dengan mantap. Aku merasa takjub dengan keputusan mereka itu. Mereka berani mengambil keputusan dan berani memulai lebih dulu \"Start\" yang akan dihadapi kemudian.",
      },
      {
        type: "quote",
        text: "\"Be strong and move on, It's time to be happy again\". *(Jadilah Kuat dan Maju, Saatnya untuk bahagia lagi)*",
      },
      { type: "p", text: "Thank you for reading." },
      { type: "p", text: "どうもありがとうございました❕" },
    ],
  },
]

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug)
}

// Terbaru di atas
export function getSortedPosts() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
}

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]

/** 14.08.2021 */
export function formatDateShort(iso: string) {
  const [y, m, d] = iso.split("-")
  return `${d}.${m}.${y}`
}

/** 20 Okt 2021 */
export function formatDateLong(iso: string) {
  const [y, m, d] = iso.split("-")
  return `${Number(d)} ${BULAN[Number(m) - 1]} ${y}`
}
