import type { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = '', ...props }: LabelProps) {
  return (
    <label
      className={`grid gap-[9px] text-[9px] uppercase tracking-[0.1em] text-[#f5f2eb]/65 ${className}`.trim()}
      {...props}
    />
  );
}