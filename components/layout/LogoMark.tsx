type LogoMarkProps = {
  className?: string;
};

/** A gold ingot with a flow line cut through it. Decorative: the wordmark carries the name. */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 6h18l5 20H2L7 6Z" fill="#e5a218" />
      <path
        d="M6 19.5c4-3.5 8-3.5 10 0s6 3.5 10 0"
        fill="none"
        stroke="#111316"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
