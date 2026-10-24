import { RevisionMark } from "@/components/drawing/RevisionMark";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { painPoints } from "@/data/home/pain-points";

const columnLabels = {
  today: "Rev A · Today",
  next: "Rev B · With KanchanFlow",
};

/**
 * Problem/solution, set out as a drawing's revision table. On small screens
 * each row stacks, and data-label supplies the column name.
 */
export function RevisionTable() {
  return (
    <Section aria-labelledby="revision-heading">
      <SectionHeading
        id="revision-heading"
        title="Your sales process, revision B."
        description="Most plants we meet quote from Excel, chase approvals on personal phones and re-type won orders into production. Here is what changes."
      />

      <table className="mt-12 w-full border-collapse text-left max-md:block">
        <caption className="sr-only">
          How quoting, approvals, order handover and order status change with
          KanchanFlow
        </caption>
        <thead className="border-b-2 border-line-strong max-md:hidden">
          <tr>
            <th scope="col" className="w-48 py-3 pr-6 font-mono text-label text-ink-muted uppercase">
              Change
            </th>
            <th scope="col" className="py-3 pr-6">
              <span className="flex items-center gap-2 font-mono text-label text-ink-muted uppercase">
                <RevisionMark letter="A" />
                {columnLabels.today}
              </span>
            </th>
            <th scope="col" className="py-3">
              <span className="flex items-center gap-2 font-mono text-label uppercase">
                <RevisionMark letter="B" current />
                {columnLabels.next}
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="max-md:block">
          {painPoints.map((point) => (
            <tr
              key={point.area}
              className="border-b border-line-strong max-md:grid max-md:gap-3 max-md:py-6"
            >
              <th
                scope="row"
                className="py-6 pr-6 align-top font-display text-h3 max-md:p-0"
              >
                {point.area}
              </th>
              <td
                data-label={columnLabels.today}
                className="py-6 pr-6 align-top text-ink-muted max-md:p-0 max-md:before:block max-md:before:font-mono max-md:before:text-label max-md:before:uppercase max-md:before:content-[attr(data-label)]"
              >
                {point.problem}
              </td>
              <td
                data-label={columnLabels.next}
                className="py-6 align-top font-medium max-md:border-l-4 max-md:border-gold-500 max-md:p-0 max-md:pl-3 max-md:before:block max-md:before:font-mono max-md:before:text-label max-md:before:font-normal max-md:before:uppercase max-md:before:content-[attr(data-label)]"
              >
                {point.solution}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
