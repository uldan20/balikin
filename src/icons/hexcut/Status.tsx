import * as React from "react";
import { Hexcut, S, A, hexFlat, hexPointy, star4, IconProps, tokens } from "./base";

/* Kategori 3 — Status & Indikator.
   Pin memakai `tone` supaya warna semantiknya tegas, bukan ikut currentColor. */

type PinProps = IconProps & { tone?: string };

const pin = "M38 20h24l12 16v18L50 86 26 54V36L38 20Z";

export const StatusLost = ({ tone = tokens.red, accent = tokens.redLight, ...p }: PinProps) => (
  <Hexcut title="Hilang" {...p}>
    <path d={pin} stroke={tone} strokeWidth={7} />
    <path d={hexFlat(50, 42, 9)} stroke={accent} strokeWidth={6} />
  </Hexcut>
);

export const StatusFound = ({ tone = tokens.primary, accent = tokens.gold, ...p }: PinProps) => (
  <Hexcut title="Ditemukan" {...p}>
    <path d={pin} stroke={tone} strokeWidth={7} />
    <path d="M39 41 47 54 63 32" stroke={accent} strokeWidth={7} />
  </Hexcut>
);

export const StatusReturned = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sudah kembali" {...p}>
    <S d={hexPointy(50, 50, 32)} w={6.5} o={0.32} />
    <S d="M34 50 47 71 74 26" w={8} />
    <A d={hexFlat(74, 26, 5)} fill={accent} />
  </Hexcut>
);

export const RewardBadge = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Apresiasi" {...p}>
    <S d="M34 70v22l16-9 16 9V70" w={6.5} />
    <S d={hexPointy(50, 44, 30)} />
    <A d={star4(50, 44, 19)} fill={accent} />
  </Hexcut>
);

export const VerifiedBadge = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Terverifikasi" {...p}>
    <S d={hexPointy(50, 50, 32)} w={8} />
    <path d="M36 50 46 64 66 34" stroke={accent} strokeWidth={7.5} />
  </Hexcut>
);

export const VerifiedMini = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Terverifikasi" {...p}>
    <path d={hexPointy(50, 50, 34)} fill="currentColor" />
    <path d="M36 50 46 63 66 35" stroke={accent} strokeWidth={8} />
  </Hexcut>
);
