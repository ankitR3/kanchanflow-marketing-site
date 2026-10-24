"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { pricingPlans, type BillingCycle } from "@/data/pricing-plans";
import { BillingToggle } from "./BillingToggle";
import { PlanNotes } from "./PlanNotes";
import { PricingCard } from "./PricingCard";

export function PricingPlans() {
  const [cycle, setCycle] = useState<BillingCycle>("annual");

  return (
    <section id="plans" aria-label="Plans" className="py-section">
      <Container>
        <BillingToggle value={cycle} onChange={setCycle} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-5">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} cycle={cycle} />
          ))}
        </div>
        <PlanNotes />
      </Container>
    </section>
  );
}
