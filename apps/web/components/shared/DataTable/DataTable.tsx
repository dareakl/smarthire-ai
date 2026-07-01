import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DataTable({ children }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">{children}</table>
    </div>
  );
}
