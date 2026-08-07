export const MOCKUP_DEVICE ={
    brand: "Samsung",
    model: "Galaxy a54",
    repair: "LCD Replacement",
} as const;

export const MOCKUP_TECHNICIAN = {
    name: "Mas Nanda",
} as const;

export const MOCKUP_ESTIMATE = {
    day: "Hari ini",
    time: "17:00 WIB",
} as const;

export const SERVICE_STEPS = [
    {
        label: "HP Diterima",
        completed: true,
        current: false,
    },
    {
        label: "Diagnosa",
        completed: true,
        current: false,
    },
    {
        label: "Menunggu Persetujuan",
        completed: true,
        current: false,
    },
    {
        label: "Sedeng Diperbaiki",
        completed: false,
        current: true,
    },
    {
        label: "Quality Control",
        completed: false,
        current: false,
    },
    {
        label: "Siap Diambil",
        completed: false,
        current: false,
    },
] as const;