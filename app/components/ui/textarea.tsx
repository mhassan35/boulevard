import type { TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={`w-full resize-y rounded-none border-0 border-b border-[rgba(245,242,235,0.27)] bg-transparent px-[3px] py-3 font-sans text-[13px] normal-case text-[#f5f2eb] outline-none placeholder:text-[#f5f2eb]/50 focus:border-[#c4a46a] ${className}`.trim()}
      {...props}
    />
  );
}