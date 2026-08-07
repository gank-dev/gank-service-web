function StepIcon({
  completed,
  current,
}: {
  completed: boolean;
  current: boolean;
}) {
  if (completed) {
    return (
      <span className="text-white">
        ✓
      </span>
    );
  }

  if (current) {
    return (
      <span className="text-white">
        ●
      </span>
    );
  }

  return (
    <span className="text-white/30">
      ○
    </span>
  );
}
import { SERVICE_STEPS } from "@/constants/mockup";

export function MockupStepper() {
  return (
    <div className="space-y-4">
      {SERVICE_STEPS.map((step) => (
        <div
          key={step.label}
          className="flex items-center gap-4"
        >
          <StepIcon
            completed={step.completed}
            current={step.current}
          />

          <span
            className={
              step.completed || step.current
                ? "text-white"
                : "text-white/40"
            }
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}