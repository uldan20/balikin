import * as React from "react";

/**
 * BALIKIN — Ceklis kustom (minimalis, bukan 3D).
 * Tiga arah gaya untuk dipilih. Semua memakai `currentColor` untuk goresan utama
 * supaya bisa dipakai putih di atas teal maupun teal di atas krem.
 * viewBox 0 0 100 100 · aksen emas #C8952E dari token resmi.
 */

export type CheckProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  /** Warna aksen kecil (titik/sapuan). Default emas Balikin. */
  accent?: string;
  title?: string;
};

const Frame = ({ size = 96, title = "Ceklis", children, ...rest }: CheckProps) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...rest}
  >
    {children}
  </svg>
);

/* ─────────────────────────────────────────────── A · Jejak (satu goresan) */
export const CheckJejak = ({ accent = "#C8952E", ...props }: CheckProps) => (
  <Frame title="Ceklis — Jejak" {...props}>
    {/* jejak yang ditelusuri sebelum ketemu */}
    <path
      d="M9 40.5c4.4 2.2 8.2 5 11.5 8.4"
      stroke="currentColor"
      strokeOpacity="0.28"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="0.5 13"
    />
    {/* goresan utama: melengkung halus, bukan dua garis lurus */}
    <path
      d="M23 51.5c6.6 4.4 12.4 10.6 17.5 18.5 8.6-19.5 20.4-35.5 35.5-48"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* percik emas di ujung: momen "ketemu" */}
    <circle cx="79.5" cy="19.5" r="4.5" fill={accent} />
  </Frame>
);

/* ────────────────────────────────────── B · Sudut Enam (kisi heksagon 60°) */
export const CheckHexcut = ({
  accent = "#C8952E",
  frame = true,
  ...props
}: CheckProps & { frame?: boolean }) => (
  <Frame title="Ceklis — Sudut Enam" {...props}>
    {/* heksagon terbuka di sisi kanan-atas, ditembus ujung ceklis.
        Matikan lewat frame={false} untuk ukuran <20px. */}
    {frame && (
      <path
        d="M50 9 17 28v38l33 19 33-19V44"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
    {/* ceklis pada sumbu 60°, sudut mitre tajam */}
    <path
      d="M31 43.5 47 71 87 21"
      stroke="currentColor"
      strokeWidth="8.5"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
    {/* simpul kisi */}
    <circle cx="87" cy="21" r="4" fill={accent} />
  </Frame>
);

/* ────────────────────────────────── C · Tulis Tangan (goresan lebar variabel) */
export const CheckTulis = ({ accent = "#C8952E", ...props }: CheckProps) => (
  <Frame title="Ceklis — Tulis Tangan" {...props}>
    {/* sapuan aksen di belakang, seperti stabilo cepat */}
    <path
      d="M31 82c12.5-3.4 25.6-4.6 39.4-3.6"
      stroke={accent}
      strokeOpacity="0.85"
      strokeWidth="5.5"
      strokeLinecap="round"
    />
    {/* goresan spidol: path terisi, tipis di pangkal, tebal di siku, runcing di ujung */}
    <path
      d="M17.6 50.4c1.4-2.4 4.2-2.6 7-.6 6.6 4.8 12.6 11.4 18 19.6 8.2-17.6 19.6-33.4 34.2-47.4 2.2-2.1 4.6-2.2 6-.4 1.3 1.7.9 3.8-1.1 6.1C68 41.4 57.6 57.4 50 74.6c-1.6 3.6-3.4 5.6-5.6 5.9-2.3.3-4.2-1.2-5.8-4.2-4.6-8.6-10.2-16-16.8-22.2-2.2-2-3.2-2.7-4.2-3.7Z"
      fill="currentColor"
    />
  </Frame>
);

export const checkVariants = [
  {
    id: "CheckJejak",
    name: "Jejak",
    idea: "Satu goresan menerus dengan lead-in samar dan percik emas di ujung.",
    why: "Metafora menelusuri barang sampai ketemu — sesuai inti Balikin.",
    Icon: CheckJejak,
  },
  {
    id: "CheckHexcut",
    name: "Sudut Enam",
    idea: "Garis di sumbu 60° kisi heksagon, bingkai heksagon terbuka ditembus ujung ceklis.",
    why: "Ikon terasa dipotong dari kisi yang sama dengan tile dan badge di app.",
    Icon: CheckHexcut,
  },
  {
    id: "CheckTulis",
    name: "Tulis Tangan",
    idea: "Goresan spidol lebar-variabel dengan sapuan aksen di belakang.",
    why: "Nada hangat dan manusiawi untuk momen apresiasi dan onboarding.",
    Icon: CheckTulis,
  },
] as const;
