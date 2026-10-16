import type { ReactNode } from 'react'

export default function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline w-auto">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 125 30"
        width="125"
        height="30"
        fill="none"
        className="pointer-events-none absolute -bottom-[25px] -right-[30px] overflow-visible text-accent max-[575.98px]:-bottom-[30px] max-[575.98px]:left-1/2 max-[575.98px]:right-auto max-[575.98px]:-ml-[60px]"
      >
        <path
          d="M4 19 C 30 9, 62 24, 121 11"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M14 24 C 45 18, 80 26, 110 18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </span>
  )
}