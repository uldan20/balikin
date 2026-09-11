import * as React from "react";
import { Hexcut, S, A, hexFlat, hexPointy, cut, star4, burst, IconProps, tokens } from "./base";

/**
 * TINGKAT KOMUNITAS
 *
 * Lima tingkat, dan yang naik bukan hanya isinya — wadahnya ikut naik:
 * heksagon terputus → kotak → heksagon utuh → perisai → letusan. Jadi di daftar
 * yang panjang, urutan tingkat terbaca dari siluetnya saja, bahkan sebelum
 * angkanya dibaca. Varian garis untuk tingkat yang belum diraih, varian padat
 * untuk yang sudah.
 */

export const TierNew = (p: IconProps) => (
  <Hexcut title="Warga Baru" {...p}>
    <path
      d={hexPointy(50, 50, 33)}
      stroke="currentColor"
      strokeWidth={6.5}
      strokeDasharray="9 8"
      strokeOpacity={0.55}
    />
    <S d={hexFlat(50, 50, 8)} w={5.5} o={0.45} />
  </Hexcut>
);

export const TierNeighbor = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tetangga Baik" {...p}>
    <S d={cut(12, 12, 76, 76, 9)} w={6.5} />
    <S d="M50 72 32 55V45l8-8h6l4 4 4-4h6l8 8v10L50 72Z" w={6} />
    <A d={hexFlat(50, 54, 6)} fill={accent} />
  </Hexcut>
);

export const TierHelper = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Penolong" {...p}>
    <S d={hexPointy(50, 50, 34)} />
    <A d={hexFlat(50, 40, 11)} fill={accent} />
    <S d={hexFlat(34, 63, 11)} w={5.5} />
    <S d={hexFlat(66, 63, 11)} w={5.5} />
  </Hexcut>
);

export const TierGuardian = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Penjaga Kota" {...p}>
    <S d="M50 8 88 21v28L50 92 12 49V21L50 8Z" />
    <A d={hexFlat(50, 42, 10)} fill={accent} />
    <S d={hexFlat(32, 55, 10)} w={5.5} />
    <S d={hexFlat(68, 55, 10)} w={5.5} />
  </Hexcut>
);

export const TierLegend = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Legenda Balikin" {...p}>
    <S d={burst(50, 50, 42, 28)} w={6.5} />
    <A d={star4(50, 50, 17)} fill={accent} />
  </Hexcut>
);

export const communityTiers = [
  { id: "TierNew", label: "Warga Baru", poin: "0 PN" },
  { id: "TierNeighbor", label: "Tetangga Baik", poin: "100 PN" },
  { id: "TierHelper", label: "Penolong", poin: "400 PN" },
  { id: "TierGuardian", label: "Penjaga Kota", poin: "1.000 PN" },
  { id: "TierLegend", label: "Legenda Balikin", poin: "2.500 PN" },
];
