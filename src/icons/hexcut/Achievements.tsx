import * as React from "react";
import { Hexcut, S, A, hexFlat, hexPointy, cut, star4, IconProps, tokens } from "./base";

/**
 * Lencana pencapaian — dipakai DI DALAM wadah heksagon (teal saat terbuka,
 * abu saat terkunci), jadi bentuknya sengaja tidak memakai bingkai heksagon
 * lagi dan garisnya lebih tebal (8–9) supaya tetap terbaca pada ±26 px.
 * Aksen emas hanya untuk lencana yang terbuka; saat terkunci pakai
 * accent="currentColor" agar seluruh bentuk meredup bersama.
 */

export const AchFirstReturn = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Balik Pertama" {...p}>
    <S d="M24 52 43 74 82 26" w={9} />
    <A d={hexFlat(20, 44, 8)} fill={accent} />
  </Hexcut>
);

export const AchTenItems = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="10 Barang" {...p}>
    <A d={cut(30, 8, 40, 36, 5)} fill={accent} />
    <S d={cut(8, 52, 40, 36, 5)} w={7.5} />
    <S d={cut(52, 52, 40, 36, 5)} w={7.5} />
  </Hexcut>
);

export const AchFastReply = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Balas Cepat" {...p}>
    <S d="M10 20h80v44H48L26 86V64H10V20Z" w={8} />
    <A d="M58 26 38 52h11l-4 20 19-28H52l6-18Z" fill={accent} />
  </Hexcut>
);

export const AchEagleEye = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Mata Elang" {...p}>
    <S d="M8 50 50 22 92 50 50 78 8 50Z" w={8} />
    <A d={hexFlat(50, 50, 13)} fill={accent} />
  </Hexcut>
);

export const AchDocs = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Dokumen" {...p}>
    <S d="M22 10h36l20 20v60H22V10Z" w={8} />
    <S d="M58 10v20h20" w={7} />
    <A d="M34 50h32v8H34zM34 66h22v8H34z" fill={accent} />
  </Hexcut>
);

export const AchNightWatch = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Jaga Malam" {...p}>
    {/* Bulan sabit memakai lengkung, bukan kisi heksagon: sabit bersudut
        terbaca sebagai heksagon bolong, bukan bulan. Pengecualian kedua
        setelah BadgeStar, dan sengaja berhenti di sini. */}
    <path d="M64 12A40 40 0 1 0 64 88A46 46 0 1 1 64 12Z" fill="currentColor" />
    <A d={star4(80, 76, 12)} fill={accent} />
  </Hexcut>
);

export const AchZeroDispute = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Nol Sengketa" {...p}>
    <S d="M50 8 90 20v28L50 92 10 48V20L50 8Z" w={8} />
    <path d={hexPointy(50, 45, 14)} stroke={accent} strokeWidth={7} />
  </Hexcut>
);

export const AchMover = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Penggerak" {...p}>
    <A d={hexFlat(50, 28, 18)} fill={accent} />
    <S d={hexFlat(26, 68, 18)} w={7.5} />
    <S d={hexFlat(74, 68, 18)} w={7.5} />
  </Hexcut>
);

export const AchLegend = ({ accent = tokens.goldLight, ...p }: IconProps) => (
  <Hexcut title="Legenda" {...p}>
    <S d={star4(46, 52, 40)} w={8} />
    <A d={star4(84, 16, 13)} fill={accent} />
  </Hexcut>
);

export const achievementBadges = [
  { id: "AchFirstReturn", label: "Balik Pertama", Icon: AchFirstReturn },
  { id: "AchTenItems", label: "10 Barang", Icon: AchTenItems },
  { id: "AchFastReply", label: "Balas Cepat", Icon: AchFastReply },
  { id: "AchEagleEye", label: "Mata Elang", Icon: AchEagleEye },
  { id: "AchDocs", label: "Dokumen", Icon: AchDocs },
  { id: "AchNightWatch", label: "Jaga Malam", Icon: AchNightWatch },
  { id: "AchZeroDispute", label: "Nol Sengketa", Icon: AchZeroDispute },
  { id: "AchMover", label: "Penggerak", Icon: AchMover },
  { id: "AchLegend", label: "Legenda", Icon: AchLegend },
];
