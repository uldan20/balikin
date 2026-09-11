import * as React from "react";
import { Hexcut, hexFlat, hexPointy, cut, star4, burst, IconProps, tokens } from "./base";

/**
 * VARIAN PADAT (filled) untuk seluruh pustaka Sudut Enam.
 *
 * Dipakai untuk keadaan aktif/terpilih — tab yang sedang dibuka, kategori yang
 * dipilih, status yang menonjol — berpasangan dengan varian garis untuk keadaan
 * biasa. Aturannya:
 *  1. Badan utama menjadi bidang penuh; kisi 60° dan siluetnya persis sama
 *     dengan varian garis supaya keduanya bertukar tanpa terasa bergeser.
 *  2. Detail di dalam badan dilubangi (fill-rule evenodd), bukan digambar ulang
 *     dengan warna latar — jadi ikon tetap benar di atas latar apa pun.
 *  3. Tali, gagang, dan penghubung tetap berupa garis: dipadatkan justru
 *     membuat ikon menggumpal di ukuran kecil.
 *  4. Aksen emas tetap satu titik per ikon.
 */

/** Bidang penuh. */
const Fl = ({ d, o }: { d: string; o?: number }) => (
  <path d={d} fill="currentColor" fillOpacity={o} />
);
/** Bidang penuh dengan lubang (subpath kedua dan seterusnya jadi lubang). */
const Hl = ({ d }: { d: string }) => (
  <path d={d} fillRule="evenodd" clipRule="evenodd" fill="currentColor" />
);
/** Aksen berwarna. */
const Ac = ({ d, c }: { d: string; c: string }) => <path d={d} fill={c} />;
/** Garis yang sengaja dibiarkan tetap garis. */
const Ln = ({ d, w = 7, c, o }: { d: string; w?: number; c?: string; o?: number }) => (
  <path d={d} stroke={c ?? "currentColor"} strokeWidth={w} strokeOpacity={o} />
);

/* ═══════════════════════════════════════════ Navigasi & Sistem UI */

export const SysSignalFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sinyal" {...p}>
    <Fl d="M13 68h11v14H13zM33 56h11v26H33zM53 42h11v40H53z" />
    <Ac d="M73 24h11v58H73z" c={accent} />
  </Hexcut>
);

export const SysWifiFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Wi-Fi" {...p}>
    <Fl d="M50 14 93 44 84 57 50 33 16 57 7 44 50 14Z" />
    <Fl d="M50 42 74 59 65 72 50 61 35 72 26 59 50 42Z" />
    <Ac d={hexFlat(50, 82, 9)} c={accent} />
  </Hexcut>
);

export const SysWifiOffFilled = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Wi-Fi terputus" {...p}>
    <Fl d="M50 14 93 44 84 57 50 33 16 57 7 44 50 14Z" o={0.3} />
    <Fl d="M50 42 74 59 65 72 50 61 35 72 26 59 50 42Z" o={0.3} />
    <Fl d={hexFlat(50, 82, 9)} o={0.3} />
    <Ac d="M16 10 90 76 82 86 8 20 16 10Z" c={accent} />
  </Hexcut>
);

export const SysBatteryFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Baterai" {...p}>
    <Hl d={`${cut(10, 32, 68, 36, 6)}M20 42h48v16H20Z`} />
    <Fl d="M82 42h7v16h-7z" />
    <Ac d="M22 44h24v12H22z" c={accent} />
  </Hexcut>
);

export const ArrowForwardFilled = (p: IconProps) => (
  <Hexcut title="Lanjut" {...p}>
    <Fl d="M12 43h44V25l32 25-32 25V57H12V43Z" />
  </Hexcut>
);

export const ArrowUpFilled = (p: IconProps) => (
  <Hexcut title="Ke atas" {...p}>
    <Fl d="M43 88V44H25L50 12l25 32H57v44H43Z" />
  </Hexcut>
);

export const ArrowDownloadFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Unduh" {...p}>
    <Fl d="M43 12h14v30h18L50 70 25 42h18V12Z" />
    <Ac d="M20 78h60v9H20z" c={accent} />
  </Hexcut>
);

export const ChevronDownFilled = (p: IconProps) => (
  <Hexcut title="Buka" {...p}>
    <Fl d="M50 71 17 38l11-11 22 22 22-22 11 11L50 71Z" />
  </Hexcut>
);

