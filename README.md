# Balikin — Icon Library

Pustaka ikon aplikasi Balikin (Lost & Found) dengan bahasa visual
**Sudut Enam (Hexcut)**: minimalis satu warna, seluruh garis jatuh di sumbu
kisi heksagon yang sama dengan tile kategori, avatar, dan tombol tambah di app.

## Aturan bentuk

- Kanvas `viewBox="0 0 100 100"`, area aman 8–92.
- Sumbu garis: 0°, 30°, 60°, 90°. Sudut bidang **dipangkas 60°**, tidak pernah dibulatkan.
- Sambungan garis **mitre** (tajam) — tanda tangan gaya ini.
- Tebal garis: 7 (struktur utama), 6.5 (elemen kedua), 5.5 (detail).
- Struktur memakai `currentColor`; garis pendukung `opacity 0.3`.
- Aksen emas `#C8952E` maksimal satu elemen per ikon.
- Bintang kilau/apresiasi memakai **empat sudut**, tidak pernah enam: dua
  segitiga bertumpuk membentuk Star of David, simbol religius yang tidak
  diinginkan di konteks ini.

`src/icons/hexcut/base.tsx` memuat aturan ini beserta pembantu geometri
(`hexFlat`, `hexPointy`, `cut`, `star4`) supaya ikon baru tetap satu kisi.

## Isi pustaka (86 ikon, dua varian)

Dikelompokkan mengikuti rekap ikon aplikasi Balikin.

| Kelompok | File | Komponen |
| --- | --- | --- |
| Navigasi & Sistem UI (17) | `System.tsx`, `Actions.tsx` | `SysSignal` `SysWifi` `SysWifiOff` `SysBattery` `ArrowUp` `ArrowForward` `ActionBack` `ArrowDownload` `ChevronDown` `ActionClose` `ActionRefresh` `ActionShare` `MapLayers` `NavArrow` `ActionNotification` `ActionBookmark` `ActionMail` |
| Bottom Bar & Akses Cepat (8) | `Nav.tsx` | `NavHome` `NavExplore` `NavGrid` `NavAddPost` `ActionChat` `NavProfile` `NavReports` `NavHistory` |
| Form, Media & Peta (15) | `Form.tsx` | `NavSearch` `ActionPlus` `FormCheckbox` `FormRadio` `FormToggle` `FormEye` `FormEyeOff` `ActionShutter` `ActionFlash` `ActionScan` `FormPin` `FormCalendar` `ActionCamera` `ActionLocation` `ActionFilter` |
| Badge, Gamifikasi & Status (19) | `Status.tsx`, `Badges.tsx` | `StatusLost` `StatusFound` `StatusReturned` `StatusRejected` `StatusAlert` `VerifiedBadge` `VerifiedMini` `BadgeShield` `BadgeLock` `BadgeStar` `BadgeCrown` `BadgeEye` `BadgeScales` `RewardBadge` `RewardCoin` `ActionReputation` `ActionSparkle` `ActionTip` `ActionSettings` |
| Keuangan, Tip & Bagikan (5) | `Pay.tsx` | `PayQr` `PayBank` `PayEwallet` `PayCard` `ActionCopyLink` |
| Lencana Pencapaian (9) | `Achievements.tsx` | `AchFirstReturn` `AchTenItems` `AchFastReply` `AchEagleEye` `AchDocs` `AchNightWatch` `AchZeroDispute` `AchMover` `AchLegend` |
| Kategori Barang (13) | `Items.tsx` | `ItemBagWallet` `ItemBag` `ItemWallet` `ItemKeys` `ItemElectronics` `ItemDocuments` `ItemIdCard` `ItemGlasses` `ItemUmbrella` `ItemTumbler` `ItemPets` `ItemJewelry` `ItemOthers` |

### Yang sengaja tidak digambar

Logo layanan pihak ketiga — WhatsApp, Instagram, Telegram, logo bank —
**tidak** digambar ulang dalam gaya ini. Merek dagang harus memakai aset resmi
masing-masing supaya sah dan langsung dikenali pengguna. `PayBank`,
`PayEwallet`, dan `ActionShare` dipakai untuk metode/tindakannya; logo resmi
dipakai untuk kanalnya.

