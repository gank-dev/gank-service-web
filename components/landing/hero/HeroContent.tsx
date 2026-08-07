import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroFeatures } from "./HeroFeatures";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 text-6xl font-extrabold leading-none tracking-tight">
        <>
        Servis HP
        <br />
        dengan Proses
        <br />
        yang Transparan.
        </>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
        Setiap proses perbaikan dilakukan secara transparan,
        Tidak ada penggantian komponen tanpa persetujuan pemilik HP.
        Mulai dari diagnosa hingga selesai, anda selalu mengetahui proses servis.
      </p>

      <HeroActions />

      <HeroFeatures />
    </div>
  );
}