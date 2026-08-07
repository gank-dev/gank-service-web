import Image from "next/image";
import Link from "next/link";

import { BRAND } from "@/constants/brand";

export function NavbarLogo() {
    return (
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={BRAND.name}
        >
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            width={40}
            height={40}
            className="h-10 w-10 transition-transform duration-200 group-hover:scale-[1.03]"
           />

           <span className="text-lg font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-[#4F7CFF]">
            {BRAND.name}
           </span>
        </Link>
    );
}