### Varian garis dan padat

Setiap ikon punya pasangan padat dengan akhiran `Filled` (`Solid.tsx`) — total
172 komponen. Padat untuk keadaan aktif atau terpilih, garis untuk keadaan
biasa:

```tsx
import { NavHome, NavHomeFilled } from "@/icons/hexcut";

<NavHome size={24} />        // tab tidak aktif
<NavHomeFilled size={24} />  // tab aktif
```

Aturan varian padat: siluet dan kisi 60°-nya persis sama dengan varian garis
supaya keduanya bertukar tanpa terasa bergeser; detail di dalam badan
**dilubangi** dengan `fill-rule="evenodd"` — bukan digambar dengan warna latar —
jadi ikon tetap benar di atas latar apa pun; tali, gagang, dan penghubung tetap
berupa garis karena dipadatkan justru menggumpal di ukuran kecil.
`balikinIconsFilled` adalah registry versi padatnya.

### Lencana pencapaian

Lencana selalu tampil **di dalam wadah heksagon** — teal saat terbuka, abu saat
terkunci — jadi bentuknya tidak memakai bingkai heksagon lagi dan garisnya lebih
tebal (7.5–9) supaya tetap terbaca pada ±26 px. Saat terkunci, panggil dengan
`accent="currentColor"` supaya seluruh bentuk meredup bersama:

```tsx
<AchFirstReturn size={26} accent={terbuka ? "#F3D77C" : "currentColor"} />
```

### Dua pengecualian bentuk

Hanya dua bentuk yang keluar dari kisi heksagon, keduanya demi keterbacaan:

1. `BadgeStar` (rating) memakai bintang **lima** sudut — bintang empat terbaca
   "kilau", bukan "nilai".
2. `AchNightWatch` (Jaga Malam) memakai **lengkung** — sabit bersudut terbaca
   sebagai heksagon bolong, bukan bulan.

## Pemakaian

```tsx
import { ItemKeys, StatusLost } from "@/icons/hexcut";

<ItemKeys size={24} />                   // ikut warna teks (currentColor)
<StatusLost size={20} />                 // pin merah, warnanya sudah semantik
<ItemKeys size={24} accent="#F3D77C" />  // ganti aksen emas
```

Setiap ikon menerima seluruh props `<svg>`. `size` mengatur lebar dan tinggi
sekaligus. `StatusLost` dan `StatusFound` menerima `tone` untuk warna semantiknya.
`balikinIcons` mengekspor daftar lengkap beserta label Indonesia.

## File SVG

`assets/svg/` — 76 file `.svg` mandiri berwarna teal `#1B7A6E`, siap di-drag ke
Figma atau dipakai sebagai aset gambar.
`assets/svg-tintable/` — versi yang mempertahankan `currentColor`, untuk
di-inline ke HTML dan diwarnai lewat CSS.

Keduanya hasil generate, bukan file yang diedit tangan. Regenerate kapan saja:

```bash
npm install
npm run export:svg              # teal #1B7A6E ke assets/svg
npm run export:svg:white        # putih, untuk latar teal
npm run export:svg:tintable     # currentColor
node scripts/export-svg.mjs --color=#BC5A3C --out=assets/svg-merah
```

Script merender komponen lewat `react-dom/server`, jadi tidak butuh browser dan
hasilnya selalu identik dengan komponen React-nya.

## Pratinjau

- `preview/pustaka-sudut-enam.html` — lembar pustaka lengkap, uji 20 px, dan
  tiruan layar app (pilih kategori, tab bar, baris laporan, status).
- `preview/ceklis-arah-gaya.html`, `preview/tas-dompet-arah-gaya.html`,
  `preview/empat-ikon-tiga-gaya.html` — catatan perbandingan tiga arah gaya
  yang mengantar ke pilihan Sudut Enam.

`explorations/` menyimpan dua arah gaya yang tidak dipilih sebagai catatan
keputusan; jangan diimpor dari kode app.