export const ActionCloseFilled = (p: IconProps) => (
  <Hexcut title="Tutup" {...p}>
    <Fl d="M50 39 72 17l11 11-22 22 22 22-11 11-22-22-22 22-11-11 22-22-22-22 11-11 22 22Z" />
  </Hexcut>
);

export const ActionRefreshFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Muat ulang" {...p}>
    <Hl d={`${hexFlat(50, 52, 32)}${hexFlat(50, 52, 20)}M58 32 76 22l8 14-18 10Z`} />
    <Ac d="M60 14 86 27 60 41Z" c={accent} />
  </Hexcut>
);

export const MapLayersFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Layer peta" {...p}>
    <Fl d="M50 46 84 66 50 86 16 66 50 46Z" o={0.3} />
    <Fl d="M50 30 84 50 50 70 16 50 50 30Z" o={0.55} />
    <Hl d={`M50 12 88 34 50 56 12 34 50 12Z${hexFlat(50, 34, 8)}`} />
    <Ac d={hexFlat(50, 34, 5)} c={accent} />
  </Hexcut>
);

export const NavArrowFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Penunjuk arah" {...p}>
    <Hl d={`M16 44 86 14 56 86 46 54 16 44Z${hexFlat(50, 47, 7)}`} />
    <Ac d={hexFlat(50, 47, 4.5)} c={accent} />
  </Hexcut>
);

/* ═══════════════════════════════════════ Bottom Bar & Akses Cepat */

export const NavHomeFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Beranda" {...p}>
    <Hl d={`M50 12 92 44v42H8V44L50 12Z${hexFlat(50, 55, 9)}M41 86V66h18v20H41Z`} />
    <Ac d={hexFlat(50, 55, 5.5)} c={accent} />
  </Hexcut>
);

export const NavSearchFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Cari" {...p}>
    <Hl d={`${hexFlat(42, 40, 24)}${hexFlat(42, 40, 11)}`} />
    <Fl d="M54 56 78 78 70 87 46 65 54 56Z" />
    <Ac d={hexFlat(42, 40, 6.5)} c={accent} />
  </Hexcut>
);

export const NavAddPostFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Buat laporan" {...p}>
    <Hl d={`${hexPointy(48, 52, 32)}M43 36h10v11h11v10H53v11H43V57H32V47h11V36Z`} />
    <Ac d={hexFlat(84, 19, 8)} c={accent} />
  </Hexcut>
);

export const NavHistoryFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Riwayat" {...p}>
    <Hl d={`${hexFlat(50, 50, 30)}M45 26h10v24h17v10H45V26Z`} />
    <Ac d={hexFlat(50, 50, 5)} c={accent} />
  </Hexcut>
);

export const NavProfileFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Profil" {...p}>
    <Hl d={`${hexPointy(50, 33, 17)}${hexFlat(50, 33, 6)}`} />
    <Fl d="M18 84 30 64h40l12 20H18Z" />
    <Ac d={hexFlat(50, 33, 4)} c={accent} />
  </Hexcut>
);

export const NavExploreFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Jelajah" {...p}>
    <Hl d={`${hexFlat(50, 50, 30)}M50 50 34 66 44 44 50 50Z`} />
    <Ac d="M50 50 68 32 56 56 50 50Z" c={accent} />
  </Hexcut>
);

export const NavGridFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Semua menu" {...p}>
    <Fl d={cut(12, 12, 33, 33, 6)} />
    <Fl d={cut(55, 12, 33, 33, 6)} />
    <Fl d={cut(12, 55, 33, 33, 6)} />
    <Ac d={cut(55, 55, 33, 33, 6)} c={accent} />
  </Hexcut>
);

export const NavReportsFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Laporan saya" {...p}>
    <Hl d={`M11 26h26l8 12h36l8 12v28l-8 8H19l-8-8V26Z${hexFlat(50, 62, 13)}`} />
    <Ac d={hexFlat(50, 62, 9)} c={accent} />
  </Hexcut>
);

/* ═══════════════════════════════════════════ Form, Media & Peta */

export const ActionPlusFilled = (p: IconProps) => (
  <Hexcut title="Tambah" {...p}>
    <Fl d="M43 18h14v25h25v14H57v25H43V57H18V43h25V18Z" />
  </Hexcut>
);

