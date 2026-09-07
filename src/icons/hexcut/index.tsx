export * from "./base";
export * from "./System";
export * from "./Nav";
export * from "./Form";
export * from "./Items";
export * from "./Status";
export * from "./Badges";
export * from "./Actions";
export * from "./Pay";
export * from "./Achievements";

import * as Sys from "./System";
import * as Nav from "./Nav";
import * as Form from "./Form";
import * as Items from "./Items";
import * as Status from "./Status";
import * as Badges from "./Badges";
import * as Actions from "./Actions";
import * as Pay from "./Pay";
import * as Ach from "./Achievements";

const all: Record<string, any> = { ...Sys, ...Nav, ...Form, ...Items, ...Status, ...Badges, ...Actions, ...Pay, ...Ach };

const g = (group: string, rows: [string, string][]) => ({
  group,
  items: rows.map(([id, label]) => ({ id, label, Icon: all[id] })),
});

/** Pustaka lengkap, dikelompokkan mengikuti rekap ikon aplikasi Balikin. */
export const balikinIcons = [
  g("Navigasi & Sistem UI", [
    ["SysSignal", "Sinyal"], ["SysWifi", "Wi-Fi"], ["SysWifiOff", "Wi-Fi terputus"],
    ["SysBattery", "Baterai"], ["ArrowUp", "Ke atas"], ["ArrowForward", "Lanjut"],
    ["ActionBack", "Kembali"], ["ArrowDownload", "Unduh"], ["ChevronDown", "Buka"],
    ["ActionClose", "Tutup"], ["ActionRefresh", "Muat ulang"], ["ActionShare", "Bagikan"],
    ["MapLayers", "Layer peta"], ["NavArrow", "Penunjuk arah"],
    ["ActionNotification", "Notifikasi"], ["ActionBookmark", "Simpan"],
    ["ActionMail", "Email"],
  ]),
  g("Bottom Bar & Akses Cepat", [
    ["NavHome", "Beranda"], ["NavExplore", "Jelajah"], ["NavGrid", "Semua menu"],
    ["NavAddPost", "Lapor"], ["ActionChat", "Chat"], ["NavProfile", "Profil"],
    ["NavReports", "Laporan saya"], ["NavHistory", "Riwayat"],
  ]),
  g("Form, Media & Peta", [
    ["NavSearch", "Cari"], ["ActionPlus", "Tambah"], ["FormCheckbox", "Kotak centang"],
    ["FormRadio", "Pilihan tunggal"], ["FormToggle", "Sakelar"], ["FormEye", "Tampilkan"],
    ["FormEyeOff", "Sembunyikan"], ["ActionShutter", "Ambil foto"], ["ActionFlash", "Flash"],
    ["ActionScan", "Pindai"], ["FormPin", "Titik lokasi"], ["FormCalendar", "Kalender"],
    ["ActionCamera", "Kamera"], ["ActionLocation", "Peta"], ["ActionFilter", "Filter"],
  ]),
  g("Badge, Gamifikasi & Status", [
    ["StatusLost", "Hilang"], ["StatusFound", "Ditemukan"], ["StatusReturned", "Sudah kembali"],
    ["StatusRejected", "Ditolak"], ["StatusAlert", "Perhatian"], ["VerifiedBadge", "Terverifikasi"],
    ["VerifiedMini", "Terverifikasi padat"], ["BadgeShield", "Terlindungi"], ["BadgeLock", "Terkunci"],
    ["BadgeStar", "Rating"], ["BadgeCrown", "Mahkota"], ["BadgeEye", "Mata elang"],
    ["BadgeScales", "Adil"], ["RewardBadge", "Apresiasi"], ["RewardCoin", "Poin"],
    ["ActionReputation", "Reputasi"], ["ActionSparkle", "Sorotan AI"], ["ActionTip", "Tip"],
    ["ActionSettings", "Pengaturan"],
  ]),
  g("Keuangan, Tip & Bagikan", [
    ["PayQr", "QRIS"], ["PayBank", "Bank"], ["PayEwallet", "E-wallet"],
    ["PayCard", "Kartu ATM"], ["ActionCopyLink", "Salin tautan"],
  ]),
  g("Lencana Pencapaian", [
    ["AchFirstReturn", "Balik Pertama"], ["AchTenItems", "10 Barang"],
    ["AchFastReply", "Balas Cepat"], ["AchEagleEye", "Mata Elang"],
    ["AchDocs", "Dokumen"], ["AchNightWatch", "Jaga Malam"],
    ["AchZeroDispute", "Nol Sengketa"], ["AchMover", "Penggerak"],
    ["AchLegend", "Legenda"],
  ]),
  g("Kategori Barang", [
    ["ItemBagWallet", "Tas & Dompet"], ["ItemBag", "Tas"], ["ItemWallet", "Dompet"],
    ["ItemKeys", "Kunci"], ["ItemElectronics", "HP & Elektronik"], ["ItemDocuments", "Dokumen"],
    ["ItemIdCard", "Kartu identitas"], ["ItemGlasses", "Kacamata"], ["ItemUmbrella", "Payung"],
    ["ItemTumbler", "Tumbler"], ["ItemPets", "Hewan"], ["ItemJewelry", "Perhiasan"],
    ["ItemOthers", "Lainnya"],
  ]),
];
