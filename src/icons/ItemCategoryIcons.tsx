import * as React from "react";

/**
 * BALIKIN — Icon Library / Kategori 2: Kategori Barang (Item Types)
 * Gaya: Korean Soft 3D / Claymorphism (bervolume, organik, membal).
 * viewBox 0 0 100 100 · gradien di dalam <defs> · hanya token warna resmi Balikin.
 */

export const balikinTokens = {
  bright: "#34A28F",
  header: "#2E8B7C",
  primary: "#1B7A6E",
  deep: "#15655B",
  tab: "#12564D",
  darkest: "#0C3B34",
  redLight: "#C96845",
  red: "#BC5A3C",
  redDeep: "#A84E32",
  redBg: "#F6E5DD",
  redBorder: "#EBD2C7",
  goldLight: "#F3D77C",
  gold: "#C8952E",
  goldText: "#8A6A1E",
  goldBg: "#FAF3E4",
  goldInk: "#5C4D18",
  bg: "#FBF8F3",
  fill: "#F1ECE3",
  border: "#ECE5DA",
  muted: "#A99F90",
  meta: "#8A8175",
  body: "#6B6258",
  ink: "#211C16",
} as const;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

/** ID unik per instance supaya gradien tidak saling menimpa saat ikon dirender berulang. */
const useUid = () => React.useId().replace(/:/g, "");

const Svg = ({ size = 96, title, children, ...rest }: IconProps) => (
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

/** Bayangan utama sesuai spesifikasi design system. */
const ClayShadow = ({ id }: { id: string }) => (
  <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#211C16" floodOpacity="0.12" />
  </filter>
);

/** Bayangan kontak lembut di bawah objek (menegaskan objek mengambang). */
const Ground = ({ rx = 27, cy = 90 }: { rx?: number; cy?: number }) => (
  <ellipse cx="50" cy={cy} rx={rx} ry="5.5" fill="#211C16" opacity="0.09" />
);

/* ────────────────────────────────────────────────────────────── 1. Elektronik */
export const ItemElectronics = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Elektronik" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="28" y1="8" x2="74" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="0.5" stopColor="#1B7A6E" />
          <stop offset="1" stopColor="#12564D" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="34" y1="20" x2="66" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C3B34" />
          <stop offset="1" stopColor="#15655B" />
        </linearGradient>
        <linearGradient id={`${u}c`} x1="42" y1="24" x2="58" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="1" stopColor="#C8952E" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="24" />
      <g filter={`url(#${u}s)`}>
        <rect x="25" y="9" width="50" height="78" rx="19" fill={`url(#${u}a)`} />
        <rect x="31.5" y="18" width="37" height="55" rx="13" fill={`url(#${u}b)`} />
        <rect x="42" y="22.5" width="16" height="6" rx="3" fill="#0C3B34" opacity="0.6" />
        <circle cx="61.5" cy="25.5" r="3.4" fill={`url(#${u}c)`} />
        <circle cx="60.4" cy="24.4" r="1.3" fill="#FAF3E4" opacity="0.85" />
        <rect x="36" y="38" width="19" height="6" rx="3" fill="#34A28F" opacity="0.55" />
        <rect x="36" y="49" width="26" height="6" rx="3" fill="#34A28F" opacity="0.33" />
        <rect x="36" y="60" width="14" height="6" rx="3" fill="#34A28F" opacity="0.22" />
        <rect x="41" y="77" width="18" height="5" rx="2.5" fill="#0C3B34" opacity="0.45" />
        <path
          d="M31 26C31 16.6 38.6 9 48 9h9"
          stroke="#F1ECE3"
          strokeOpacity="0.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </Svg>
  );
};

/* ───────────────────────────────────────────────────────────────── 2. Dompet */
export const ItemWallet = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Dompet" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="12" y1="40" x2="86" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E8B7C" />
          <stop offset="0.55" stopColor="#1B7A6E" />
          <stop offset="1" stopColor="#12564D" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="16" y1="34" x2="84" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="1" stopColor="#15655B" />
        </linearGradient>
        <linearGradient id={`${u}c`} x1="30" y1="12" x2="70" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAF3E4" />
          <stop offset="1" stopColor="#F1ECE3" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="30" cy="91" />
      <g filter={`url(#${u}s)`}>
        <g transform="rotate(-8 50 30)">
          <rect x="30" y="11" width="40" height="30" rx="8" fill={`url(#${u}c)`} />
          <circle cx="40.5" cy="21.5" r="5" fill="#C8952E" />
          <circle cx="39" cy="20" r="1.8" fill="#F3D77C" />
          <rect x="49" y="18" width="17" height="4" rx="2" fill="#A99F90" />
          <rect x="49" y="26" width="12" height="4" rx="2" fill="#ECE5DA" />
          <rect x="36" y="32" width="26" height="4" rx="2" fill="#ECE5DA" />
        </g>
        <path
          d="M14 52c0-8.8 7.2-16 16-16h40c8.8 0 16 7.2 16 16v6H14v-6Z"
          fill={`url(#${u}b)`}
        />
        <rect x="13" y="49" width="74" height="39" rx="17" fill={`url(#${u}a)`} />
        <rect x="55" y="59" width="34" height="19" rx="9" fill="#0C3B34" opacity="0.35" />
        <rect x="53" y="57" width="34" height="19" rx="9" fill="#F1ECE3" />
        <circle cx="70" cy="66.5" r="5.6" fill="#C8952E" />
        <circle cx="68.2" cy="64.7" r="2.2" fill="#F3D77C" />
        <path
          d="M20 63c0-6.6 5.4-12 12-12h14"
          stroke="#F1ECE3"
          strokeOpacity="0.45"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </Svg>
  );
};

