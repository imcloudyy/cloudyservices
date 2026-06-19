import { type ReactNode } from "react";

interface CryptoIconProps {
  id: string;
  className?: string;
}

export function CryptoIcon({ id, className = "h-6 w-6" }: CryptoIconProps) {
  const icons: Record<string, ReactNode> = {
    btc: (
      <svg viewBox="0 0 32 32" className={className} fill="none">
        <circle cx="16" cy="16" r="16" fill="#F7931A" />
        <path
          d="M18.7 14.2c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.6-.4-.7 2.6c-.4-.1-.9-.2-1.3-.3l.7-2.7-1.6-.4-.7 2.7c-.3-.1-.7-.2-1-.2l-2.2-.6-.4 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.2c0 0 .1 0 .2.1h-.2l-1.1 4.5c-.1.2-.3.5-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.9 2.1.5c.4.1.8.2 1.2.3l-.7 2.8 1.6.4.7-2.8c.4.1.9.2 1.3.3l-.7 2.7 1.6.4.7-2.7c2.9.5 5.1.3 6-2.3.7-2.1 0-3.3-1.5-4.1 1.1-.3 1.9-1 2.1-2.6zm-3.8 5.3c-.5 2.1-4.1 1-5.3.7l.9-3.8c1.2.3 5.1.9 4.4 3.1zm.5-5.4c-.5 1.9-3.5.9-4.5.7l.9-3.5c1 .2 4.2.7 3.6 2.8z"
          fill="#fff"
        />
      </svg>
    ),
    ltc: (
      <svg viewBox="0 0 32 32" className={className} fill="none">
        <circle cx="16" cy="16" r="16" fill="#345D9D" />
        <path
          d="M10.5 9h12.8l-1.2 4.6h-3.1l-1.5 5.8h3.1l-.9 3.4H8.8l2.7-13.8z"
          fill="#fff"
        />
      </svg>
    ),
    eth: (
      <svg viewBox="0 0 32 32" className={className} fill="none">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <path d="M16 6l-.2.3v8.8l.2.2 4-2.3L16 6z" fill="#fff" fillOpacity=".6" />
        <path d="M16 6L12 13l4 2.3V6z" fill="#fff" />
        <path d="M16 17.8l-.2.2v6.7l.2.7 4-5.6-4-2z" fill="#fff" fillOpacity=".6" />
        <path d="M16 25.3v-7.3l-4-2.3 4 9.6z" fill="#fff" />
        <path d="M16 15.5l4-2.3-4-1.7-4 1.7 4 2.3z" fill="#fff" fillOpacity=".2" />
      </svg>
    ),
    sol: (
      <svg viewBox="0 0 32 32" className={className} fill="none">
        <circle cx="16" cy="16" r="16" fill="#000" />
        <defs>
          <linearGradient id="solGrad" x1="8" y1="24" x2="24" y2="8">
            <stop stopColor="#00FFA3" />
            <stop offset="1" stopColor="#DC1FFF" />
          </linearGradient>
        </defs>
        <path
          d="M10 20.5h12l-1.5 1.5H8.5l1.5-1.5zm1.5-5.5h12l-1.5 1.5H10l1.5-1.5zm-1.5-5.5h12L21 11.5H9l1.5-1.5z"
          fill="url(#solGrad)"
        />
      </svg>
    ),
    xmr: (
      <svg viewBox="0 0 32 32" className={className} fill="none">
        <circle cx="16" cy="16" r="16" fill="#FF6600" />
        <path
          d="M16 8c-3.5 0-6.5 2.2-7.7 5.3h2.4c1-1.8 2.9-3 5.3-3 3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8c-2.4 0-4.3-1.2-5.3-3H8.3C9.5 21.8 12.5 24 16 24c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
          fill="#fff"
        />
      </svg>
    ),
    usdt: (
      <svg viewBox="0 0 32 32" className={className} fill="none">
        <circle cx="16" cy="16" r="16" fill="#26A17B" />
        <path
          d="M17.8 17.5v-.1c-.1 0-1.1-.1-2.8-.1-1.5 0-3.2 0-3.8.1v.1c-3 .1-5.2.7-5.2 1.3s2.3 1.2 5.2 1.3v-2.1c.6 0 2.3.1 3.8.1 1.7 0 2.7-.1 2.8-.1v2.1c3-.1 5.2-.7 5.2-1.3s-2.2-1.2-5.2-1.3zm0-3.1V12h4.1V9.2H10.1V12h4.1v2.4c-3.4.2-6 1-6 2s2.6 1.8 6 2v7.6h3.7v-7.6c3.4-.2 6-1 6-2s-2.6-1.8-6-2z"
          fill="#fff"
        />
      </svg>
    ),
  };

  return <>{icons[id] ?? null}</>;
}
