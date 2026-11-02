/* Kopi Banua - script.js */
const NOMOR_WA = "6285117278458";
const MENU = [
  {
    id: "kopi-susu",
    nama: "Kopi Susu Gula Aren",
    harga: 18000,
    kategori: "kopi",
    gambar: "img/kopi-susu.jpg",
    alt: "Segelas kopi susu gula aren",
    deskripsi: "Espresso robusta, susu segar, dan gula aren Kandangan.",
    terlaris: true,
  },
  {
    id: "americano",
    nama: "Americano Panas",
    harga: 15000,
    kategori: "kopi",
    gambar: "img/americano.jpg",
    alt: "Secangkir americano panas",
    deskripsi: "Espresso robusta dengan air panas, bersih dan tegas.",
  },
  {
    id: "kopi-tubruk",
    nama: "Kopi Tubruk Banua",
    harga: 12000,
    kategori: "kopi",
    gambar: "img/kopi-tubruk.jpg",
    alt: "Secangkir kopi tubruk",
    deskripsi: "Seduhan tradisional, pekat dan harum.",
  },
  {
    id: "cappuccino",
    nama: "Cappuccino",
    harga: 20000,
    kategori: "kopi",
    gambar: "img/cappuccino.jpg",
    alt: "Cappuccino dengan latte art",
    deskripsi: "Espresso, susu steam, dan busa lembut.",
  },
  {
    id: "teh-tarik",
    nama: "Teh Tarik",
    harga: 14000,
    kategori: "non-kopi",
    gambar: "img/teh-tarik.jpg",
    alt: "Segelas teh tarik berbusa",
    deskripsi: "Teh pekat dan susu yang ditarik hingga berbusa.",
  },
  {
    id: "roti-bakar",
    nama: "Roti Bakar Srikaya",
    harga: 16000,
    kategori: "makanan",
    gambar: "img/roti-bakar-srikaya.jpg",
    alt: "Roti bakar srikaya",
    deskripsi: "Roti bakar lembut dengan selai srikaya.",
  },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");

function simpan(kunci, nilai) {
  try {
    localStorage.setItem(kunci, JSON.stringify(nilai));
  } catch (e) {
    /* abaikan */
  }
}
function muat(kunci, awal) {
  try {
    return JSON.parse(localStorage.getItem(kunci)) ?? awal;
  } catch (e) {
    return awal;
  }
}

function toast(pesan) {
  const el = $("#toast");
  el.textContent = pesan;
  el.classList.add("tampil");
  clearTimeout(toast.waktu);
  toast.waktu = setTimeout(() => el.classList.remove("tampil"), 2200);
}

/* Tema gelap */
function aturTema(tema) {
  document.documentElement.setAttribute("data-tema", tema);
  $("#tombol-tema").textContent =
    tema === "gelap" ? "\u2600\uFE0F" : "\uD83C\uDF19";
  simpan("tema", tema);
}
aturTema(
  muat(
    "tema",
    matchMedia("(prefers-color-scheme: dark)").matches ? "gelap" : "terang",
  ),
);
$("#tombol-tema").addEventListener("click", () => {
  aturTema(
    document.documentElement.getAttribute("data-tema") === "gelap"
      ? "terang"
      : "gelap",
  );
});

/* Menu hamburger */
const navigasi = $("#navigasi");
const tombolMenu = $("#tombol-menu");
tombolMenu.addEventListener("click", () => {
  const buka = navigasi.classList.toggle("tampil");
  tombolMenu.setAttribute("aria-expanded", buka);
});
$$("nav a").forEach((a) =>
  a.addEventListener("click", () => {
    navigasi.classList.remove("tampil");
    tombolMenu.setAttribute("aria-expanded", "false");
  }),
);

/* Efek ketik */
const kalimat = [
  "disangrai setiap pagi.",
  "diseduh dengan sepenuh hati.",
  "dari petani Kalimantan Selatan.",
];
let k = 0,
  h = 0,
  hapus = false;
function ketik() {
  const teks = kalimat[k];
  h += hapus ? -1 : 1;
  $("#ketik").textContent = teks.slice(0, h);
  let jeda = hapus ? 40 : 80;
  if (!hapus && h === teks.length) {
    hapus = true;
    jeda = 1500;
  } else if (hapus && h === 0) {
    hapus = false;
    k = (k + 1) % kalimat.length;
    jeda = 400;
  }
  setTimeout(ketik, jeda);
}
ketik();

/* Status buka (WITA) */
function waktuWita() {
  const bagian = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Makassar",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const ambil = (t) => bagian.find((p) => p.type === t).value;
  const hari = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    ambil("weekday"),
  );
  return { hari, menit: Number(ambil("hour")) * 60 + Number(ambil("minute")) };
}
function perbaruiStatus() {
  const { hari, menit } = waktuWita();
  const akhirPekan = hari === 0 || hari === 6;
  const [buka, tutup] = akhirPekan ? [9 * 60, 23 * 60] : [8 * 60, 22 * 60];
  const sedangBuka = menit >= buka && menit < tutup;
  const el = $("#status-buka");
  el.textContent = sedangBuka ? "Buka sekarang" : "Sedang tutup";
  el.className = "status-buka " + (sedangBuka ? "buka" : "tutup");
  const jam = (m) =>
    String(Math.floor(m / 60)).padStart(2, "0") +
    "." +
    String(m % 60).padStart(2, "0");
  $("#jam-sekarang").textContent =
    "Sekarang pukul " +
    jam(menit) +
    " WITA. " +
    (sedangBuka
      ? "Kami buka sampai " + jam(tutup) + "."
      : "Kami buka kembali pukul " + jam(buka) + ".");
  $$("tbody tr").forEach((tr) =>
    tr.classList.toggle(
      "hari-ini",
      tr.dataset.hari.split(",").includes(String(hari)),
    ),
  );
}
perbaruiStatus();
setInterval(perbaruiStatus, 60000);

