import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroFeatures } from "./HeroFeatures";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
        Servis HP
        <br />
        Cepat.
        <span className="text-brand-accent"> Jujur.</span>
        <br />
        Transparan.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
        GANK SERVICE membantu memperbaiki smartphone dengan proses yang jelas,
        estimasi yang transparan, dan teknisi berpengalaman.
      </p>

      <HeroActions />

      <HeroFeatures />
    </div>
  );
}