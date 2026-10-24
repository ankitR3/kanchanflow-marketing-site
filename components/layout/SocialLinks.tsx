import { socialLinks } from "@/data/social-links";

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-1">
      {socialLinks.map((social) => (
        <li key={social.href}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-steel-50/70 transition-colors hover:bg-white/10 hover:text-gold-400 active:bg-white/15"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d={social.iconPath} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