/* Keranjang */
let keranjang = muat("keranjang", {});
function totalKeranjang() {
  return Object.entries(keranjang).reduce(
    (t, [id, q]) => t + MENU.find((m) => m.id === id).harga * q,
    0,
  );
}
function gambarKeranjang() {
  const daftar = $("#isi-keranjang");
  daftar.innerHTML = "";
  const entri = Object.entries(keranjang);
  if (!entri.length)
    daftar.innerHTML = '<li class="kosong">Keranjang masih kosong.</li>';
  entri.forEach(([id, q]) => {
    const m = MENU.find((x) => x.id === id);
    const li = document.createElement("li");
    li.className = "item-keranjang";
    li.innerHTML =
      "<span>" +
      m.nama +
      "<br><small>" +
      rupiah(m.harga) +
      "</small></span>" +
      '<span class="kontrol-jumlah"><button type="button" data-aksi="kurang" data-id="' +
      id +
      '" aria-label="Kurangi">-</button><span>' +
      q +
      '</span><button type="button" data-aksi="tambah" data-id="' +
      id +
      '" aria-label="Tambah">+</button></span>';
    daftar.appendChild(li);
  });
  $("#total-keranjang").textContent = rupiah(totalKeranjang());
  $("#jumlah-keranjang").textContent = Object.values(keranjang).reduce(
    (a, b) => a + b,
    0,
  );
  simpan("keranjang", keranjang);
}
function ubahJumlah(id, delta) {
  keranjang[id] = (keranjang[id] || 0) + delta;
  if (keranjang[id] <= 0) delete keranjang[id];
  gambarKeranjang();
}
function panelKeranjang(buka) {
  $("#panel-keranjang").classList.toggle("terbuka", buka);
  $("#panel-keranjang").setAttribute("aria-hidden", !buka);
  $("#tirai").hidden = !buka;
}
$("#buka-keranjang").addEventListener("click", () => panelKeranjang(true));
$("#tutup-keranjang").addEventListener("click", () => panelKeranjang(false));
$("#tirai").addEventListener("click", () => panelKeranjang(false));
$("#isi-keranjang").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) ubahJumlah(b.dataset.id, b.dataset.aksi === "tambah" ? 1 : -1);
});
$("#kosongkan").addEventListener("click", () => {
  keranjang = {};
  gambarKeranjang();
});
$("#checkout").addEventListener("click", () => {
  if (!Object.keys(keranjang).length) return toast("Keranjang masih kosong");
  const baris = Object.entries(keranjang).map(
    ([id, q]) => "- " + MENU.find((m) => m.id === id).nama + " x" + q,
  );
  const pesan =
    "Halo Kopi Banua, saya ingin memesan:\n" +
    baris.join("\n") +
    "\nTotal: " +
    rupiah(totalKeranjang());
  window.open(
    "https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan),
    "_blank",
    "noopener",
  );
});

