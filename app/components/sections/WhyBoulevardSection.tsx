import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import { buttonVariants } from '../ui/button';
import { Card } from '../ui/card';
import { reasons } from '../../../lib/data';

export default function WhyBoulevardSection() {
  return (
    <section className="relative overflow-hidden bg-black py-[120px] text-[#f5f2eb] max-[640px]:py-20" id="why-boulevard">
      <div className="pointer-events-none absolute -right-[3%] -bottom-[20%] overflow-hidden text-[clamp(200px,36vw,520px)] leading-[0.8] tracking-[-0.1em] text-[rgba(255,255,255,0.025)] font-bold" aria-hidden="true">
        B/01
      </div>
      <div className="relative mx-auto grid w-[min(1240px,calc(100%-48px))] grid-cols-[0.8fr_1.2fr] items-center gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-[45px] max-[640px]:w-[calc(100%-44px)] max-[640px]:gap-8">
        <Reveal className="relative max-[900px]:max-w-[620px]">
          <span className="eyebrow">03 / WHY BOULEVARD01</span>
          <h2 className="my-[18px_0_14px] text-[clamp(52px,6vw,82px)] leading-[1.02] tracking-[-0.045em] text-[#f5f2eb] max-[640px]:text-[43px]">
            Engineered
            <br />
            for <em className="not-italic text-[#c4a46a]">returns.</em>
          </h2>
          <p className="max-w-[620px] text-[15px] leading-[1.85] text-[rgba(245,242,235,0.72)]">
            Built on local knowledge, delivered with care, and designed to hold
            value for generations.
          </p>
          <a className={buttonVariants({ variant: 'light', className: 'mt-[15px]' })} href="#inquiry">
            See the numbers for yourself <ArrowRight size={16} />
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
          {reasons.map((reason, index) => (
            <Reveal
              className="reason-reveal"
              key={reason.title}
              delay={index * 0.06}
            >
              <Card className="min-h-[155px] p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none max-[640px]:min-h-0">
                <span className="text-[25px] font-bold text-[rgba(196,164,106,0.55)]">0{index + 1}</span>
                <h3 className="my-2 text-[15px] font-medium text-[#f5f2eb]">{reason.title}</h3>
                <p className="m-0 text-[11px] leading-[1.6] text-card-muted">{reason.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
