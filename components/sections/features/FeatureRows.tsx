import { Container } from "@/components/ui/Container";
import { productModules } from "@/data/modules";
import { FeatureRow } from "./FeatureRow";
import { moduleMockups } from "./moduleMockups";

export function FeatureRows() {
  return (
    <div className="py-section">
      <Container>
        {productModules.map((module, index) => (
          <FeatureRow
            key={module.id}
            module={module}
            index={index}
            mockup={moduleMockups[module.id]}
          />
        ))}
      </Container>
    </div>
  );
}