export const FormCheckboxFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kotak centang" {...p}>
    <Fl d={cut(14, 14, 72, 72, 11)} />
    <Ln d="M32 50 45 67 70 32" w={8} c={accent} />
  </Hexcut>
);

export const FormRadioFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Pilihan tunggal" {...p}>
    <Hl d={`${hexFlat(50, 50, 32)}${hexFlat(50, 50, 19)}`} />
    <Ac d={hexFlat(50, 50, 13)} c={accent} />
  </Hexcut>
);

export const FormToggleFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sakelar" {...p}>
    <Hl d={`${cut(8, 30, 84, 40, 9)}${hexFlat(68, 50, 15)}`} />
    <Ac d={hexFlat(68, 50, 11)} c={accent} />
  </Hexcut>
);

export const FormEyeFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tampilkan" {...p}>
    <Hl d={`M10 50 50 24 90 50 50 76 10 50Z${hexFlat(50, 50, 13)}`} />
    <Ac d={hexFlat(50, 50, 8)} c={accent} />
  </Hexcut>
);

export const FormEyeOffFilled = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Sembunyikan" {...p}>
    <Hl d={`M10 50 50 24 90 50 50 76 10 50Z${hexFlat(50, 50, 13)}`} />
    <Ac d="M16 10 90 76 82 86 8 20 16 10Z" c={accent} />
  </Hexcut>
);

export const ActionShutterFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Ambil foto" {...p}>
    <Hl d={`${hexPointy(50, 50, 36)}${hexPointy(50, 50, 21)}`} />
    <Ac d={hexFlat(50, 50, 11)} c={accent} />
  </Hexcut>
);

export const ActionFlashFilled = (p: IconProps) => (
  <Hexcut title="Flash" {...p}>
    <Fl d="M60 8 27 55h19l-6 39 34-52H55l5-34Z" />
  </Hexcut>
);

export const ActionScanFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Pindai" {...p}>
    <Fl d="M11 19h26v10H21v14H11V19ZM63 19h26v24H79V29H63V19ZM79 57h10v24H63V71h16V57ZM11 57h10v14h16v10H11V57Z" />
    <Ac d="M22 45h56v10H22z" c={accent} />
  </Hexcut>
);

export const FormPinFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Titik lokasi" {...p}>
    <Hl d={`M38 20h24l12 16v18L50 86 26 54V36L38 20Z${hexFlat(50, 42, 10)}`} />
    <Ac d={hexFlat(50, 42, 6)} c={accent} />
  </Hexcut>
);

export const FormCalendarFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kalender" {...p}>
    <Fl d="M28 10h9v16h-9zM63 10h9v16h-9z" />
    <Hl d={`${cut(11, 24, 78, 62, 9)}M14 40h72v6H14Z${hexFlat(58, 63, 8)}`} />
    <Ac d={hexFlat(35, 63, 8)} c={accent} />
  </Hexcut>
);

/* ═══════════════════════════════════════════════ Kategori Barang */

export const ItemBagWalletFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tas & Dompet" {...p}>
    <Ac d="M65 50 71 36h14l-4 14H65Z" c={accent} />
    <Ln d="M37 50V38l7-12h12l7 12v12" w={6.5} />
    <Hl d={`M16 50h68v20l-8 14H24l-8-14V50Z${hexFlat(50, 65, 9)}M30 75h40v6H30Z`} />
    <Ac d={hexFlat(50, 65, 5.5)} c={accent} />
  </Hexcut>
);

export const ItemBagFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tas" {...p}>
    <Ln d="M36 38V28l7-9h14l7 9v10" w={6.5} />
    <Hl d={`${cut(18, 38, 64, 48, 8)}M31 86V62h38v24H31Z`} />
    <Ac d={hexFlat(50, 74, 8)} c={accent} />
  </Hexcut>
);

export const ItemWalletFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Dompet" {...p}>
    <Fl d="M30 32 34 20h24l-3 12H30Z" />
    <Hl d={`${cut(13, 32, 74, 46, 8)}M55 46h28v18H55Z`} />
    <Ac d={hexFlat(71, 55, 7)} c={accent} />
  </Hexcut>
);

