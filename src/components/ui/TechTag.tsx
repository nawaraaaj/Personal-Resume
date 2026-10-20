type TechTagProps = {
  children: string;
};

export default function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-flex rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
      {children}
    </span>
  );
}
