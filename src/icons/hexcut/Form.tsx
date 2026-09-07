import * as React from "react";
import { Hexcut, S, A, hexFlat, hexPointy, cut, IconProps, tokens } from "./base";

/* Kelompok 3 — Form, Media & Peta */

export const ActionPlus = (p: IconProps) => (
  <Hexcut title="Tambah" {...p}>
    <S d="M50 20v60M20 50h60" w={7.5} />
  </Hexcut>
);

export const FormCheckbox = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kotak centang" {...p}>
    <S d={cut(14, 14, 72, 72, 11)} />
    <path d="M32 50 45 67 70 32" stroke={accent} strokeWidth={7.5} />
  </Hexcut>
);

export const FormRadio = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Pilihan tunggal" {...p}>
    <S d={hexFlat(50, 50, 32)} />
    <A d={hexFlat(50, 50, 14)} fill={accent} />
  </Hexcut>
);

export const FormToggle = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sakelar" {...p}>
    <S d={cut(8, 30, 84, 40, 9)} />
    <A d={hexFlat(68, 50, 13)} fill={accent} />
  </Hexcut>
);

export const FormEye = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Tampilkan" {...p}>
    <S d="M10 50 50 24 90 50 50 76 10 50Z" />
    <A d={hexFlat(50, 50, 12)} fill={accent} />
  </Hexcut>
);

export const FormEyeOff = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Sembunyikan" {...p}>
    <S d="M10 50 50 24 90 50 50 76 10 50Z" o={0.32} />
    <S d={hexFlat(50, 50, 12)} w={6} o={0.32} />
    <path d="M18 18 82 82" stroke={accent} strokeWidth={7.5} />
  </Hexcut>
);

export const ActionShutter = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Ambil foto" {...p}>
    <S d={hexPointy(50, 50, 36)} />
    <S d={hexPointy(50, 50, 22)} w={6.5} />
    <A d={hexFlat(50, 50, 8)} fill={accent} />
  </Hexcut>
);

export const ActionFlash = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Flash" {...p}>
    <S d="M58 10 30 54h16l-4 36 28-46H54l4-34Z" w={6.5} />
  </Hexcut>
);

export const ActionScan = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Pindai" {...p}>
    <S d="M14 38V22h16M70 22h16v16M86 62v16H70M30 78H14V62" w={7} />
    <A d="M22 46h56v8H22z" fill={accent} />
  </Hexcut>
);

export const FormPin = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Titik lokasi" {...p}>
    <S d="M38 20h24l12 16v18L50 86 26 54V36L38 20Z" />
    <A d={hexFlat(50, 42, 8)} fill={accent} />
  </Hexcut>
);

export const FormCalendar = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kalender" {...p}>
    <S d="M32 26V12M68 26V12" w={6.5} />
    <S d={cut(11, 24, 78, 62, 9)} />
    <S d="M14 44h72" w={6} />
    <A d={hexFlat(35, 63, 7)} fill={accent} />
    <S d={hexFlat(58, 63, 7)} w={5} o={0.4} />
  </Hexcut>
);
