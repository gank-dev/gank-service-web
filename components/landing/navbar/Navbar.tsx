import { NavbarActions } from "./NavbarActions";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-20">
            <nav
             className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-8"
             aria-label="Main Navigation"
            >
             <NavbarLogo />

             <div className="hidden lg:block">
                <NavbarMenu />
             </div>

             <div className="hidden lg:block">
                <NavbarActions />
             </div>

             <div className="lg:hidden">
                <MobileMenu />
             </div>
            </nav>
        </header>
    );
}