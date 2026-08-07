import Link from "next/link";

import { NAVIGATION } from "@/constants/navigation";

export function NavbarMenu() {
    return (
        <ul className="flex items-center gap-10">
            {NAVIGATION.map((item) => (
                <li key={item.href}>
                    <Link
                    href={item.href}
                    className="
                     rounded-lg
                     px-4
                     py-2
                     text-sm
                     font-medium
                     transition-all
                     duration-200
                     hover:text-white
                     hover:bg-white/5
                    "
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}