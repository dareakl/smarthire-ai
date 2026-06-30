import { ReactNode } from "react";
import Card from "./Card";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function SectionCard({
  title,
  subtitle,
  action,
  children,
}: SectionCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
          )}
        </div>

        {action}
      </div>

      <div className="p-6">{children}</div>
    </Card>
  );
}
