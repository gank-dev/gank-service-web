export const NAVIGATION = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Layanan",
        href: "#services",
    },
    {
        label: "Testimoni",
        href: "#testimonials",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
    {
        label: "Kontak",
        href: "#contact",
    },
] as const;

export const NAVBAR_ACTIONS = {
    login: {
        label: "Login",
        href: "/login",
    },

    customerPortal: {
        label: "Customer Portal",
        href: "/customer",
    },
} as const;