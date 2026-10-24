import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-inverse text-steel-50">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <Logo tone="inverse" />
          <p className="max-w-sm text-sm leading-relaxed text-steel-50/75">
            KanchanFlow is the CRM for manufacturers who quote from drawings.
            Quotes, BOMs, work orders and the sales pipeline in one system,
            built in Pune for Indian shop floors.
          </p>
          <div className="max-w-sm">
            <h2 className="mb-1 text-sm font-bold">Shop Floor Notes</h2>
            <p className="mb-4 text-sm text-steel-50/75">
              One email a month on quoting, costing and selling for
              manufacturers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6"
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-4 font-mono text-label font-medium uppercase text-gold-400">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-steel-50/75 underline-offset-4 transition-colors hover:text-steel-50 hover:underline active:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col-reverse items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-sm text-steel-50/70">
            © {year} {siteConfig.name} Technologies Pvt. Ltd. All rights
            reserved.
          </p>
          <SocialLinks />
        </Container>
      </div>
    </footer>
  );
}
