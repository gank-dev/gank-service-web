import { MOCKUP_DEVICE } from "@/constants/mockup";

export function MockupDevice() {
  return (
    <div className="space-y-1">
      <p className="text-xl font-bold text-white">
        {MOCKUP_DEVICE.brand} {MOCKUP_DEVICE.model}
      </p>

      <p className="text-sm text-white/60">
        {MOCKUP_DEVICE.repair}
      </p>
    </div>
  );
}