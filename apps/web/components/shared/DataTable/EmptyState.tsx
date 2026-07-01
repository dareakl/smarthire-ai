interface Props {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <tbody>
      <tr>
        <td colSpan={100} className="py-16 text-center">
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          <p className="mt-2 text-slate-400">{description}</p>
        </td>
      </tr>
    </tbody>
  );
}
