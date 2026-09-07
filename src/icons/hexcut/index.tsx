export * from "./base";
export * from "./Nav";
export * from "./Items";
export * from "./Status";
export * from "./Actions";

import {
  NavHome, NavSearch, NavAddPost, NavHistory, NavProfile, NavExplore,
} from "./Nav";
import {
  ItemBagWallet, ItemBag, ItemWallet, ItemKeys, ItemElectronics,
  ItemDocuments, ItemIdCard, ItemPets, ItemJewelry, ItemOthers,
} from "./Items";
import {
  StatusLost, StatusFound, StatusReturned, RewardBadge, VerifiedBadge, VerifiedMini,
} from "./Status";
import {
  ActionFilter, ActionNotification, ActionChat, ActionLocation, ActionShare,
  ActionCamera, ActionBookmark, ActionBack, ActionTip, ActionReputation, ActionSparkle,
} from "./Actions";

/** Daftar lengkap pustaka, dipakai halaman pratinjau dan dokumentasi. */
export const balikinIcons = [
  { group: "Navigasi Utama", items: [
    { id: "NavHome", label: "Beranda", Icon: NavHome },
    { id: "NavSearch", label: "Cari", Icon: NavSearch },
    { id: "NavAddPost", label: "Buat laporan", Icon: NavAddPost },
    { id: "NavHistory", label: "Riwayat", Icon: NavHistory },
    { id: "NavProfile", label: "Profil", Icon: NavProfile },
    { id: "NavExplore", label: "Jelajah", Icon: NavExplore },
  ]},
  { group: "Kategori Barang", items: [
    { id: "ItemBagWallet", label: "Tas & Dompet", Icon: ItemBagWallet },
    { id: "ItemBag", label: "Tas", Icon: ItemBag },
    { id: "ItemWallet", label: "Dompet", Icon: ItemWallet },
    { id: "ItemKeys", label: "Kunci", Icon: ItemKeys },
    { id: "ItemElectronics", label: "HP & Elektronik", Icon: ItemElectronics },
    { id: "ItemDocuments", label: "Dokumen", Icon: ItemDocuments },
    { id: "ItemIdCard", label: "Kartu identitas", Icon: ItemIdCard },
    { id: "ItemPets", label: "Hewan", Icon: ItemPets },
    { id: "ItemJewelry", label: "Perhiasan", Icon: ItemJewelry },
    { id: "ItemOthers", label: "Lainnya", Icon: ItemOthers },
  ]},
  { group: "Status & Indikator", items: [
    { id: "StatusLost", label: "Hilang", Icon: StatusLost },
    { id: "StatusFound", label: "Ditemukan", Icon: StatusFound },
    { id: "StatusReturned", label: "Sudah kembali", Icon: StatusReturned },
    { id: "RewardBadge", label: "Apresiasi", Icon: RewardBadge },
    { id: "VerifiedBadge", label: "Terverifikasi", Icon: VerifiedBadge },
    { id: "VerifiedMini", label: "Terverifikasi (padat)", Icon: VerifiedMini },
  ]},
  { group: "Tindakan & Utilitas", items: [
    { id: "ActionFilter", label: "Filter", Icon: ActionFilter },
    { id: "ActionNotification", label: "Notifikasi", Icon: ActionNotification },
    { id: "ActionChat", label: "Percakapan", Icon: ActionChat },
    { id: "ActionLocation", label: "Lokasi", Icon: ActionLocation },
    { id: "ActionShare", label: "Bagikan", Icon: ActionShare },
    { id: "ActionCamera", label: "Kamera", Icon: ActionCamera },
    { id: "ActionBookmark", label: "Simpan", Icon: ActionBookmark },
    { id: "ActionBack", label: "Kembali", Icon: ActionBack },
    { id: "ActionTip", label: "Tip", Icon: ActionTip },
    { id: "ActionReputation", label: "Reputasi", Icon: ActionReputation },
    { id: "ActionSparkle", label: "Sorotan", Icon: ActionSparkle },
  ]},
] as const;
