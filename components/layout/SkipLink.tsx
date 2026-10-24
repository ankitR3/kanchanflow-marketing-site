/** Lets keyboard users jump past the navbar; visible only when focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-sm bg-gold-500 px-4 py-2 font-semibold text-graphite-950 transition-transform focus-visible:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
