type StepCardProps = {
  step: number;
  title: string;
  detail: string;
};

export function StepCard({ step, title, detail }: StepCardProps) {
  return (
    <div className="glass-card flex flex-col gap-3 p-6">
      <div className="flex items-center gap-3 text-brand-200">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-sm font-semibold">
          {step.toString().padStart(2, "0")}
        </div>
        <span className="text-sm uppercase tracking-wide text-slate-400">
          Flow
        </span>
      </div>
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="text-sm text-slate-300/80">{detail}</p>
    </div>
  );
}
