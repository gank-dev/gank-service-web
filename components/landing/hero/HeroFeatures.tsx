import {
  Clock3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock3,
    label: "Pengerjaan Cepat",
  },
  {
    icon: ShieldCheck,
    label: "Garansi Servis",
  },
  {
    icon: Wrench,
    label: "Teknisi Berpengalaman",
  },
];

export function HeroFeatures() {
  return (
    <div className="mt-12 flex flex-wrap gap-6">
      {FEATURES.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.label}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Icon className="h-4 w-4 text-brand-accent" />

            <span>{feature.label}</span>
          </div>
        );
      })}
    </div>
  );
}