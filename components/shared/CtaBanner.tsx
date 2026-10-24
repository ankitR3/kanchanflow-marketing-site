import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta, salesEmail } from "@/data/navigation";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Send us one drawing. We'll send back a working quote.",
  description = "Start a 14-day trial with your own parts and customers. Our onboarding team imports your Excel price lists for you, free.",
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-banner-title" className="py-section">
      <Container>
        <div className="relative border-2 border-line-strong bg-surface-raised px-6 py-10 sm:px-10 md:py-14">
          {/* A tab label sitting on the border, like a drawing's zone marker. */}
          <p className="absolute -top-3 left-6 bg-surface px-2 font-mono text-label uppercase sm:left-10">
            Next step
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="cta-banner-title" className="text-h2">
                {title}
              </h2>
              <p className="mt-4 text-lead text-ink-muted">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button href={`mailto:${salesEmail}`} variant="outline" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
