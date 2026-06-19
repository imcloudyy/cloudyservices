export interface TermSection {
  id: string;
  emoji: string;
  title: string;
  content: string;
}

export const termsSections: TermSection[] = [
  {
    id: "scope",
    emoji: "📋",
    title: "scope of service",
    content:
      "i act solely as a neutral third party to facilitate the secure transfer of assets between a buyer and a seller. my responsibility is limited to verifying the asset's legitimacy at the time of the transaction. i am not a party to the underlying deal between the buyer and seller.",
  },
  {
    id: "identity",
    emoji: "🆔",
    title: "impersonation and identity",
    content:
      "there are many scammers attempting to clone my identity. you are responsible for verifying my discord user id (756729470148149308) via developer mode before providing any assets or payment. i will never initiate a dm to offer my services. if you are scammed by an imposter, i am not liable.",
  },
  {
    id: "liability",
    emoji: "🛡️",
    title: "liability and recovery",
    content:
      "my role concludes once the transaction is finalized and the asset is handed over. i am not responsible for any post-transaction issues, including account recoveries, pullbacks, locks, or bans. by using my services, you acknowledge that all deals are final and at your own risk.",
  },
  {
    id: "fees",
    emoji: "💸",
    title: "fees and payments",
    content:
      "my fees are fixed and non-negotiable. they are due upfront unless agreed upon otherwise. if a transaction is aborted before verification begins, fees are refundable. if the verification process has already started, the fee is non-refundable due to the time and effort invested.",
  },
  {
    id: "prohibited",
    emoji: "🚫",
    title: "prohibited conduct",
    content:
      "i reserve the right to immediately terminate a transaction and block any user who attempts to trade stolen goods, uses fraudulent payment methods, or displays toxic behavior. i do not facilitate deals involving illegal activity of any kind.",
  },
  {
    id: "agreement",
    emoji: "✅",
    title: "agreement",
    content:
      "by initiating a request for my services, you confirm that you have read, understood, and agreed to these terms in full.",
  },
];
