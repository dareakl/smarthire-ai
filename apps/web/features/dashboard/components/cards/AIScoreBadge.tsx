interface Props {
  score: number;
}

export default function AIScoreBadge({ score }: Props) {
  const getColor = () => {
    if (score >= 90) return "bg-emerald-500/20 text-emerald-400";

    if (score >= 75) return "bg-sky-500/20 text-sky-400";

    if (score >= 60) return "bg-amber-500/20 text-amber-400";

    return "bg-rose-500/20 text-rose-400";
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${getColor()}`}
    >
      AI Score {score}
    </span>
  );
}
