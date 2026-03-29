interface PhilosophyCardProps {
  title: string;
  description: string;
}

export function PhilosophyCard({ title, description }: PhilosophyCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Decorative node */}
      <div className="relative w-4 h-4">
        <div className="absolute inset-0 rounded-full bg-[#3B6FE8] opacity-20 blur-sm" />
        <div className="absolute inset-0 rounded-full bg-[#3B6FE8]" />
        <div className="absolute inset-[6px] rounded-full bg-white dark:bg-[#0f0f18]" />
      </div>

      <h3 className="text-xl font-bold text-white dark:text-white">{title}</h3>
      <p className="text-[#7A8AB0] leading-relaxed">{description}</p>
    </div>
  );
}
