import * as React from "react";
import { Hexcut, S, A, hexFlat, cut, star4, IconProps, tokens } from "./base";

/* Kategori 4 — Fitur, Tindakan & Utilitas (plus ikon ekstra dari layar app) */

export const ActionFilter = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Filter" {...p}>
    <S d="M13 26h74L58 51.4v25.6l-16 8V51.4L13 26Z" />
    <A d={hexFlat(50, 35, 6)} fill={accent} />
  </Hexcut>
);

export const ActionNotification = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Notifikasi" {...p}>
    <S d="M28 68V44l10-12h24l10 12v24l6 8H22l6-8Z" />
    <S d="M42 84l4 6h8l4-6" w={6} />
    <A d={hexFlat(75, 25, 9)} fill={accent} />
  </Hexcut>
);

export const ActionChat = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Percakapan" {...p}>
    <S d={cut(52, 52, 38, 30, 6)} w={6} o={0.32} />
    <S d={cut(10, 18, 54, 34, 7)} />
    <S d="M24 52 20 70l16-18" w={7} />
    <A d={hexFlat(37, 35, 5)} fill={accent} />
    <S d={hexFlat(23, 35, 5)} w={4.5} />
    <S d={hexFlat(51, 35, 5)} w={4.5} />
  </Hexcut>
);

export const ActionLocation = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Lokasi" {...p}>
    <S d="M10 30 34 22 58 30 82 22v52L58 82 34 74 10 82V30Z" />
    <S d="M34 22v52M58 30v52" w={5.5} o={0.3} />
    <A d={hexFlat(46, 46, 7)} fill={accent} />
  </Hexcut>
);

export const ActionShare = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Bagikan" {...p}>
    <S d="M33 45 65 29M33 55 65 71" w={6} o={0.5} />
    <S d={hexFlat(24, 50, 11)} w={6.5} />
    <A d={hexFlat(74, 24, 11)} fill={accent} />
    <S d={hexFlat(74, 76, 11)} w={6.5} />
  </Hexcut>
);

export const ActionCamera = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kamera" {...p}>
    <S d="M35 32 41 20h18l6 12" w={6.5} />
    <S d={cut(11, 32, 78, 48, 8)} />
    <S d={hexFlat(50, 56, 15)} w={6.5} />
    <A d={hexFlat(74, 43, 5)} fill={accent} />
  </Hexcut>
);

export const ActionBookmark = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Simpan" {...p}>
    <S d="M26 18h48v64L50 68 26 82V18Z" />
    <A d={hexFlat(50, 42, 7)} fill={accent} />
  </Hexcut>
);

/** Ceklis polos. Sengaja tanpa aksen emas: ia hampir selalu duduk di kotak
 *  berwarna yang artinya sudah dibawa oleh warna kotak itu. */
export const ActionChart = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Riwayat & grafik" {...p}>
    <S d="M17 13v70h68" />
    <S d="M30 65 45 47 57 58 77 32" w={6.5} />
    <A d={hexFlat(78, 29, 8)} fill={accent} />
  </Hexcut>
);

export const ActionCheck = (p: IconProps) => (
  <Hexcut title="Selesai" {...p}>
    <S d="M18 52 41 78 84 24" w={9} />
  </Hexcut>
);

export const ActionMore = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Lainnya" {...p}>
    <S d={hexFlat(20, 50, 10)} w={6.5} />
    <A d={hexFlat(50, 50, 10)} fill={accent} />
    <S d={hexFlat(80, 50, 10)} w={6.5} />
  </Hexcut>
);

export const ActionList = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Daftar" {...p}>
    <A d={hexFlat(17, 26, 8)} fill={accent} />
    <S d={hexFlat(17, 50, 8)} w={5.5} />
    <S d={hexFlat(17, 74, 8)} w={5.5} />
    <S d="M35 26h55M35 50h55M35 74h38" w={7} />
  </Hexcut>
);

export const ActionShareLocation = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Bagikan lokasi" {...p}>
    <S d="M30 8h22l11 15v17L41 68 19 40V23L30 8Z" w={6.5} />
    <A d={hexFlat(41, 29, 8)} fill={accent} />
    <S d={hexFlat(72, 70, 20)} w={6} />
    <S d="M72 70V58M72 70l11 6" w={5.5} />
  </Hexcut>
);

export const ActionHandover = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Serah terima" {...p}>
    <S d={hexFlat(17, 38, 12)} w={6} />
    <S d={hexFlat(83, 38, 12)} w={6} />
    <A d={hexFlat(50, 38, 16)} fill={accent} />
    <S d="M28 76h36" w={8} />
    <S d="M56 66 72 76 56 86" w={8} />
  </Hexcut>
);

export const ActionMail = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Email" {...p}>
    <S d={cut(9, 24, 82, 52, 9)} />
    <path d="M14 32 50 58 86 32" stroke={accent} strokeWidth={6.5} />
  </Hexcut>
);

export const ActionBack = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kembali" {...p}>
    <S d="M84 50H26" />
    <S d="M40 26 26 50l14 24" w={7.5} />
  </Hexcut>
);

export const ActionTip = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tip & terima kasih" {...p}>
    <S d="M50 84 20 55V41L32 29h10l8 8 8-8h10l12 12v14L50 84Z" />
    <A d={hexFlat(50, 52, 8)} fill={accent} />
  </Hexcut>
);

export const ActionReputation = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Poin reputasi" {...p}>
    <S d={star4(50, 50, 34)} w={6.5} />
    <A d={hexFlat(50, 50, 8)} fill={accent} />
  </Hexcut>
);

export const ActionSparkle = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sorotan" {...p}>
    <S d={star4(40, 44, 30)} w={6} />
    <A d={star4(76, 70, 14)} fill={accent} />
    <A d={star4(78, 24, 9)} fill={accent} />
  </Hexcut>
);
