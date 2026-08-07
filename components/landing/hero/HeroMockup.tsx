import { Divider } from "@/components/ui/divider";

import {
  MockupCard,
  MockupDevice,
  MockupEstimate,
  MockupHeader,
  MockupStepper,
  MockupTechnician,
} from "./mockup";

export function HeroMockup() {
  return (
    <MockupCard>
      <div className="space-y-8">
        <MockupHeader />

        <Divider />

        <MockupDevice />

        <Divider />

        <MockupStepper />

        <Divider />

        <MockupEstimate />

        <Divider />

        <MockupTechnician />
      </div>
    </MockupCard>
  );
}