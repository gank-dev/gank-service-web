import { MOCKUP_TECHNICIAN } from "@/constants/mockup";

export function MockupTechnician() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/60">
        Teknisi
      </span>

      <span className="font-semibold text-white">
        {MOCKUP_TECHNICIAN.name}
      </span>
    </div>
  );
}