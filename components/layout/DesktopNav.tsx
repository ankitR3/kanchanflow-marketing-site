import { primaryNav } from "@/data/navigation";
import { NavItem } from "./NavItem";

export function DesktopNav() {
  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {primaryNav.map((link) => (
          <li key={link.href}>
            <NavItem
              link={link}
              className="py-2 text-sm aria-[current=page]:text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-200 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 aria-[current=page]:after:bg-ink"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
