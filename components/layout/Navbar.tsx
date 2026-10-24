import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/data/navigation";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    // Solid background on purpose: backdrop-filter would make the header the
    // containing block for the fixed mobile menu panel and clip it.
    <header className="sticky top-0 z-50 border-b border-line-strong bg-surface text-ink">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
