import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'light' | 'glass' | 'navy' | 'dark' | 'outline' | 'nav';
type ButtonSize = 'default' | 'large' | 'nav';

type ButtonVariantProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const base = 'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full transition duration-200 ease-[ease] focus-visible:outline-2 focus-visible:outline-[#c4a46a] focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50';
const sizes: Record<ButtonSize, string> = {
  default: 'min-h-12 gap-[13px] px-5 text-xs font-bold',
  large: 'min-h-[52px] gap-[11px] px-[22px] text-[13px] font-bold',
  nav: 'min-h-[46px] gap-[11px] px-[19px] text-[13px] font-semibold tracking-[0.005em]',
};
const variants: Record<ButtonVariant, string> = {
  light: 'border border-transparent bg-button-light text-button-light-foreground hover:bg-button-light-hover hover:-translate-y-0.5',
  glass: 'border border-button-glass-border bg-button-glass text-button-glass-foreground hover:border-button-glass-hover hover:text-button-glass-hover hover:-translate-y-0.5',
  navy: 'border border-transparent bg-button-navy text-button-navy-foreground hover:bg-button-navy-hover hover:-translate-y-0.5',
  dark: 'border border-button-dark bg-button-dark text-button-dark-foreground hover:border-button-dark-hover hover:bg-button-dark-hover hover:text-button-light-foreground hover:-translate-y-0.5',
  outline: 'border border-button-outline-border bg-transparent text-button-outline-foreground hover:border-button-outline-hover-border hover:bg-button-outline-hover',
  nav: 'border border-button-nav-border bg-transparent text-current hover:border-button-nav-hover-border hover:bg-button-nav-hover hover:text-button-nav-hover-foreground',
};

export function buttonVariants({
  variant = 'light',
  size = 'default',
  className = '',
}: ButtonVariantProps = {}) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();
}

export function Button({
  className,
  variant = 'light',
  size = 'default',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
