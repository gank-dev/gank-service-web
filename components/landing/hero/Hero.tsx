import { HeroContent } from "./HeroContent";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
    return (
        <section className="mx-auto flex-min-h-screen w-full max-w-[1440px] items-center px-8 pt-20">
            <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <HeroContent />
                
                <HeroMockup />
            </div>
        </section>
    );
}