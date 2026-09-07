import * as React from "react";
import { Hexcut, S, A, hexFlat, cut, IconProps, tokens } from "./base";

/* Kelompok 5 — Keuangan, Tip & Bagikan.
   Logo layanan pihak ketiga (WhatsApp, Instagram, Telegram, bank) sengaja
   TIDAK digambar ulang di sini: merek dagang harus memakai aset resminya
   supaya sah dan langsung dikenali. Pakai ikon di bawah untuk metodenya,
   dan logo resmi untuk kanalnya. */

export const PayQr = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="QRIS" {...p}>
    <S d={cut(11, 11, 32, 32, 6)} w={6.5} />
    <S d={cut(57, 11, 32, 32, 6)} w={6.5} />
    <S d={cut(11, 57, 32, 32, 6)} w={6.5} />
    <A d={hexFlat(63, 63, 8)} fill={accent} />
    <A d={hexFlat(83, 63, 6)} fill={accent} />
    <A d={hexFlat(63, 83, 6)} fill={accent} />
    <S d={hexFlat(83, 83, 8)} w={5.5} />
  </Hexcut>
);

export const PayBank = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Bank" {...p}>
    <S d="M10 36 50 14 90 36" />
    <S d="M26 48v22M42 48v22M58 48v22M74 48v22" w={6.5} />
    <A d="M10 78h80v8H10z" fill={accent} />
  </Hexcut>
);

export const PayEwallet = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="E-wallet" {...p}>
    <S d="M30 10h40l9 14v52l-9 14H30l-9-14V24l9-14Z" />
    <S d="M42 22h16" w={5.5} />
    <A d={hexFlat(50, 54, 15)} fill={accent} />
  </Hexcut>
);

export const PayCard = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Kartu" {...p}>
    <S d={cut(9, 24, 82, 52, 9)} />
    <S d="M12 42h76" w={6.5} />
    <A d={hexFlat(30, 60, 8)} fill={accent} />
  </Hexcut>
);

export const ActionCopyLink = ({ accent = tokens.gold, ...p }: IconProps) => (
  <Hexcut title="Salin tautan" {...p}>
    <S d={cut(34, 10, 56, 56, 8)} w={6.5} o={0.35} />
    <S d={cut(10, 34, 56, 56, 8)} />
    <A d={hexFlat(38, 62, 9)} fill={accent} />
  </Hexcut>
);
