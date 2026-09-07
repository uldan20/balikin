import * as React from "react";
import { Hexcut, S, A, hexFlat, cut, IconProps, tokens } from "./base";

/* Kategori 2 — Kategori Barang */

/** Tas & Dompet — kategori gabungan yang dipakai di app. */
export const ItemBagWallet = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tas & Dompet" {...p}>
    <S d="M65 50 71 36h14l-4 14" w={6} />
    <A d="M73 42.2h7.5v4.6H73z" fill={accent} />
    <S d="M37 50V38l7-12h12l7 12v12" w={6.5} />
    <S d="M16 50h68v20l-8 14H24l-8-14V50Z" />
    <A d={hexFlat(50, 65, 7)} fill={accent} />
    <S d="M30 78h40" w={5.5} o={0.3} />
  </Hexcut>
);

export const ItemBag = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tas" {...p}>
    <S d="M36 38V28l7-9h14l7 9v10" w={6.5} />
    <S d={cut(18, 38, 64, 48, 8)} />
    <S d="M31 86V62h38v24" w={6} />
    <A d={hexFlat(50, 72, 6.5)} fill={accent} />
  </Hexcut>
);

export const ItemWallet = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Dompet" {...p}>
    <S d="M30 32 34 20h24l-3 12" w={6} />
    <S d={cut(13, 32, 74, 46, 8)} />
    <S d="M55 46h32v18H55z" w={6} />
    <A d={hexFlat(71, 55, 6)} fill={accent} />
  </Hexcut>
);

export const ItemKeys = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kunci" {...p}>
    <S d={hexFlat(31, 50, 19)} w={6.5} />
    <A d={hexFlat(31, 50, 7)} fill={accent} />
    <S d="M50 50h38" />
    <S d="M72 50 78 60.4M85 50l4 6.9" w={6.5} />
  </Hexcut>
);

export const ItemElectronics = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="HP & Elektronik" {...p}>
    <S d="M35 13h30l9 14v46l-9 14H35l-9-14V27l9-14Z" />
    <S d="M42 24h16" w={5.5} />
    <A d="M56 36 40 57h10l-6 21 16-21H50l6-21Z" fill={accent} />
  </Hexcut>
);

export const ItemDocuments = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Dokumen" {...p}>
    <S d="M12 40V24h24l7 12" w={6.5} />
    <S d={cut(12, 36, 76, 46, 8)} />
    <S d="M28 54h32M28 66h22" w={5.5} o={0.32} />
    <A d={hexFlat(72, 62, 6.5)} fill={accent} />
  </Hexcut>
);

export const ItemIdCard = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kartu identitas" {...p}>
    <S d={cut(11, 28, 78, 44, 8)} />
    <S d={hexFlat(34, 50, 12)} w={6} />
    <A d="M54 41h24v6H54z" fill={accent} />
    <S d="M54 58h16" w={5.5} o={0.32} />
  </Hexcut>
);

export const ItemPets = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Hewan" {...p}>
    <S d={hexFlat(26, 34, 9)} w={6} />
    <A d={hexFlat(44, 24, 9)} fill={accent} />
    <S d={hexFlat(63, 26, 9)} w={6} />
    <S d={hexFlat(80, 40, 9)} w={6} />
    <S d="M39 54h30l10 17-10 17H39L29 71l10-17Z" />
  </Hexcut>
);

export const ItemJewelry = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Perhiasan" {...p}>
    <S d={hexFlat(50, 64, 25)} />
    <A d={hexFlat(50, 28, 15)} fill={accent} />
  </Hexcut>
);

export const ItemOthers = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Lainnya" {...p}>
    <S d={cut(18, 44, 64, 40, 7)} />
    <S d={cut(11, 28, 78, 18, 6)} w={6.5} />
    <A d="M46 28h8v56h-8z" fill={accent} />
    <A d={hexFlat(39, 22, 7)} fill={accent} />
    <A d={hexFlat(61, 22, 7)} fill={accent} />
  </Hexcut>
);
