import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Button asChild size="lg">
        <Link href="#services">
          Lihat Layanan
        </Link>
      </Button>

      <Button asChild variant="outline" size="lg">
        <Link href="#contact">
          Konsultasi Gratis
        </Link>
      </Button>
    </div>
  );
}