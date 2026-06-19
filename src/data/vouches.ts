export type VouchCategory = "accounts" | "crypto";

export interface Vouch {
  id: string;
  category: VouchCategory;
  client: string;
  deal: string;
  amount: string;
  note: string;
  date: string;
}

export const vouches: Vouch[] = [
  {
    id: "v1",
    category: "accounts",
    client: "k***n",
    deal: "discord aged account",
    amount: "$180",
    note: "smooth deal, verified within 20 mins. would use again.",
    date: "jun 2026",
  },
  {
    id: "v2",
    category: "crypto",
    client: "m***x",
    deal: "ltc → eth swap",
    amount: "$2,400",
    note: "held funds until both wallets confirmed. no issues.",
    date: "may 2026",
  },
  {
    id: "v3",
    category: "accounts",
    client: "r***a",
    deal: "minecraft full access",
    amount: "$95",
    note: "quick middleman, explained every step clearly.",
    date: "may 2026",
  },
  {
    id: "v4",
    category: "crypto",
    client: "j***s",
    deal: "sol escrow",
    amount: "$890",
    note: "patient with tx confirmations. legit.",
    date: "apr 2026",
  },
  {
    id: "v5",
    category: "accounts",
    client: "t***e",
    deal: "steam account transfer",
    amount: "$320",
    note: "checked ownership before payout. solid.",
    date: "apr 2026",
  },
  {
    id: "v6",
    category: "crypto",
    client: "d***l",
    deal: "btc high-value deal",
    amount: "$5,100",
    note: "handled a large deal professionally. vouched.",
    date: "mar 2026",
  },
];
