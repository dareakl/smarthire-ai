interface Props {
  title: string;
  subtitle?: string;
}

export default function CardHeader({ title, subtitle }: Props) {
  return (
    <div className="border-b border-slate-800 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
    </div>
  );
}
