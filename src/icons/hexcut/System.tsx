import * as React from "react";
import { Hexcut, S, A, hexFlat, cut, IconProps, tokens } from "./base";

/* Kelompok 1 — Navigasi & Sistem UI */

export const SysSignal = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Sinyal" {...p}>
    <S d="M18 70v12M38 58v24M58 44v38" />
    <path d="M78 26v56" stroke={accent} strokeWidth={7} />
  </Hexcut>
);

export const SysWifi = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Wi-Fi" {...p}>
    <S d="M10 42 50 19 90 42" />
    <S d="M26 58 50 44 74 58" w={6.5} />
    <A d={hexFlat(50, 74, 9)} fill={accent} />
  </Hexcut>
);

export const SysWifiOff = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Wi-Fi terputus" {...p}>
    <S d="M10 42 50 19 90 42" o={0.32} />
    <S d="M26 58 50 44 74 58" w={6.5} o={0.32} />
    <S d={hexFlat(50, 74, 9)} w={5.5} o={0.32} />
    <path d="M18 18 82 82" stroke={accent} strokeWidth={7.5} />
  </Hexcut>
);

export const SysBattery = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Baterai" {...p}>
    <S d={cut(10, 32, 68, 36, 6)} />
    <S d="M84 43v14" w={7} />
    <A d="M20 42h30v16H20z" fill={accent} />
  </Hexcut>
);

export const ArrowForward = (p: IconProps) => (
  <Hexcut title="Lanjut" {...p}>
    <S d="M16 50h58" />
    <S d="M60 26 74 50 60 74" w={7.5} />
  </Hexcut>
);

export const ArrowUp = (p: IconProps) => (
  <Hexcut title="Ke atas" {...p}>
    <S d="M50 84V26" />
    <S d="M26 40 50 26 74 40" w={7.5} />
  </Hexcut>
);

export const ArrowDownload = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Unduh" {...p}>
    <S d="M50 14v44" />
    <S d="M30 44 50 64 70 44" w={7.5} />
    <A d="M20 78h60v8H20z" fill={accent} />
  </Hexcut>
);

export const ChevronDown = (p: IconProps) => (
  <Hexcut title="Buka" {...p}>
    <S d="M22 38 50 66 78 38" w={7.5} />
  </Hexcut>
);

export const ActionClose = (p: IconProps) => (
  <Hexcut title="Tutup" {...p}>
    <S d="M26 26 74 74M74 26 26 74" w={7.5} />
  </Hexcut>
);

export const ActionRefresh = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Muat ulang" {...p}>
    <S d="M80 52 65 78H35L20 52 35 26h30" />
    <A d="M62 12 84 25 62 38Z" fill={accent} />
  </Hexcut>
);

export const MapLayers = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Layer peta" {...p}>
    <S d="M50 12 88 34 50 56 12 34 50 12Z" />
    <S d="M12 50 50 72 88 50" w={6} o={0.4} />
    <S d="M12 66 50 88 88 66" w={6} o={0.28} />
    <A d={hexFlat(50, 34, 7)} fill={accent} />
  </Hexcut>
);

export const NavArrow = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Penunjuk arah" {...p}>
    <S d="M16 44 86 14 56 86 46 54 16 44Z" />
    <A d={hexFlat(52, 48, 6)} fill={accent} />
  </Hexcut>
);
