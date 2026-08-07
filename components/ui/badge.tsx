import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <div
      className={cn("inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}