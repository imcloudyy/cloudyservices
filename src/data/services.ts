export type ServiceCategory = "accounts" | "virtual-items" | "crypto";

export interface Service {
  id: ServiceCategory;
  title: string;
  description: string;
  fee: string;
  feeNote: string;
  examples: string[];
}

export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
}

export const services: Service[] = [
  {
    id: "accounts",
    title: "accounts",
    description:
      "social, gaming, and premium account transfers with full ownership verification before release.",
    fee: "8%",
    feeNote: "minimum $12 per deal",
    examples: ["discord", "steam", "spotify", "minecraft"],
  },
  {
    id: "virtual-items",
    title: "virtual items",
    description:
      "in-game skins, digital goods, and marketplace assets held in escrow until both sides confirm.",
    fee: "6%",
    feeNote: "minimum $8 per deal",
    examples: ["cs2 skins", "roblox items", "fortnite vbucks trades"],
  },
  {
    id: "crypto",
    title: "crypto",
    description:
      "peer-to-peer crypto swaps and high-value digital asset deals with on-chain confirmation.",
    fee: "4%",
    feeNote: "minimum $15 per deal",
    examples: ["btc", "ltc", "eth", "sol"],
  },
];

export const acceptedCryptos: CryptoAsset[] = [
  { id: "btc", name: "bitcoin", symbol: "BTC" },
  { id: "ltc", name: "litecoin", symbol: "LTC" },
  { id: "eth", name: "ethereum", symbol: "ETH" },
  { id: "sol", name: "solana", symbol: "SOL" },
  { id: "xmr", name: "monero", symbol: "XMR" },
  { id: "usdt", name: "tether", symbol: "USDT" },
];
