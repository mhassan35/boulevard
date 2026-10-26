import type { HTMLAttributes } from 'react';

type DivProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = '', ...props }: DivProps) {
  return (
    <div
      data-slot="card"
      className={`rounded-2xl border border-card-border bg-card text-card-foreground shadow-[0_16px_44px_rgba(0,0,0,0.24),inset_0_1px_rgba(255,255,255,0.025)] hover:border-[rgba(196,164,106,0.56)] hover:shadow-[0_22px_48px_rgba(0,0,0,0.38),0_0_26px_rgba(196,164,106,0.075),inset_0_1px_rgba(255,255,255,0.07)] [&_strong]:text-card-foreground [&_p]:text-card-muted ${className}`.trim()}
      {...props}
    />
  );
}

export function CardHeader({ className = '', ...props }: DivProps) {
  return <div data-slot="card-header" className={`flex flex-col ${className}`.trim()} {...props} />;
}

export function CardTitle({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 data-slot="card-title" className={className} {...props} />;
}

export function CardDescription({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p data-slot="card-description" className={`text-sm text-card-muted ${className}`.trim()} {...props} />;
}

export function CardContent({ className = '', ...props }: DivProps) {
  return <div data-slot="card-content" className={className} {...props} />;
}

export function CardFooter({ className = '', ...props }: DivProps) {
  return <div data-slot="card-footer" className={`flex items-center ${className}`.trim()} {...props} />;
}
