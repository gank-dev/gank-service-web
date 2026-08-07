import { MOCKUP_ESTIMATE } from "@/constants/mockup";

export function MockupEstimate() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/60">
        Estimasi
      </span>

      <div className="text-right">
        <p className="font-semibold text-white">
          {MOCKUP_ESTIMATE.day}
        </p>

        <p className="text-sm text-white/60">
          {MOCKUP_ESTIMATE.time}
        </p>
      </div>
    </div>
  );
}