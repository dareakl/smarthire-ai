import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