/* Menu: render, filter, cari */
let kategori = "semua";
function gambarMenu() {
  const kata = $("#cari-menu").value.trim().toLowerCase();
  const hasil = MENU.filter(
    (m) =>
      (kategori === "semua" || m.kategori === kategori) &&
      m.nama.toLowerCase().includes(kata),
  );
  $("#grid-menu").innerHTML = hasil
    .map(
      (m) =>
        '<article class="kartu-menu">' +
        (m.terlaris ? '<span class="lencana-menu">Terlaris</span>' : "") +
        '<img src="' +
        m.gambar +
        '" alt="' +
        m.alt +
        '" loading="lazy" width="300" height="188">' +
        "<h3>" +
        m.nama +
        "</h3><p>" +
        m.deskripsi +
        "</p>" +
        '<div class="baris-kartu"><p class="harga">' +
        rupiah(m.harga) +
        '</p><button type="button" class="tombol-tambah" data-id="' +
        m.id +
        '">+ Keranjang</button></div></article>',
    )
    .join("");
  $("#menu-kosong").hidden = hasil.length > 0;
}
$("#cari-menu").addEventListener("input", gambarMenu);
$("#filter").addEventListener("click", (e) => {
  const c = e.target.closest(".chip");
  if (!c) return;
  $$(".chip").forEach((x) => x.classList.toggle("aktif", x === c));
  kategori = c.dataset.kategori;
  gambarMenu();
});
$("#grid-menu").addEventListener("click", (e) => {
  const b = e.target.closest(".tombol-tambah");
  if (!b) return;
  ubahJumlah(b.dataset.id, 1);
  toast(MENU.find((m) => m.id === b.dataset.id).nama + " masuk keranjang");
});

/* Pilihan menu pada form */
MENU.forEach((m) =>
  $("#menu-pilih").add(new Option(m.nama + " - " + rupiah(m.harga), m.id)),
);

/* Statistik berhitung */
function hitung(el) {
  const target = Number(el.dataset.target);
  const mulai = performance.now();
  (function langkah(t) {
    const p = Math.min((t - mulai) / 1400, 1);
    const nilai = Math.round(target * p);
    el.textContent =
      el.dataset.format === "tahun"
        ? nilai
        : nilai.toLocaleString("id-ID") + (target >= 1200 ? "+" : "");
    if (p < 1) requestAnimationFrame(langkah);
  })(mulai);
}

/* Muncul saat digulir */
const pengamat = new IntersectionObserver(
  (daftar) =>
    daftar.forEach((d) => {
      if (!d.isIntersecting) return;
      d.target.classList.add("terlihat");
      $$(".angka", d.target).forEach(hitung);
      pengamat.unobserve(d.target);
    }),
  { threshold: 0.15 },
);
$$("section").forEach((s) => {
  s.classList.add("muncul-scroll");
  pengamat.observe(s);
});

/* Scrollspy, progres baca, tombol ke atas */
const bagian = $$("main section");
function saatGulir() {
  const tinggi = document.documentElement.scrollHeight - innerHeight;
  $("#progres").style.width = (tinggi > 0 ? (scrollY / tinggi) * 100 : 0) + "%";
  $("#ke-atas").hidden = scrollY < 500;
  let aktif = "";
  bagian.forEach((s) => {
    if (scrollY + 120 >= s.offsetTop) aktif = s.id;
  });
  $$("nav a").forEach((a) =>
    a.classList.toggle("aktif", a.getAttribute("href") === "#" + aktif),
  );
}
addEventListener("scroll", saatGulir, { passive: true });
saatGulir();
$("#ke-atas").addEventListener("click", () =>
  scrollTo({ top: 0, behavior: "smooth" }),
);

