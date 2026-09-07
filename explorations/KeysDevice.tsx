import * as React from "react";

/**
 * BALIKIN — Kategori "Kunci" dan "HP & Elektronik" dalam tiga arah gaya.
 * Kunci menguji bentuk melingkar + detail gigi kecil; HP menguji bidang besar
 * yang gampang terasa kosong. Keduanya memakai isyarat yang sama di tiap gaya:
 * lubang kunci emas, dan kilat emas di dalam layar.
 * viewBox 0 0 100 100 · goresan utama memakai currentColor.
 */

export type GlyphProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  accent?: string;
  title?: string;
};

const G = ({ size = 96, title, children, ...rest }: GlyphProps) => (
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

/* ═══════════════════════════════════════════════════════════════ KUNCI */

export const KeysJejak = ({ accent = "#C8952E", ...props }: GlyphProps) => (
  <G title="Kunci — Jejak" {...props}>
    <path
      d="M8 26c2.7.8 5.2 1.9 7.6 3.3"
      stroke="currentColor"
      strokeOpacity="0.28"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeDasharray="0.5 12"
    />
    <circle cx="35" cy="35" r="17.5" stroke="currentColor" strokeWidth="7" />
    <circle cx="35" cy="35" r="5" fill={accent} />
    <path
      d="M47.4 47.4 79 79"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M61 61.5 69.5 53M70.5 71l7-7"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
  </G>
);

export const KeysHexcut = ({ accent = "#C8952E", ...props }: GlyphProps) => (
  <G title="Kunci — Sudut Enam" {...props}>
    <path
      d="M50 50 40.5 66.5h-19L12 50l9.5-16.5h19L50 50Z"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
    <path d="M38 50l-3.5 6h-7L24 50l3.5-6h7l3.5 6Z" fill={accent} />
    <path d="M50 50h38" stroke="currentColor" strokeWidth="7" strokeLinecap="butt" />
    <path
      d="M72 50 78 60.4M85 50l4 6.9"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinecap="butt"
    />
  </G>
);

export const KeysTulis = ({ accent = "#C8952E", ...props }: GlyphProps) => (
  <G title="Kunci — Tulis Tangan" {...props}>
    <path d="M30 92q22-3.4 42 .4" stroke={accent} strokeOpacity="0.9" strokeWidth="4.8" strokeLinecap="round" />
    {/* cincin: tebal tak rata */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35 16.4c10.6 0 18.9 8.4 18.9 18.9 0 10.2-8.3 18.4-18.9 18.4S16.4 45.5 16.4 35.3c0-10.5 8-18.9 18.6-18.9Zm.4 6.8c-6.8 0-12.2 5.2-12.2 12.1 0 6.6 5.4 11.8 12.2 11.8 6.6 0 11.6-5.2 11.6-11.8 0-6.9-5-12.1-11.6-12.1Z"
      fill="currentColor"
    />
    {/* batang meruncing */}
    <path
      d="M45.6 50.2c1.4-1.7 3.2-3.2 5.2-4.3L82.8 76c1.4 1.4 1.3 2.9-.4 4.6-1.7 1.7-3.3 1.8-4.7.4L45.6 50.2Z"
      fill="currentColor"
    />
    {/* gigi */}
    <path d="M61 61 71.5 50.5 77 56 66.5 66.5 61 61ZM71 71 78.5 63.5 83.5 68.5 76 76 71 71Z" fill="currentColor" />
  </G>
);

/* ══════════════════════════════════════════════════ HP & ELEKTRONIK */

export const DeviceJejak = ({ accent = "#C8952E", ...props }: GlyphProps) => (
  <G title="HP & Elektronik — Jejak" {...props}>
    <path
      d="M8 70c2.4-1 4.9-1.8 7.4-2.3"
      stroke="currentColor"
      strokeOpacity="0.28"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeDasharray="0.5 12"
    />
    <path
      d="M34 13h32c5.5 0 10 4.5 10 10v54c0 5.5-4.5 10-10 10H34c-5.5 0-10-4.5-10-10V23c0-5.5 4.5-10 10-10Z"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinejoin="round"
    />
    <path d="M43 24.5h14" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
    <path
      d="M55 36 41.5 56h10L45 76l14.5-21h-10L55 36Z"
      fill={accent}
    />
  </G>
);

export const DeviceHexcut = ({ accent = "#C8952E", ...props }: GlyphProps) => (
  <G title="HP & Elektronik — Sudut Enam" {...props}>
    <path
      d="M35 13h30l9 14v46l-9 14H35l-9-14V27l9-14Z"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
    <path d="M42 24h16" stroke="currentColor" strokeWidth="5.5" />
    <path d="M56 36 40 57h10l-6 21 16-21H50l6-21Z" fill={accent} />
  </G>
);

export const DeviceTulis = ({ accent = "#C8952E", ...props }: GlyphProps) => (
  <G title="HP & Elektronik — Tulis Tangan" {...props}>
    <path d="M32 94c12-2.2 24.4-2.4 37-.6" stroke={accent} strokeOpacity="0.9" strokeWidth="4.8" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.5 11.5h31q10 0 10 10.4v56.4q0 10.2-10.4 10.2H34.2Q24 88.5 24 78.1V22Q24 11.8 34.5 11.5ZM35.5 20Q30 20.4 30 24.2v52q0 4.4 4.6 4.4h30.6q4.6 0 4.6-4.6V23.8q0-3.8-4.6-3.8Z"
      fill="currentColor"
    />
    <path d="M42.6 24.4q7.6-1 15.2 0 2.4.3 2.3 2.6-.1 2.2-2.5 2-7-.8-14.6 0-2.4.2-2.5-2-.1-2.3 2.1-2.6Z" fill="currentColor" />
    <path d="M56.4 34.8 39.8 57.4q-1.4 1.9.9 1.9h8.4L43 76.4q-.6 2 1 .8l16.8-22.6q1.4-1.9-1-1.9h-8.2l5.6-17.2q.6-2-.8-.7Z" fill={accent} />
  </G>
);

export const glyphMatrix = {
  Jejak: { letter: "A", Keys: KeysJejak, Device: DeviceJejak },
  Hexcut: { letter: "B", Keys: KeysHexcut, Device: DeviceHexcut },
  Tulis: { letter: "C", Keys: KeysTulis, Device: DeviceTulis },
} as const;
