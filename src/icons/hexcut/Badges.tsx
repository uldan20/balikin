import * as React from "react";
import { Hexcut, S, A, hexFlat, hexPointy, cut, star4, IconProps, tokens } from "./base";

/* Kelompok 4 — Badge, Gamifikasi & Status */

export const BadgeLock = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Terkunci" {...p}>
    <S d="M33 46V33l9-11h16l9 11v13" w={6.5} />
    <S d={cut(19, 46, 62, 38, 8)} />
    <A d={hexFlat(50, 65, 8)} fill={accent} />
  </Hexcut>
);

export const BadgeShield = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Terlindungi" {...p}>
    <S d="M50 12 82 24v26L50 88 18 50V24L50 12Z" />
    <path d="M36 47 47 60 66 34" stroke={accent} strokeWidth={7} />
  </Hexcut>
);

export const StatusRejected = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Ditolak" {...p}>
    <path d={hexPointy(50, 50, 32)} stroke={accent} strokeWidth={7} />
    <path d="M38 38 62 62M62 38 38 62" stroke={accent} strokeWidth={7.5} />
  </Hexcut>
);

/** Bintang rating: lima sudut, satu-satunya bentuk di pustaka ini yang keluar
 *  dari kisi heksagon — bintang empat terbaca "kilau", bukan "nilai". */
export const BadgeStar = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Rating" {...p}>
    <A
      d="M50 14 58.6 40.3 86.3 40.3 63.9 56.6 72.4 82.9 50 66.6 27.6 82.9 36.1 56.6 13.7 40.3 41.4 40.3Z"
      fill={accent}
    />
  </Hexcut>
);

export const BadgeCrown = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Mahkota" {...p}>
    <S d="M12 76V28l19 16 19-26 19 26 19-16v48H12Z" />
    <A d={hexFlat(50, 60, 8)} fill={accent} />
  </Hexcut>
);

export const BadgeEye = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Mata elang" {...p}>
    <S d="M8 52 46 26 84 52 46 78 8 52Z" />
    <S d={hexFlat(46, 52, 12)} w={6} />
    <A d={star4(84, 22, 12)} fill={accent} />
  </Hexcut>
);

export const BadgeScales = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Adil" {...p}>
    <S d="M50 22v58M16 34h68M32 84h36" />
    <S d="M10 58 22 36 34 58Z" w={6} />
    <S d="M66 58 78 36 90 58Z" w={6} />
    <A d={hexFlat(50, 22, 7)} fill={accent} />
  </Hexcut>
);

export const ActionSettings = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Pengaturan" {...p}>
    <S d="M84 50h10M66 78l5 8.7M34 78l-5 8.7M16 50H6M34 22l-5-8.7M66 22l5-8.7" w={6.5} />
    <S d={hexFlat(50, 50, 32)} />
    <A d={hexFlat(50, 50, 13)} fill={accent} />
  </Hexcut>
);

export const RewardCoin = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Poin" {...p}>
    <S d={hexFlat(50, 50, 34)} />
    <A d={hexFlat(50, 50, 21)} fill={accent} />
    <S d={hexFlat(50, 50, 9)} w={5} />
  </Hexcut>
);

export const StatusAlert = ({ accent = tokens.red, ...p }: IconProps) => (
  <Hexcut title="Perhatian" {...p}>
    <path d={hexPointy(50, 50, 34)} stroke={accent} strokeWidth={7} />
    <path d="M50 28v26" stroke={accent} strokeWidth={7.5} />
    <path d={hexFlat(50, 68, 6)} fill={accent} />
  </Hexcut>
);

export const BadgeTrophy = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Papan peringkat" {...p}>
    <S d="M28 20H14v12l8 10h8" w={6} />
    <S d="M72 20h14v12l-8 10h-8" w={6} />
    <S d="M28 12h44v24l-9 16H37l-9-16V12Z" />
    <S d="M50 52v16M32 84h36" w={6.5} />
    <A d={hexFlat(50, 30, 9)} fill={accent} />
  </Hexcut>
);
