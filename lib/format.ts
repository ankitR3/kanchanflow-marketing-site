const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Formats a whole-rupee amount with Indian digit grouping, e.g. ₹17,988. */
export function formatRupees(amount: number): string {
  return rupeeFormatter.format(amount);
}
