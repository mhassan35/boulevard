import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import { buttonVariants } from '../ui/button';

export default function ClosingSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-black px-6 pt-[120px] pb-[110px] text-center text-[#f5f2eb] max-[640px]:py-[85px]" id="contact">
        <div className="pointer-events-none absolute -right-[4%] -bottom-[25%] whitespace-nowrap text-[clamp(150px,26vw,360px)] font-bold tracking-[-0.08em] text-[rgba(255,255,255,0.025)]" aria-hidden="true">
          BOULEVARD
        </div>
        <Reveal className="relative mx-auto max-w-[900px]">
          <span className="eyebrow">09 / START YOUR JOURNEY</span>
          <h2 className="my-[18px_0_14px] text-[clamp(42px,6vw,76px)] leading-[1.02] tracking-[-0.045em] max-[640px]:text-[43px]">
            Ready to explore your
            <br />
            <em className="not-italic text-[#c4a46a]">next boulevard01 investment?</em>
          </h2>
          <p className="mx-auto my-5 max-w-[700px] text-[15px] leading-[1.85] text-[rgba(245,242,235,0.7)]">
            Speak with boulevard01 today and get project details, availability,
            and investment opportunities tailored to your goals.
          </p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-3 max-[640px]:flex-col max-[640px]:items-stretch">
            <a className={buttonVariants({ variant: 'light', className: 'max-[640px]:w-full' })} href="#inquiry">
              Book Free Consultation <ArrowRight size={17} />
            </a>
            <a
              className={buttonVariants({ variant: 'glass', className: 'max-[640px]:w-full' })}
              href="https://wa.me/923234396956"
            >
              WhatsApp +92 323 4396956 <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