/* ───────────────────────────────────────────────────────────────── 3. Kunci */
export const ItemKeys = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Kunci" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="18" y1="14" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="1" stopColor="#15655B" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="40" y1="34" x2="82" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="0.55" stopColor="#C8952E" />
          <stop offset="1" stopColor="#8A6A1E" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="26" cy="91" />
      <g filter={`url(#${u}s)`}>
        <circle cx="34" cy="32" r="21" fill={`url(#${u}a)`} />
        <circle cx="34" cy="32" r="10.5" fill="#0C3B34" opacity="0.42" />
        <circle cx="34" cy="32" r="8" fill="#FBF8F3" opacity="0.14" />
        <path
          d="M19 25c2.4-6.6 8.4-11 15-11.6"
          stroke="#F1ECE3"
          strokeOpacity="0.55"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <g>
          <rect x="57.5" y="56" width="12" height="32" rx="6" fill={`url(#${u}b)`} />
          <rect x="69" y="64" width="11" height="7.5" rx="3.75" fill={`url(#${u}b)`} />
          <rect x="69" y="76" width="8.5" height="7.5" rx="3.75" fill={`url(#${u}b)`} />
          <circle cx="63.5" cy="52" r="15" fill={`url(#${u}b)`} />
          <circle cx="63.5" cy="52" r="6.4" fill="#5C4D18" opacity="0.5" />
          <circle cx="63.5" cy="52" r="4.4" fill="#FAF3E4" opacity="0.35" />
          <path
            d="M53.5 46c1.8-3.2 4.8-5.4 8.4-6"
            stroke="#FAF3E4"
            strokeOpacity="0.65"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>
    </Svg>
  );
};

/* ─────────────────────────────────────────────────────────────── 4. Dokumen */
export const ItemDocuments = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Dokumen" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="12" y1="18" x2="52" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="1" stopColor="#1B7A6E" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="14" y1="38" x2="80" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E8B7C" />
          <stop offset="0.6" stopColor="#15655B" />
          <stop offset="1" stopColor="#0C3B34" />
        </linearGradient>
        <linearGradient id={`${u}c`} x1="52" y1="18" x2="72" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="1" stopColor="#C8952E" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="29" cy="91" />
      <g filter={`url(#${u}s)`}>
        <path
          d="M12 30c0-6.6 5.4-12 12-12h13.6c3.4 0 6.6 1.4 8.9 3.9l4.3 4.7H70c6.6 0 12 5.4 12 12v6H12V30Z"
          fill={`url(#${u}a)`}
        />
        <rect x="24" y="27" width="52" height="44" rx="9" fill="#FBF8F3" />
        <rect x="32" y="37" width="26" height="4.6" rx="2.3" fill="#ECE5DA" />
        <rect x="32" y="47" width="34" height="4.6" rx="2.3" fill="#ECE5DA" />
        <rect x="32" y="57" width="20" height="4.6" rx="2.3" fill="#ECE5DA" />
        <rect x="11" y="40" width="78" height="48" rx="16" fill={`url(#${u}b)`} />
        <path
          d="M18 54c0-4.4 3.6-8 8-8h12"
          stroke="#F1ECE3"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M67 24v22c0 6.4-5.2 11.6-11.6 11.6S43.8 52.4 43.8 46V33"
          stroke={`url(#${u}c)`}
          strokeWidth="5.6"
          strokeLinecap="round"
        />
        <path d="M64.6 28c1.2.8 1.8 1.9 1.8 3.4" stroke="#FAF3E4" strokeOpacity="0.75" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </Svg>
  );
};

