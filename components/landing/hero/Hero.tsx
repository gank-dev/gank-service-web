import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { HeroContent } from "./HeroContent";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
    return (
        <Section className="min-h-screen items-center pt-20">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent />                    
                    <HeroMockup />
                </div>
            </Container>
        </Section>
    );
}