export const ItemKeysFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kunci" {...p}>
    <Hl d={`${hexFlat(31, 50, 19)}${hexFlat(31, 50, 8)}`} />
    <Fl d="M46 46h42v9H46zM70 46h9v17h-9zM82 46h8v12h-8z" />
    <Ac d={hexFlat(31, 50, 5)} c={accent} />
  </Hexcut>
);

export const ItemElectronicsFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="HP & Elektronik" {...p}>
    <Hl d={`M35 13h30l9 14v46l-9 14H35l-9-14V27l9-14Z M42 21h16v6H42Z M56 36 40 57h10l-6 21 16-21H50l6-21Z`} />
    <Ac d="M56 36 40 57h10l-6 21 16-21H50l6-21Z" c={accent} />
  </Hexcut>
);

export const ItemDocumentsFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Dokumen" {...p}>
    <Fl d="M12 22h26l7 12H12V22Z" />
    <Hl d={`${cut(12, 36, 76, 46, 8)}M28 50h32v7H28ZM28 63h22v7H28Z`} />
    <Ac d={hexFlat(72, 62, 7)} c={accent} />
  </Hexcut>
);

export const ItemIdCardFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kartu identitas" {...p}>
    <Hl d={`${cut(11, 28, 78, 44, 8)}${hexFlat(34, 50, 12)}M54 56h16v6H54Z`} />
    <Ac d="M54 41h24v7H54z" c={accent} />
  </Hexcut>
);

export const ItemPetsFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Hewan" {...p}>
    <Fl d={hexFlat(26, 34, 9)} />
    <Ac d={hexFlat(44, 24, 9)} c={accent} />
    <Fl d={hexFlat(63, 26, 9)} />
    <Fl d={hexFlat(80, 40, 9)} />
    <Fl d="M39 54h30l10 17-10 17H39L29 71l10-17Z" />
  </Hexcut>
);

export const ItemJewelryFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Perhiasan" {...p}>
    <Hl d={`${hexFlat(50, 64, 25)}${hexFlat(50, 64, 13)}`} />
    <Ac d={hexFlat(50, 28, 15)} c={accent} />
  </Hexcut>
);

export const ItemOthersFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Lainnya" {...p}>
    <Hl d={`${cut(18, 44, 64, 40, 7)}M46 44h8v40h-8Z`} />
    <Hl d={`${cut(11, 28, 78, 18, 6)}M46 28h8v18h-8Z`} />
    <Ac d="M46 28h8v56h-8z" c={accent} />
    <Ac d={hexFlat(39, 22, 7)} c={accent} />
    <Ac d={hexFlat(61, 22, 7)} c={accent} />
  </Hexcut>
);

export const ItemGlassesFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kacamata" {...p}>
    <Ln d="M12 40 22 30M88 40 78 30" w={6} />
    <Hl d={`${hexFlat(28, 56, 18)}${hexFlat(28, 56, 8)}`} />
    <Hl d={`${hexFlat(72, 56, 18)}${hexFlat(72, 56, 8)}`} />
    <Ac d="M44 52h12v8H44z" c={accent} />
  </Hexcut>
);

export const ItemUmbrellaFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Payung" {...p}>
    <Fl d="M8 54 50 16 92 54 79 46 65 54 50 46 35 54 21 46 8 54Z" />
    <Ln d="M50 50v28l-12 8" w={6.5} />
    <Ac d={hexFlat(50, 18, 7)} c={accent} />
  </Hexcut>
);

export const ItemTumblerFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tumbler" {...p}>
    <Fl d="M28 18h44v8H28z" />
    <Hl d={`M32 26h36v46l-6 16H38l-6-16V26Z M34 44h32v10H34Z`} />
    <Ac d="M34 44h32v10H34z" c={accent} />
  </Hexcut>
);

/* ═════════════════════════════════════ Badge, Gamifikasi & Status */

