type MockupCardProps = {
  children: React.ReactNode;
};

export function MockupCard({
  children,
}: MockupCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        shadow-sm
        backdrop-blur-xl
      "
    >
      {children}
    </div>
  );
}