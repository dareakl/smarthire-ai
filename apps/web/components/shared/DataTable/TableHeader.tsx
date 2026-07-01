interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
}

interface Props {
  columns: Column[];
}

export default function TableHeader({ columns }: Props) {
  return (
    <thead className="border-b border-slate-800 bg-slate-950">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className={`px-6 py-4 text-sm font-medium text-slate-400 ${
              column.align === "center"
                ? "text-center"
                : column.align === "right"
                  ? "text-right"
                  : "text-left"
            }`}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
