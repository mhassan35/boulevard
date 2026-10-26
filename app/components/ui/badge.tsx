import type { HTMLAttributes } from 'react';

type BadgeVariant = 'project' | 'about';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  project: 'absolute left-4 top-4 z-[1] inline-flex items-center rounded-full border border-white/35 bg-[rgba(16,27,46,0.65)] px-3 py-2 text-[10px] text-white',
  about: 'inline-flex items-center rounded-full border border-[rgba(205,218,240,0.14)] px-3 py-[7px] text-[9px] tracking-[0.12em] text-[#f5f2eb]',
};

export function Badge({
  variant = 'project',
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={`${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
}