# Balikin — Icon Library

Ikon aplikasi Balikin (Lost & Found) bergaya **Korean Soft 3D / Claymorphism**.

## Kategori 2 — Kategori Barang (Item Types)

`src/icons/ItemCategoryIcons.tsx` mengekspor 8 komponen React SVG:

| Komponen | Kategori | Catatan visual |
| --- | --- | --- |
| `ItemElectronics` | Elektronik | Smartphone 3D dengan lampu indikator emas |
| `ItemWallet` | Dompet | Dompet 3D terbuka dengan kartu ID melayang |
| `ItemKeys` | Kunci | Gantungan kunci 3D dengan ring membal |
| `ItemDocuments` | Dokumen | Map dokumen 3D dengan jepitan kertas emas |
| `ItemBag` | Tas | Ransel 3D melengkung dengan kantong depan |
| `ItemPets` | Hewan | Kalung hewan 3D dengan liontin tag emas |
| `ItemJewelry` | Perhiasan | Cincin 3D mengkilap dengan batu teal |
| `ItemOthers` | Lainnya | Kotak hadiah 3D dengan pita emas |

Ekspor pendukung: `balikinTokens` (token warna resmi), `itemCategoryIcons`
(daftar metadata) dan `ItemCategoryIconGrid` (grid pratinjau).

### Pemakaian

```tsx
import { ItemWallet, ItemKeys } from "@/icons/ItemCategoryIcons";

<ItemWallet size={40} />
<ItemKeys size={24} onClick={pilihKategori} />
```

Setiap ikon menerima seluruh props `<svg>`. `size` mengatur lebar dan tinggi
sekaligus, dan ID gradien dibuat unik per instance lewat `React.useId()`
sehingga aman dirender berkali-kali dalam satu halaman.

### Aturan yang dipatuhi

- `viewBox="0 0 100 100"`, gradien tersimpan di `<defs>` dengan ID unik.
- Drop shadow utama `dx=0 dy=6 stdDeviation=5 #211C16 @ 12%`.
- Top edge highlight beropasitas rendah pada tiap bentuk utama.
- Hanya token warna resmi Balikin (teal, emas, netral) yang dipakai.

## Pratinjau

`preview/kategori2-item-icons.html` — lembar spesimen (React + Babel via CDN):
grid 8 ikon, ramp ukuran 40/24/16 px, penguji latar (canvas / struktur / emas /
malam), dan daftar token warna. Buka langsung di browser.