export const StatusLostFilled = ({ accent = tokens.redLight, tone = tokens.red, ...p }: IconProps & { tone?: string }) => (
  <Hexcut title="Hilang" {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={`M38 20h24l12 16v18L50 86 26 54V36L38 20Z${hexFlat(50, 42, 11)}`}
      fill={tone}
    />
    <Ac d={hexFlat(50, 42, 6)} c={accent} />
  </Hexcut>
);

export const StatusFoundFilled = ({ accent = tokens.goldLight, tone = tokens.primary, ...p }: IconProps & { tone?: string }) => (
  <Hexcut title="Ditemukan" {...p}>
    <path
      d="M38 20h24l12 16v18L50 86 26 54V36L38 20Z"
      fill={tone}
    />
    <Ln d="M39 41 47 54 63 32" w={7} c={accent} />
  </Hexcut>
);

export const StatusReturnedFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Sudah kembali" {...p}>
    <Fl d={hexPointy(50, 50, 34)} />
    <Ln d="M35 50 46 66 68 30" w={8} c={accent} />
  </Hexcut>
);

export const StatusRejectedFilled = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Ditolak" {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={`${hexPointy(50, 50, 34)}M50 42 62 30l8 8-12 12 12 12-8 8-12-12-12 12-8-8 12-12-12-12 8-8 12 12Z`}
      fill={accent}
    />
  </Hexcut>
);

export const StatusAlertFilled = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Perhatian" {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={`${hexPointy(50, 50, 34)}M45 26h10v30H45Z${hexFlat(50, 68, 6)}`}
      fill={accent}
    />
  </Hexcut>
);

export const VerifiedBadgeFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Terverifikasi" {...p}>
    <Fl d={hexPointy(50, 50, 34)} />
    <Ln d="M36 50 46 64 66 34" w={7.5} c={accent} />
  </Hexcut>
);

export const VerifiedMiniFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Terverifikasi" {...p}>
    <Fl d={hexPointy(50, 50, 34)} />
    <Ln d="M36 50 46 63 66 35" w={8} c={accent} />
  </Hexcut>
);

export const BadgeLockFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Terkunci" {...p}>
    <Ln d="M33 46V33l9-11h16l9 11v13" w={6.5} />
    <Hl d={`${cut(19, 46, 62, 38, 8)}${hexFlat(50, 65, 10)}`} />
    <Ac d={hexFlat(50, 65, 6)} c={accent} />
  </Hexcut>
);

export const BadgeShieldFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Terlindungi" {...p}>
    <Fl d="M50 12 82 24v26L50 88 18 50V24L50 12Z" />
    <Ln d="M36 47 47 60 66 34" w={7} c={accent} />
  </Hexcut>
);

export const BadgeStarFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Rating" {...p}>
    <Ac
      d="M50 14 58.6 40.3 86.3 40.3 63.9 56.6 72.4 82.9 50 66.6 27.6 82.9 36.1 56.6 13.7 40.3 41.4 40.3Z"
      c={accent}
    />
  </Hexcut>
);

export const BadgeCrownFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Mahkota" {...p}>
    <Hl d={`M12 76V28l19 16 19-26 19 26 19-16v48H12Z${hexFlat(50, 60, 10)}`} />
    <Ac d={hexFlat(50, 60, 6)} c={accent} />
  </Hexcut>
);

export const BadgeEyeFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Mata elang" {...p}>
    <Hl d={`M8 52 46 26 84 52 46 78 8 52Z${hexFlat(46, 52, 13)}`} />
    <Ac d={hexFlat(46, 52, 8)} c={accent} />
    <Ac d={star4(84, 22, 12)} c={accent} />
  </Hexcut>
);

export const BadgeScalesFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Adil" {...p}>
    <Fl d="M46 24h8v58h-8zM16 30h68v8H16zM32 80h36v8H32z" />
    <Fl d="M10 58 22 36 34 58H10ZM66 58 78 36 90 58H66Z" />
    <Ac d={hexFlat(50, 22, 8)} c={accent} />
  </Hexcut>
);

export const ActionSettingsFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Pengaturan" {...p}>
    <Fl d="M82 45h12v10H82zM6 45h12v10H6zM63 74l9-5 6 10-9 5zM28 21l9-5 6 10-9 5zM28 79l6-10 9 5-6 10zM63 26l6-10 9 5-6 10z" />
    <Hl d={`${hexFlat(50, 50, 32)}${hexFlat(50, 50, 15)}`} />
    <Ac d={hexFlat(50, 50, 11)} c={accent} />
  </Hexcut>
);

export const RewardBadgeFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Apresiasi" {...p}>
    <Fl d="M34 66h32v26l-16-9-16 9V66Z" />
    <Fl d={hexPointy(50, 44, 30)} />
    <Ac d={star4(50, 44, 18)} c={accent} />
  </Hexcut>
);

