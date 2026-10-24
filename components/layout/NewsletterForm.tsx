"use client";

import { CircleCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { validateEmail } from "@/lib/validation";

type FormStatus = "idle" | "submitting" | "success";

// No backend for this site: simulate the network round trip.
const fakeRequestDelayMs = 700;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validateEmail(email);
    setError(validationError);
    if (validationError) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), fakeRequestDelayMs);
  };

  if (status === "success") {
    return (
      <p
        role="status"
        className="flex items-start gap-2 rounded-sm border border-gold-500/40 bg-gold-500/10 p-4 text-sm text-steel-50"
      >
        <CircleCheck
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
        />
        You&apos;re on the list. The next Shop Floor Notes issue lands on the
        first Monday of the month.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3">
      <TextInput
        id="newsletter-email"
        type="email"
        name="email"
        autoComplete="email"
        label="Work email"
        placeholder="name@company.com"
        tone="dark"
        value={email}
        error={error}
        disabled={status === "submitting"}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button
        type="submit"
        variant="accent"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
