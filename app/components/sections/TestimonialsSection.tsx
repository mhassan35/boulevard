import { Quote, Star } from 'lucide-react';
import Reveal from '../Reveal';
import { Card } from '../ui/card';
import { testimonials } from '../../../lib/data';

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-[110px] pb-[125px] text-[#f5f2eb] max-[640px]:py-[75px]" id="stories">
      <div className="mx-auto w-[min(1240px,calc(100%-48px))] max-[640px]:w-[calc(100%-44px)]">
        <Reveal className="mb-[42px] text-center max-[640px]:mb-[30px]">
          <span className="eyebrow">08 / CLIENT STORIES</span>
          <h2 className="my-[18px_0_14px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-0.045em] text-[#f5f2eb] max-[640px]:text-[43px]">
            What our investors
            <br />
            <em className="not-italic text-[#c4a46a]">say about the journey.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-4 gap-[13px] max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-[10px]">
          {testimonials.map((item, index) => (
            <Reveal
              className="testimonial-reveal"
              key={item.name}
              delay={index * 0.06}
            >
              <Card className="flex min-h-[280px] flex-col p-[22px] transition-[transform,border-color,box-shadow] duration-[240ms] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none max-[640px]:min-h-[220px]">
                <div className="flex items-center justify-between text-[rgba(245,242,235,0.36)]">
                  <span className="flex gap-[3px] text-[#c4a46a]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </span>
                  <Quote size={20} />
                </div>
                <blockquote className="my-6 flex-1 font-serif text-[17px] font-medium leading-[1.55] text-card-foreground max-[640px]:text-[19px]">{item.quote}</blockquote>
                <div className="flex items-center gap-[11px] border-t border-card-border pt-[15px]">
                  <span className="grid size-[38px] place-items-center rounded-full bg-[rgba(196,164,106,0.16)] text-[11px] text-[#c4a46a]">
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div className="grid gap-1">
                    <strong className="text-[11px] text-card-foreground">{item.name}</strong>
                    <small className="text-[8px] text-card-muted">
                      {item.role} · {item.location}
                    </small>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
