interface Props {
  children: React.ReactNode;
}

export default function CardContent({ children }: Props) {
  return <div className="p-6">{children}</div>;
}
