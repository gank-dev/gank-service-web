import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {subtitle && (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
}