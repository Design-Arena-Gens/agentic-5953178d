import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-card flex flex-col gap-4 p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-400/60">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-2xl text-brand-300">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm text-slate-300/80">{description}</p>
      </div>
    </div>
  );
}