/* ──────────────────────────────────────────────────────────────────── 5. Tas */
export const ItemBag = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Tas" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="16" y1="22" x2="84" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="0.5" stopColor="#1B7A6E" />
          <stop offset="1" stopColor="#12564D" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="30" y1="56" x2="70" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#15655B" />
          <stop offset="1" stopColor="#0C3B34" />
        </linearGradient>
        <linearGradient id={`${u}c`} x1="44" y1="62" x2="56" y2="74" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="1" stopColor="#C8952E" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="28" cy="91" />
      <g filter={`url(#${u}s)`}>
        <path
          d="M38 32V23a12 12 0 0 1 24 0v9"
          stroke="#12564D"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path d="M28 46c0-9 4-16 9-19M72 46c0-9-4-16-9-19" stroke="#12564D" strokeWidth="7" strokeLinecap="round" />
        <path d="M15 47c0-11 9-20 20-20h30c11 0 20 9 20 20v24c0 9.4-7.6 17-17 17H32c-9.4 0-17-7.6-17-17V47Z" fill={`url(#${u}a)`} />
        <path d="M15 44h70v9H15z" fill="#0C3B34" opacity="0.22" />
        <rect x="27" y="56" width="46" height="32" rx="14" fill="#0C3B34" opacity="0.28" />
        <rect x="28" y="55" width="44" height="33" rx="13" fill={`url(#${u}b)`} />
        <rect x="34" y="64" width="32" height="6" rx="3" fill={`url(#${u}c)`} />
        <circle cx="50" cy="67" r="5.2" fill="#F3D77C" />
        <rect x="47.6" y="70" width="4.8" height="10" rx="2.4" fill="#C8952E" />
        <path d="M35 78h30" stroke="#0C3B34" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M22 60c0-11.6 5.6-21 13-24"
          stroke="#F1ECE3"
          strokeOpacity="0.42"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </g>
    </Svg>
  );
};

/* ──────────────────────────────────────────────────────────── 6. Hewan (Tag) */
export const ItemPets = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Hewan Peliharaan" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="18" y1="18" x2="82" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="0.55" stopColor="#1B7A6E" />
          <stop offset="1" stopColor="#12564D" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="36" y1="60" x2="64" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="0.5" stopColor="#C8952E" />
          <stop offset="1" stopColor="#8A6A1E" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="24" cy="93" />
      <g filter={`url(#${u}s)`}>
        <ellipse
          cx="50"
          cy="40"
          rx="27"
          ry="24"
          stroke={`url(#${u}a)`}
          strokeWidth="14"
          fill="none"
        />
        <ellipse cx="50" cy="40" rx="27" ry="24" stroke="#0C3B34" strokeOpacity="0.16" strokeWidth="5" fill="none" />
        <g fill="#0C3B34" opacity="0.4">
          <circle cx="34" cy="23" r="2.6" />
          <circle cx="50" cy="16.5" r="2.6" />
          <circle cx="66" cy="23" r="2.6" />
        </g>
        <path
          d="M27 33c2.6-7.4 8.6-12.8 16-14.6"
          stroke="#F1ECE3"
          strokeOpacity="0.5"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="50" cy="62" r="4.6" fill="#12564D" />
        <circle cx="50" cy="76" r="16" fill={`url(#${u}b)`} />
        <circle cx="50" cy="66.5" r="3.4" fill="#8A6A1E" />
        <g fill="#5C4D18" opacity="0.72">
          <ellipse cx="44.8" cy="73.4" rx="2.5" ry="3.2" />
          <ellipse cx="50" cy="71.2" rx="2.5" ry="3.2" />
          <ellipse cx="55.2" cy="73.4" rx="2.5" ry="3.2" />
          <path d="M50 77c4.4 0 7.1 2.7 7.1 5.7 0 2.9-2.5 4.4-7.1 4.4s-7.1-1.5-7.1-4.4c0-3 2.7-5.7 7.1-5.7Z" />
        </g>
        <path d="M40 70c.9-3 3.1-5.3 6.2-6.2" stroke="#FAF3E4" strokeOpacity="0.55" strokeWidth="2.6" strokeLinecap="round" />
      </g>
    </Svg>
  );
};

/* ────────────────────────────────────────────────────────────── 7. Perhiasan */
export const ItemJewelry = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Perhiasan" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="22" y1="40" x2="78" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="0.5" stopColor="#C8952E" />
          <stop offset="1" stopColor="#8A6A1E" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="36" y1="18" x2="66" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="0.6" stopColor="#1B7A6E" />
          <stop offset="1" stopColor="#0C3B34" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="25" cy="93" />
      <g filter={`url(#${u}s)`}>
        <ellipse cx="50" cy="64" rx="27" ry="26" fill={`url(#${u}a)`} />
        <ellipse cx="50" cy="65" rx="15" ry="14.5" fill="#FBF8F3" />
        <ellipse cx="50" cy="65" rx="15" ry="14.5" fill="#8A6A1E" opacity="0.12" />
        <path
          d="M30 55c1.6-6 6-11 12-13.6"
          stroke="#FAF3E4"
          strokeOpacity="0.62"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path d="M50 17l15 15.5L50 55 35 32.5 50 17Z" fill={`url(#${u}b)`} />
        <path d="M50 17l15 15.5H35L50 17Z" fill="#34A28F" opacity="0.8" />
        <path d="M35 32.5h30L50 55 35 32.5Z" fill="#0C3B34" opacity="0.18" />
        <path d="M42.5 24.5L50 32.5 42.5 41" stroke="#F1ECE3" strokeOpacity="0.55" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Svg>
  );
};

