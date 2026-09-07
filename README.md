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

## Isi pustaka (76 ikon)

Dikelompokkan mengikuti rekap ikon aplikasi Balikin.

| Kelompok | File | Komponen |
| --- | --- | --- |
| Navigasi & Sistem UI (16) | `System.tsx`, `Actions.tsx` | `SysSignal` `SysWifi` `SysWifiOff` `SysBattery` `ArrowUp` `ArrowForward` `ActionBack` `ArrowDownload` `ChevronDown` `ActionClose` `ActionRefresh` `ActionShare` `MapLayers` `NavArrow` `ActionNotification` `ActionBookmark` |
| Bottom Bar & Akses Cepat (8) | `Nav.tsx` | `NavHome` `NavExplore` `NavGrid` `NavAddPost` `ActionChat` `NavProfile` `NavReports` `NavHistory` |
| Form, Media & Peta (15) | `Form.tsx` | `NavSearch` `ActionPlus` `FormCheckbox` `FormRadio` `FormToggle` `FormEye` `FormEyeOff` `ActionShutter` `ActionFlash` `ActionScan` `FormPin` `FormCalendar` `ActionCamera` `ActionLocation` `ActionFilter` |
| Badge, Gamifikasi & Status (19) | `Status.tsx`, `Badges.tsx` | `StatusLost` `StatusFound` `StatusReturned` `StatusRejected` `StatusAlert` `VerifiedBadge` `VerifiedMini` `BadgeShield` `BadgeLock` `BadgeStar` `BadgeCrown` `BadgeEye` `BadgeScales` `RewardBadge` `RewardCoin` `ActionReputation` `ActionSparkle` `ActionTip` `ActionSettings` |
| Keuangan, Tip & Bagikan (5) | `Pay.tsx` | `PayQr` `PayBank` `PayEwallet` `PayCard` `ActionCopyLink` |
| Kategori Barang (13) | `Items.tsx` | `ItemBagWallet` `ItemBag` `ItemWallet` `ItemKeys` `ItemElectronics` `ItemDocuments` `ItemIdCard` `ItemGlasses` `ItemUmbrella` `ItemTumbler` `ItemPets` `ItemJewelry` `ItemOthers` |

### Yang sengaja tidak digambar

Logo layanan pihak ketiga — WhatsApp, Instagram, Telegram, logo bank —
**tidak** digambar ulang dalam gaya ini. Merek dagang harus memakai aset resmi
masing-masing supaya sah dan langsung dikenali pengguna. `PayBank`,
`PayEwallet`, dan `ActionShare` dipakai untuk metode/tindakannya; logo resmi
dipakai untuk kanalnya.

### Pengecualian bentuk

`BadgeStar` (rating) memakai bintang **lima** sudut, satu-satunya bentuk yang
keluar dari kisi heksagon: bintang empat terbaca "kilau", bukan "nilai".

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

## Pratinjau

- `preview/pustaka-sudut-enam.html` — lembar pustaka lengkap, uji 20 px, dan
  tiruan layar app (pilih kategori, tab bar, baris laporan, status).
- `preview/ceklis-arah-gaya.html`, `preview/tas-dompet-arah-gaya.html`,
  `preview/empat-ikon-tiga-gaya.html` — catatan perbandingan tiga arah gaya
  yang mengantar ke pilihan Sudut Enam.

`explorations/` menyimpan dua arah gaya yang tidak dipilih sebagai catatan
keputusan; jangan diimpor dari kode app.
