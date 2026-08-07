import { ShieldCheck } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
      <ShieldCheck className="h-4 w-4 text-brand-accent" />

      <span className="text-sm text-white/80">
        Servis HP Profesional • Garansi • Transparan
      </span>
    </div>
  );
}