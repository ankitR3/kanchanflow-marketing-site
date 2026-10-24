import { ArrowRight } from "lucide-react";
import { DimensionLine } from "@/components/drawing/DimensionLine";
import { TitleBlock } from "@/components/drawing/TitleBlock";
import { JobCard } from "@/components/mockups/JobCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/data/navigation";
import { heroProcessSteps, heroTitleBlock } from "@/data/home/title-block";

export function Hero() {
  return (
    // overflow-x-clip trims the rotated job card's corners on very narrow screens.
    <section className="bg-graph overflow-x-clip border-b border-line-strong">
      <Container className="pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="font-mono text-label text-ink-muted uppercase">
              The CRM for manufacturers who quote from drawings
            </p>
            <h1 className="mt-5 text-display">
              Run your sales the way you run your{" "}
              <span className="marker">shop floor.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lead text-ink-muted">
              Cost an RFQ in minutes, get it approved on WhatsApp, and hand the
              plant a work order without re-typing a single number. KanchanFlow
              keeps the whole job on one record.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg">
                Start 14-day free trial
              </Button>
              <Button href="/features" variant="outline" size="lg">
                See the product
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              No credit card. Your Excel price lists imported for you.
            </p>
          </div>

          <div className="lg:col-span-5">
            <JobCard />
          </div>
        </div>

        <DimensionLine
          measure="One record, enquiry to dispatch"
          steps={heroProcessSteps}
          className="mt-16 md:mt-20"
        />
        <TitleBlock cells={heroTitleBlock} className="mt-10" />
      </Container>
    </section>
  );
}