export const RewardCoinFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Poin" {...p}>
    <Hl d={`${hexFlat(50, 50, 34)}${hexFlat(50, 50, 22)}`} />
    <Ac d={hexFlat(50, 50, 18)} c={accent} />
  </Hexcut>
);

/* ══════════════════════════════════════ Tindakan & Utilitas, Pay */

export const ActionFilterFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Filter" {...p}>
    <Hl d={`M13 26h74L58 51.4v25.6l-16 8V51.4L13 26Z${hexFlat(50, 36, 8)}`} />
    <Ac d={hexFlat(50, 36, 5)} c={accent} />
  </Hexcut>
);

export const ActionNotificationFilled = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Notifikasi" {...p}>
    <Fl d="M28 68V44l10-12h24l10 12v24l6 8H22l6-8Z" />
    <Fl d="M40 82h20l-4 8h-12l-4-8Z" />
    <Ac d={hexFlat(75, 25, 11)} c={accent} />
  </Hexcut>
);

export const ActionChatFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Percakapan" {...p}>
    <Fl d={cut(52, 52, 38, 30, 6)} o={0.3} />
    <Hl d={`${cut(10, 18, 54, 34, 7)}M24 52 20 70l16-18Z${hexFlat(23, 35, 5)}${hexFlat(37, 35, 5)}${hexFlat(51, 35, 5)}`} />
    <Fl d="M24 48h12v22l-16 4 4-26Z" />
    <Ac d={hexFlat(37, 35, 5)} c={accent} />
  </Hexcut>
);

export const ActionLocationFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Lokasi" {...p}>
    <Hl d={`M10 30 34 22 58 30 82 22v52L58 82 34 74 10 82V30Z M31 26h6v52h-6Z M55 34h6v52h-6Z`} />
    <Ac d={hexFlat(46, 46, 8)} c={accent} />
  </Hexcut>
);

export const ActionShareFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Bagikan" {...p}>
    <Ln d="M33 45 65 29M33 55 65 71" w={6} o={0.5} />
    <Fl d={hexFlat(24, 50, 11)} />
    <Ac d={hexFlat(74, 24, 11)} c={accent} />
    <Fl d={hexFlat(74, 76, 11)} />
  </Hexcut>
);

export const ActionCameraFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kamera" {...p}>
    <Fl d="M35 32 41 20h18l6 12H35Z" />
    <Hl d={`${cut(11, 32, 78, 48, 8)}${hexFlat(50, 56, 16)}`} />
    <Ac d={hexFlat(50, 56, 10)} c={accent} />
  </Hexcut>
);

export const ActionBookmarkFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Simpan" {...p}>
    <Hl d={`M26 18h48v64L50 68 26 82V18Z${hexFlat(50, 42, 9)}`} />
    <Ac d={hexFlat(50, 42, 5.5)} c={accent} />
  </Hexcut>
);

export const BadgeTrophyFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Papan peringkat" {...p}>
    <Ln d="M28 20H14v12l8 10h8M72 20h14v12l-8 10h-8" w={6} />
    <Hl d={`M28 12h44v24l-9 16H37l-9-16V12Z${hexFlat(50, 30, 11)}`} />
    <Ac d={hexFlat(50, 30, 7)} c={accent} />
    <Fl d="M46 50h8v20h-8zM30 78h40v10H30z" />
  </Hexcut>
);

export const ActionChartFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Riwayat & grafik" {...p}>
    <Fl d="M13 13h9v70h-9zM13 74h72v9H13z" />
    <Ln d="M32 63 46 46 58 57 76 34" w={8} />
    <Ac d={hexFlat(78, 29, 9)} c={accent} />
  </Hexcut>
);

export const ActionCheckFilled = (p: IconProps) => (
  <Hexcut title="Selesai" {...p}>
    <Fl d="M41 84 12 52l12-12 17 19 43-35 10 12-53 48Z" />
  </Hexcut>
);

export const TierNewFilled = (p: IconProps) => (
  <Hexcut title="Warga Baru" {...p}>
    <Hl d={`${hexPointy(50, 50, 33)}${hexFlat(50, 50, 11)}`} />
  </Hexcut>
);

