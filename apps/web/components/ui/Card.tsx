import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900 shadow-sm transition-all duration-300 hover:border-indigo-500/50",
        className,
      )}
    >
      {children}
    </div>
  );
}
