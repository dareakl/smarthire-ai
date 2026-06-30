import Button from "./Button";

interface Props {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, action }: Props) {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>

        <p className="mt-2 text-slate-400">{subtitle}</p>
      </div>

      {action}
    </section>
  );
}
