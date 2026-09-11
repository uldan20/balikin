import * as React from "react";

/**
 * BALIKIN ICON SYSTEM — "SUDUT ENAM" (Hexcut)
 *
 * Aturan bentuk:
 *  1. Kanvas viewBox 0 0 100 100, area aman 8–92.
 *  2. Semua garis mengikuti sumbu kisi heksagon: 0°, 30°, 60°, 90°.
 *     Sudut bidang dipangkas 60° (chamfer), bukan dibulatkan.
 *  3. Sambungan garis mitre (tajam), bukan round — inilah tanda tangan gaya ini.
 *  4. Tebal garis: 7 struktur utama, 6.5 elemen kedua, 5.5 detail.
 *  5. Struktur memakai currentColor; garis pendukung opacity 0.3.
 *  6. Aksen emas #C8952E dipakai maksimal satu elemen per ikon — biasanya
 *     heksagon kecil, agar mata punya satu titik singgah.
 */

export const tokens = {
  bright: "#34A28F",
  primary: "#1B7A6E",
  deep: "#15655B",
  tab: "#12564D",
  red: "#BC5A3C",
  redLight: "#C96845",
  gold: "#C8952E",
  goldLight: "#F3D77C",
  bg: "#FBF8F3",
  fill: "#F1ECE3",
  muted: "#A99F90",
  ink: "#211C16",
} as const;

export const STROKE = { main: 7, second: 6.5, detail: 5.5 } as const;

/** Pembulatan dua desimal supaya path tetap enak dibaca dan file SVG ringkas. */
const n = (v: number) => Math.round(v * 100) / 100;

/** Heksagon bersudut kiri–kanan (flat top). */
export const hexFlat = (cx: number, cy: number, r: number) => {
  const s = n(r * 0.8660254);
  const h = n(r / 2);
  return `M${cx + r} ${cy}L${cx + h} ${cy + s}L${cx - h} ${cy + s}L${cx - r} ${cy}L${cx - h} ${cy - s}L${cx + h} ${cy - s}Z`;
};

/** Heksagon bersudut atas–bawah (pointy top) — bentuk wadah di app. */
export const hexPointy = (cx: number, cy: number, r: number) => {
  const s = n(r * 0.8660254);
  const h = n(r / 2);
  return `M${cx} ${cy - r}L${cx + s} ${cy - h}L${cx + s} ${cy + h}L${cx} ${cy + r}L${cx - s} ${cy + h}L${cx - s} ${cy - h}Z`;
};

/** Bidang persegi dengan empat sudut dipangkas 60°. */
export const cut = (x: number, y: number, w: number, h: number, c = 7) => {
  const v = n(c * 1.732);
  return `M${x + c} ${y}H${x + w - c}L${x + w} ${y + v}V${y + h - v}L${x + w - c} ${y + h}H${x + c}L${x} ${y + h - v}V${y + v}Z`;
};

/** Letusan 12 sudut. Titiknya jatuh tiap 30°, jadi bentuk "meriah" ini pun
 *  masih duduk di kisi yang sama dengan seluruh pustaka. */
export const burst = (cx: number, cy: number, r1: number, r2: number) => {
  const pts: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = ((i * 30 - 90) * Math.PI) / 180;
    const r = i % 2 === 0 ? r1 : r2;
    pts.push(`${n(cx + r * Math.cos(a))} ${n(cy + r * Math.sin(a))}`);
  }
  return `M${pts.join("L")}Z`;
};

/** Bintang empat sudut bersudut tajam — dipakai untuk apresiasi, poin, dan sorotan.
 *  Sengaja BUKAN bintang enam: dua segitiga yang saling tumpuk membentuk
 *  Star of David, simbol religius yang tidak diinginkan di konteks ini. */
export const star4 = (cx: number, cy: number, r: number, k = 0.3) => {
  const i = n(r * k);
  return `M${cx} ${cy - r}L${cx + i} ${cy - i}L${cx + r} ${cy}L${cx + i} ${cy + i}L${cx} ${cy + r}L${cx - i} ${cy + i}L${cx - r} ${cy}L${cx - i} ${cy - i}Z`;
};

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  /** Warna aksen. Default emas Balikin. */
  accent?: string;
  title?: string;
};

export const Hexcut = ({ size = 96, title, children, ...rest }: IconProps) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    stroke="none"
    strokeLinejoin="miter"
    strokeMiterlimit={8}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...rest}
  >
    {children}
  </svg>
);

/** Garis struktur utama. */
export const S = ({ d, w = STROKE.main, o }: { d: string; w?: number; o?: number }) => (
  <path d={d} stroke="currentColor" strokeWidth={w} strokeOpacity={o} />
);

/** Bidang aksen emas. */
export const A = ({ d, fill }: { d: string; fill: string }) => <path d={d} fill={fill} />;
