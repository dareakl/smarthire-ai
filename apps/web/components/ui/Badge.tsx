import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "default";
}

const variants = {
  success: "bg-emerald-500/20 text-emerald-400",
  warning: "bg-amber-500/20 text-amber-400",
  danger: "bg-rose-500/20 text-rose-400",
  default: "bg-slate-800 text-slate-300",
};

export default function Badge({ children, variant = "default" }: Props) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