/* ──────────────────────────────────────────────────────── 8. Lainnya (Kotak) */
export const ItemOthers = (props: IconProps) => {
  const u = useUid();
  return (
    <Svg title="Lainnya" {...props}>
      <defs>
        <linearGradient id={`${u}a`} x1="18" y1="40" x2="82" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E8B7C" />
          <stop offset="0.55" stopColor="#1B7A6E" />
          <stop offset="1" stopColor="#12564D" />
        </linearGradient>
        <linearGradient id={`${u}b`} x1="14" y1="30" x2="86" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34A28F" />
          <stop offset="1" stopColor="#15655B" />
        </linearGradient>
        <linearGradient id={`${u}c`} x1="38" y1="14" x2="64" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D77C" />
          <stop offset="0.6" stopColor="#C8952E" />
          <stop offset="1" stopColor="#8A6A1E" />
        </linearGradient>
        <ClayShadow id={`${u}s`} />
      </defs>
      <Ground rx="29" cy="92" />
      <g filter={`url(#${u}s)`}>
        <rect x="19" y="46" width="62" height="43" rx="15" fill={`url(#${u}a)`} />
        <rect x="14" y="30" width="72" height="24" rx="11" fill={`url(#${u}b)`} />
        <rect x="14" y="46" width="72" height="8" rx="4" fill="#0C3B34" opacity="0.18" />
        <path
          d="M21 42c0-4.4 3.6-8 8-8h14"
          stroke="#F1ECE3"
          strokeOpacity="0.45"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="42" y="30" width="16" height="59" rx="6" fill={`url(#${u}c)`} />
        <path
          d="M50 30c-9 0-16-3.4-16-9s8-5.4 10.6-1.4C46.6 22.6 50 30 50 30Zm0 0c9 0 16-3.4 16-9s-8-5.4-10.6-1.4C53.4 22.6 50 30 50 30Z"
          fill={`url(#${u}c)`}
        />
        <path d="M45.5 33v53" stroke="#FAF3E4" strokeOpacity="0.5" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </Svg>
  );
};

export const itemCategoryIcons = [
  { id: "ItemElectronics", label: "Elektronik", note: "Smartphone 3D dengan lampu indikator emas.", Icon: ItemElectronics },
  { id: "ItemWallet", label: "Dompet", note: "Dompet 3D terbuka dengan kartu ID melayang.", Icon: ItemWallet },
  { id: "ItemKeys", label: "Kunci", note: "Gantungan kunci 3D dengan ring membal.", Icon: ItemKeys },
  { id: "ItemDocuments", label: "Dokumen", note: "Map dokumen 3D dengan jepitan kertas emas.", Icon: ItemDocuments },
  { id: "ItemBag", label: "Tas", note: "Ransel 3D melengkung dengan kantong depan.", Icon: ItemBag },
  { id: "ItemPets", label: "Hewan", note: "Kalung hewan 3D dengan liontin tag emas.", Icon: ItemPets },
  { id: "ItemJewelry", label: "Perhiasan", note: "Cincin 3D mengkilap dengan batu teal.", Icon: ItemJewelry },
  { id: "ItemOthers", label: "Lainnya", note: "Kotak hadiah 3D dengan pita emas.", Icon: ItemOthers },
] as const;

/** Grid pratinjau seluruh ikon Kategori 2. */
export const ItemCategoryIconGrid = ({ size = 96 }: { size?: number }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: 20,
      background: balikinTokens.bg,
      padding: 24,
      borderRadius: 24,
    }}
  >
    {itemCategoryIcons.map(({ id, label, Icon }) => (
      <figure
        key={id}
        style={{
          margin: 0,
          display: "grid",
          justifyItems: "center",
          gap: 10,
          padding: 20,
          background: "#FFFFFF",
          border: `1px solid ${balikinTokens.border}`,
          borderRadius: 22,
        }}
      >
        <Icon size={size} />
        <figcaption style={{ color: balikinTokens.body, fontSize: 13 }}>
          {label}
          <span style={{ color: balikinTokens.muted }}> · {id}</span>
        </figcaption>
      </figure>
    ))}
  </div>
);

export default ItemCategoryIconGrid;
