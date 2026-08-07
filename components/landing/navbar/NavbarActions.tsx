import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NAVBAR_ACTIONS } from "@/constants/navigation";

export function NavbarActions() {
    return (
        <div className="flex items-center gap-3">
            <Button asChild variant="outline">
                <Link href={NAVBAR_ACTIONS.login.href}>
                    {NAVBAR_ACTIONS.login.label}
                </Link>
            </Button>

            <Button asChild>
                <Link href={NAVBAR_ACTIONS.customerPortal.href}>
                    {NAVBAR_ACTIONS.customerPortal.label}
                </Link>
            </Button>
        </div>
    );
}