export const TierNeighborFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tetangga Baik" {...p}>
    <Hl d={`${cut(12, 12, 76, 76, 9)}M50 72 32 55V45l8-8h6l4 4 4-4h6l8 8v10L50 72Z`} />
    <Ac d={hexFlat(50, 52, 7)} c={accent} />
  </Hexcut>
);

export const TierHelperFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Penolong" {...p}>
    <Hl d={`${hexPointy(50, 50, 34)}${hexFlat(50, 40, 13)}${hexFlat(34, 63, 11)}${hexFlat(66, 63, 11)}`} />
    <Ac d={hexFlat(50, 40, 9)} c={accent} />
  </Hexcut>
);

export const TierGuardianFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Penjaga Kota" {...p}>
    <Hl d={`M50 8 88 21v28L50 92 12 49V21L50 8Z${hexFlat(50, 42, 12)}${hexFlat(32, 55, 10)}${hexFlat(68, 55, 10)}`} />
    <Ac d={hexFlat(50, 42, 8)} c={accent} />
  </Hexcut>
);

export const TierLegendFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Legenda Balikin" {...p}>
    <Hl d={`${burst(50, 50, 42, 28)}${star4(50, 50, 19)}`} />
    <Ac d={star4(50, 50, 14)} c={accent} />
  </Hexcut>
);

export const ActionMoreFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Lainnya" {...p}>
    <Fl d={hexFlat(20, 50, 11)} />
    <Ac d={hexFlat(50, 50, 11)} c={accent} />
    <Fl d={hexFlat(80, 50, 11)} />
  </Hexcut>
);

export const ActionListFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Daftar" {...p}>
    <Ac d={hexFlat(17, 26, 9)} c={accent} />
    <Fl d={hexFlat(17, 50, 9)} />
    <Fl d={hexFlat(17, 74, 9)} />
    <Fl d="M35 21h55v10H35zM35 45h55v10H35zM35 69h38v10H35z" />
  </Hexcut>
);

export const ActionShareLocationFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Bagikan lokasi" {...p}>
    <Hl d={`M30 8h22l11 15v17L41 68 19 40V23L30 8Z${hexFlat(41, 29, 9)}`} />
    <Ac d={hexFlat(41, 29, 5.5)} c={accent} />
    <Hl d={`${hexFlat(72, 70, 20)}M69 56h6v16h-6ZM72 68l13 7-3 5-13-7Z`} />
  </Hexcut>
);

export const ActionHandoverFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Serah terima" {...p}>
    <Fl d={hexFlat(17, 38, 12)} />
    <Fl d={hexFlat(83, 38, 12)} />
    <Ac d={hexFlat(50, 38, 16)} c={accent} />
    <Fl d="M28 71h30v-9l18 13-18 13v-9H28v-8Z" />
  </Hexcut>
);

export const ActionMailFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Email" {...p}>
    <Fl d={cut(9, 24, 82, 52, 9)} />
    <Ln d="M16 32 50 57 84 32" w={6.5} c={accent} />
  </Hexcut>
);

export const ActionBackFilled = (p: IconProps) => (
  <Hexcut title="Kembali" {...p}>
    <Fl d="M88 43H44V25L12 50l32 25V57h44V43Z" />
  </Hexcut>
);

export const ActionTipFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tip & terima kasih" {...p}>
    <Hl d={`M50 84 20 55V41L32 29h10l8 8 8-8h10l12 12v14L50 84Z${hexFlat(50, 52, 10)}`} />
    <Ac d={hexFlat(50, 52, 6)} c={accent} />
  </Hexcut>
);

export const ActionReputationFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Reputasi" {...p}>
    <Hl d={`${star4(50, 50, 34)}${hexFlat(50, 50, 10)}`} />
    <Ac d={hexFlat(50, 50, 6)} c={accent} />
  </Hexcut>
);

export const ActionSparkleFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sorotan" {...p}>
    <Fl d={star4(40, 44, 30)} />
    <Ac d={star4(76, 70, 14)} c={accent} />
    <Ac d={star4(78, 24, 9)} c={accent} />
  </Hexcut>
);

