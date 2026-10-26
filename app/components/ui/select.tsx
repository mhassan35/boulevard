import type { SelectHTMLAttributes } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = '', ...props }: SelectProps) {
  return (
    <select
      data-slot="select"
      className={`w-full rounded-none border-0 border-b border-[rgba(245,242,235,0.27)] bg-transparent px-[3px] py-3 font-sans text-[13px] normal-case text-[#f5f2eb] outline-none focus:border-[#c4a46a] [&_option]:text-[#111214] ${className}`.trim()}
      {...props}
    />
  );
}