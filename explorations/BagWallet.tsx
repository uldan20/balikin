import * as React from "react";

/**
 * BALIKIN — Kategori "Tas & Dompet" dalam tiga arah gaya minimalis.
 * Komposisi sama di ketiganya: badan tas + pegangan + kartu dompet terselip
 * di sudut kanan, jadi yang dibandingkan murni bahasa bentuknya.
 * viewBox 0 0 100 100 · goresan utama memakai currentColor.
 */

export type BagProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  accent?: string;
  title?: string;
};

const Frame = ({ size = 96, title = "Tas & Dompet", children, ...rest }: BagProps) => (
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

/* ───────────────────────────────────────────── A · Jejak (goresan menerus) */
export const BagWalletJejak = ({ accent = "#C8952E", ...props }: BagProps) => (
  <Frame title="Tas & Dompet — Jejak" {...props}>
    {/* jejak samar: barang yang ditelusuri */}
    <path
      d="M5 74c2.6-.6 5.2-1 7.8-1.1"
      stroke="currentColor"
      strokeOpacity="0.28"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeDasharray="0.5 12"
    />
    {/* kartu dompet terselip di sudut kanan */}
    <path
      d="M65 46.5 67.4 35c.5-2.3 2.7-3.8 5-3.3l11.6 2.5c2.3.5 3.8 2.7 3.3 5L85 46.5"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M71 39.4l7.4 1.6" stroke={accent} strokeWidth="4.6" strokeLinecap="round" />
    {/* pegangan melengkung */}
    <path
      d="M36 46.5V40c0-7.5 6-13.5 13.5-13.5S63 32.5 63 40v6.5"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
    {/* badan tas, satu goresan tertutup */}
    <path
      d="M23 46.5h54c3.3 0 6 2.5 6.3 5.8l2.6 26.4c.5 4.7-3.2 8.8-7.9 8.8H21c-4.7 0-8.4-4.1-7.9-8.8l2.6-26.4c.3-3.3 3-5.8 6.3-5.8Z"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinejoin="round"
    />
  </Frame>
);

/* ────────────────────────────────── B · Sudut Enam (kisi heksagon, 60°) */
export const BagWalletHexcut = ({ accent = "#C8952E", ...props }: BagProps) => (
  <Frame title="Tas & Dompet — Sudut Enam" {...props}>
    {/* kartu dompet: jajar genjang pada sumbu yang sama */}
    <path
      d="M65 50 71 36h14l-4 14"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
    <path d="M73 44.5h7.5" stroke={accent} strokeWidth="4.4" />
    {/* pegangan bersudut, bukan lengkung */}
    <path
      d="M37 50V38l7-12h12l7 12v12"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
    {/* badan tas: sisi tegak, sudut bawah dipangkas 60° seperti potongan heksagon */}
    <path
      d="M16 50h68v20l-8 14H24l-8-14V50Z"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
    {/* kancing heksagon + garis kantong */}
    <path d="M50 58l6 3.5v7L50 72l-6-3.5v-7L50 58Z" fill={accent} />
    <path d="M30 78h40" stroke="currentColor" strokeOpacity="0.3" strokeWidth="5.5" />
  </Frame>
);

/* ──────────────────────────── C · Tulis Tangan (goresan lebar variabel) */
export const BagWalletTulis = ({ accent = "#C8952E", ...props }: BagProps) => (
  <Frame title="Tas & Dompet — Tulis Tangan" {...props}>
    {/* sapuan aksen cepat di bawah tas */}
    <path
      d="M28 93.5c14-2.6 28.6-3 43.5-1.2"
      stroke={accent}
      strokeOpacity="0.9"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* kartu dompet: bidang terisi, sedikit miring */}
    <path
      d="M64.5 47.4 68 34.6c.6-2.3 2.7-3.6 5-3l11 2.8c2.3.6 3.4 2.5 2.8 4.7L84 47.4Z"
      fill={accent}
    />
    {/* pegangan: sabit meruncing di kedua ujung */}
    <path
      d="M34.6 47.4C33.5 30.8 39.6 20.6 50.4 20.6c10.8 0 16.9 10.2 15.8 26.8h-6c.8-13.4-3.4-20.6-9.8-20.6s-10.6 7.2-9.8 20.6Z"
      fill="currentColor"
    />
    {/* badan tas: cincin spidol, tebalnya tidak rata */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 47Q50 43.6 76 47q3.6.4 4.2 4L86 80q1 8-7.2 8H21.2Q13 88 14 80l5.8-29q.6-3.6 4.2-4ZM28.8 53Q50 50 71.2 53q2.4.3 2.9 2.6L79 79.5q.6 3.1-3 3.1H24q-3.6 0-3-3.1l4.9-23.9q.5-2.3 2.9-2.6Z"
      fill="currentColor"
    />
  </Frame>
);

export const bagVariants = [
  {
    id: "BagWalletJejak",
    name: "Jejak",
    letter: "A",
    idea: "Sudut membulat, tebal garis rata, kartu ikut melengkung. Jejak samar di kiri bawah.",
    why: "Paling ramah dan netral — aman dipakai untuk 30+ ikon tanpa cepat membosankan.",
    Icon: BagWalletJejak,
  },
  {
    id: "BagWalletHexcut",
    name: "Sudut Enam",
    letter: "B",
    idea: "Sisi tegak dengan sudut bawah dipangkas 60° seperti potongan heksagon; pegangan dan kartu ikut sumbu yang sama.",
    why: "Satu aturan sudut yang bisa diturunkan ke semua ikon lain, langsung senada tile dan FAB.",
    Icon: BagWalletHexcut,
  },
  {
    id: "BagWalletTulis",
    name: "Tulis Tangan",
    letter: "C",
    idea: "Bidang terisi dengan tebal tak rata, pegangan meruncing, kartu jadi blok emas.",
    why: "Paling berkarakter, tapi paling mahal digambar ulang untuk tiap ikon baru.",
    Icon: BagWalletTulis,
  },
] as const;