export const PayQrFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="QRIS" {...p}>
    <Hl d={`${cut(11, 11, 32, 32, 6)}${hexFlat(27, 27, 7)}`} />
    <Hl d={`${cut(57, 11, 32, 32, 6)}${hexFlat(73, 27, 7)}`} />
    <Hl d={`${cut(11, 57, 32, 32, 6)}${hexFlat(27, 73, 7)}`} />
    <Ac d={hexFlat(63, 63, 9)} c={accent} />
    <Ac d={hexFlat(83, 63, 7)} c={accent} />
    <Fl d={hexFlat(63, 83, 7)} />
    <Fl d={hexFlat(83, 83, 9)} />
  </Hexcut>
);

export const PayBankFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Bank" {...p}>
    <Fl d="M50 12 92 38H8L50 12Z" />
    <Fl d="M22 46h10v26H22zM38 46h10v26H38zM54 46h10v26H54zM70 46h10v26H70z" />
    <Ac d="M10 78h80v10H10z" c={accent} />
  </Hexcut>
);

export const PayEwalletFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="E-wallet" {...p}>
    <Hl d={`M30 10h40l9 14v52l-9 14H30l-9-14V24l9-14Z M42 20h16v6H42Z ${hexFlat(50, 54, 17)}`} />
    <Ac d={hexFlat(50, 54, 13)} c={accent} />
  </Hexcut>
);

export const PayCardFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kartu ATM" {...p}>
    <Hl d={`${cut(9, 24, 82, 52, 9)}M12 38h76v9H12Z`} />
    <Ac d={hexFlat(30, 60, 9)} c={accent} />
  </Hexcut>
);

export const ActionCopyLinkFilled = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Salin tautan" {...p}>
    <Fl d={cut(34, 10, 56, 56, 8)} o={0.3} />
    <Hl d={`${cut(10, 34, 56, 56, 8)}${hexFlat(38, 62, 11)}`} />
    <Ac d={hexFlat(38, 62, 7)} c={accent} />
  </Hexcut>
);

/* ═══════════════════════════════════════════ Lencana Pencapaian */

export const AchFirstReturnFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Balik Pertama" {...p}>
    <Fl d="M43 82 15 55l11-12 17 16 32-38 12 10-44 51Z" />
    <Ac d={hexFlat(20, 40, 9)} c={accent} />
  </Hexcut>
);

export const AchTenItemsFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="10 Barang" {...p}>
    <Ac d={cut(30, 8, 40, 36, 5)} c={accent} />
    <Fl d={cut(8, 52, 40, 36, 5)} />
    <Fl d={cut(52, 52, 40, 36, 5)} />
  </Hexcut>
);

export const AchFastReplyFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Balas Cepat" {...p}>
    <Fl d="M10 20h80v44H48L26 86V64H10V20Z" />
    <Ac d="M58 26 38 52h11l-4 20 19-28H52l6-18Z" c={accent} />
  </Hexcut>
);

export const AchEagleEyeFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Mata Elang" {...p}>
    <Hl d={`M8 50 50 22 92 50 50 78 8 50Z${hexFlat(50, 50, 15)}`} />
    <Ac d={hexFlat(50, 50, 10)} c={accent} />
  </Hexcut>
);

export const AchDocsFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Dokumen" {...p}>
    <Hl d={`M22 10h36l20 20v60H22V10Z M34 50h32v8H34Z M34 66h22v8H34Z`} />
    <Ac d="M34 50h32v8H34zM34 66h22v8H34z" c={accent} />
  </Hexcut>
);

export const AchNightWatchFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Jaga Malam" {...p}>
    <path d="M64 12A40 40 0 1 0 64 88A46 46 0 1 1 64 12Z" fill="currentColor" />
    <Ac d={star4(80, 76, 12)} c={accent} />
  </Hexcut>
);

export const AchZeroDisputeFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Nol Sengketa" {...p}>
    <Hl d={`M50 8 90 20v28L50 92 10 48V20L50 8Z${hexPointy(50, 45, 17)}`} />
    <Ac d={hexPointy(50, 45, 12)} c={accent} />
  </Hexcut>
);

export const AchMoverFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Penggerak" {...p}>
    <Ac d={hexFlat(50, 28, 18)} c={accent} />
    <Fl d={hexFlat(26, 68, 18)} />
    <Fl d={hexFlat(74, 68, 18)} />
  </Hexcut>
);

export const AchLegendFilled = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Legenda" {...p}>
    <Fl d={star4(46, 52, 40)} />
    <Ac d={star4(84, 16, 13)} c={accent} />
  </Hexcut>
);
