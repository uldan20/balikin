import * as React from "react";
import { Hexcut, S, A, hexFlat, hexPointy, cut, IconProps, tokens } from "./base";

/* Kategori 1 — Navigasi Utama */

export const NavHome = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Beranda" {...p}>
    <S d="M13 53 50 31.6 87 53" />
    <S d="M24 50v31h52V50" />
    <S d="M41 81V65h18v16" w={6} />
    <A d={hexFlat(50, 57, 5.5)} fill={accent} />
  </Hexcut>
);

export const NavSearch = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Cari" {...p}>
    <S d={hexFlat(42, 40, 24)} />
    <S d="M58.9 50.4 74 76.6" w={8} />
    <A d={hexFlat(76, 80, 6)} fill={accent} />
  </Hexcut>
);

export const NavAddPost = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Buat laporan" {...p}>
    <S d={hexPointy(48, 52, 30)} />
    <S d="M48 38v28M34 52h28" />
    <A d={hexFlat(82, 21, 7)} fill={accent} />
  </Hexcut>
);

export const NavHistory = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Riwayat" {...p}>
    <S d={hexFlat(50, 50, 28)} />
    <S d="M50 50V31M50 50 65.6 59" w={6.5} />
    <A d={hexFlat(50, 50, 5)} fill={accent} />
  </Hexcut>
);

export const NavProfile = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Profil" {...p}>
    <S d={hexPointy(50, 33, 17)} w={6.5} />
    <S d="M18 84 29 65h42l11 19" />
    <A d={hexFlat(50, 33, 6)} fill={accent} />
  </Hexcut>
);

export const NavExplore = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Jelajah" {...p}>
    <S d={hexFlat(50, 50, 28)} />
    <A d="M50 50 66 34 56 56 50 50Z" fill={accent} />
    <S d="M50 50 34 66 44 44 50 50Z" w={5.5} />
  </Hexcut>
);

export const NavGrid = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Semua menu" {...p}>
    <S d={cut(12, 12, 33, 33, 6)} w={6.5} />
    <S d={cut(55, 12, 33, 33, 6)} w={6.5} />
    <S d={cut(12, 55, 33, 33, 6)} w={6.5} />
    <A d={cut(55, 55, 33, 33, 6)} fill={accent} />
  </Hexcut>
);

/** Map polos berlabel heksagon emas. Dibedakan dari ItemDocuments — yang
 *  bermakna dokumen sebagai barang hilang — lewat muka map yang bersih:
 *  di sana ada garis kertas dan jepitan, di sini tidak. */
export const NavReports = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Laporan saya" {...p}>
    <S d="M11 26h26l8 12h36l8 12v28l-8 8H19l-8-8V26Z" />
    <A d={hexFlat(50, 62, 10)} fill={accent} />
  </Hexcut>
);