/* Lightbox galeri */
$$(".grid-galeri figure").forEach((f) =>
  f.addEventListener("click", () => {
    const img = $("img", f);
    $("#gambar-besar").src = img.src;
    $("#gambar-besar").alt = img.alt;
    $("#lightbox").hidden = false;
  }),
);
$("#lightbox").addEventListener("click", () => {
  $("#lightbox").hidden = true;
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $("#lightbox").hidden = true;
    panelKeranjang(false);
  }
});

/* Slider testimoni */
const slide = $$(".testimoni");
let nomor = 0,
  timer;
slide.forEach((_, i) => {
  const t = document.createElement("span");
  t.addEventListener("click", () => {
    tampilSlide(i);
    mulaiOtomatis();
  });
  $("#titik").appendChild(t);
});
function tampilSlide(i) {
  nomor = (i + slide.length) % slide.length;
  slide.forEach((s, x) => s.classList.toggle("aktif", x === nomor));
  $$("#titik span").forEach((t, x) => t.classList.toggle("aktif", x === nomor));
}
function mulaiOtomatis() {
  clearInterval(timer);
  timer = setInterval(() => tampilSlide(nomor + 1), 5000);
}
$("#sebelumnya").addEventListener("click", () => {
  tampilSlide(nomor - 1);
  mulaiOtomatis();
});
$("#berikutnya").addEventListener("click", () => {
  tampilSlide(nomor + 1);
  mulaiOtomatis();
});
tampilSlide(0);
mulaiOtomatis();

/* Form pesanan: estimasi, validasi, kirim WhatsApp */
const form = $("#form-pesan");
function hitungEstimasi() {
  const m = MENU.find((x) => x.id === $("#menu-pilih").value);
  const jumlah = Math.max(1, Number($("#jumlah").value) || 1);
  const topping = $$("input[name=topping]:checked").reduce(
    (t, c) => t + Number(c.value),
    0,
  );
  $("#estimasi").textContent = rupiah(m ? (m.harga + topping) * jumlah : 0);
}
form.addEventListener("input", hitungEstimasi);
$("#catatan").addEventListener("input", (e) => {
  $("#hitung-catatan").textContent = e.target.value.length;
});

function cekKolom(el) {
  const pesan = $('.galat[data-untuk="' + el.id + '"]');
  let galat = "";
  if (el.validity.valueMissing) galat = "Kolom ini wajib diisi.";
  else if (el.validity.tooShort)
    galat = "Minimal " + el.minLength + " karakter.";
  else if (el.validity.patternMismatch)
    galat = "Format salah. Contoh: 081234567890";
  el.classList.toggle("salah", Boolean(galat));
  el.classList.toggle("benar", !galat && el.value !== "");
  if (pesan) pesan.textContent = galat;
  return !galat;
}
$$("#nama, #wa, #menu-pilih").forEach((el) =>
  el.addEventListener("blur", () => cekKolom(el)),
);
$("#wa").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = $$("#nama, #wa, #menu-pilih").map(cekKolom).every(Boolean);
  if (!valid) return toast("Periksa kembali isian Anda");
  const m = MENU.find((x) => x.id === $("#menu-pilih").value);
  const topping = $$("input[name=topping]:checked").map((c) => c.dataset.nama);
  const pesan = [
    "Halo Kopi Banua, saya " +
      $("#nama").value.trim() +
      " (" +
      $("#wa").value +
      ").",
    "Pesanan: " + m.nama + " x" + $("#jumlah").value,
    "Topping: " + (topping.join(", ") || "-"),
    "Cara ambil: " + $("input[name=ambil]:checked").value,
    "Catatan: " + ($("#catatan").value.trim() || "-"),
    "Estimasi: " + $("#estimasi").textContent,
  ].join("\n");
  window.open(
    "https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan),
    "_blank",
    "noopener",
  );
  toast("Membuka WhatsApp...");
  form.reset();
  $$("#form-pesan .benar, #form-pesan .salah").forEach((x) =>
    x.classList.remove("benar", "salah"),
  );
  hitungEstimasi();
});

gambarMenu();
gambarKeranjang();
