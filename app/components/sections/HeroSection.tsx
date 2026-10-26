import { ArrowDownRight } from 'lucide-react';
import Reveal from '../Reveal';
import { buttonVariants } from '../ui/button';

const separator = String.fromCharCode(183);

const heroProjects = [
  ['Grand X', `Studio ${separator} 1 Bed ${separator} Commercial`],
  ['Grand 11', `Studio ${separator} 1 Bed ${separator} Commercial`],
  ['Grand 14', `1 Bed ${separator} 2 Bed ${separator} Commercial`],
  ['Grand 15', `1 Bed ${separator} 2 Bed ${separator} 3 Bed ${separator} Commercial`],
];

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[680px] h-[100svh] overflow-hidden bg-[#101b2e] text-white max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-[max(100svh,820px)] max-[900px]:items-center max-[900px]:justify-center max-[900px]:px-[22px] max-[900px]:pt-[100px] max-[900px]:pb-[235px] max-[640px]:pt-[88px]" id="home">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(7,9,13,0.44),rgba(7,9,13,0.44)),radial-gradient(ellipse_at_center,transparent_32%,rgba(5,7,11,0.3)_100%),linear-gradient(90deg,rgba(7,9,13,0.82)_0%,rgba(8,10,14,0.46)_38%,rgba(8,10,14,0.06)_82%),linear-gradient(0deg,rgba(8,9,11,0.5),transparent_54%),linear-gradient(180deg,rgba(10,16,26,0.14),transparent_36%),url(https://www.landmarkdevelopers.com.pk/images/grand-15-1.jpg)] bg-[position:center,center,center,center,center,56%_48%] bg-cover" aria-hidden="true" />
      <div className="absolute left-1/2 top-[calc(50%+clamp(34px,4.5vh,46px))] z-[1] flex w-[min(960px,calc(100%-48px))] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center min-[901px]:max-[1200px]:left-[42%] min-[901px]:max-[1200px]:w-[min(760px,calc(100%-280px))] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:my-auto max-[900px]:w-full max-[900px]:translate-x-0 max-[900px]:translate-y-0">
        <Reveal className="flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#f5f2eb]">
          Luxury living <i className="px-[5px] not-italic text-[#c4a46a]">{separator}</i> Bahria Town Lahore
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-[27px] mb-[18px] text-[clamp(38px,calc(4vw+20px),84px)] font-semibold leading-[1.02] tracking-[-0.065em] text-[#f5f2eb] max-[900px]:text-[clamp(48px,10vw,68px)] max-[640px]:mt-[20px] max-[640px]:mb-[14px] max-[640px]:text-[clamp(48px,11vw,62px)]">
            Live where
            <br />
            luxury meets
            <br />
            <em className="font-serif font-medium not-italic text-[#c4a46a]">lifestyle.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2} className="mx-auto max-w-[500px] text-[15px] leading-[1.8] text-white/85 max-[900px]:text-[13px]">
          Experience unparalleled elegance at Boulevard01. Your dream residence
          awaits in the heart of the city.
        </Reveal>
        <Reveal delay={0.3} className="mt-[25px] flex flex-wrap justify-center gap-3 max-[640px]:mt-[21px] max-[640px]:gap-[9px]">
          <a className={buttonVariants({ variant: 'light', className: 'motion-safe:animate-[hero-button-shadow_3s_ease-in-out_infinite]' })} href="#developments">
            Explore Projects <ArrowDownRight size={16} />
          </a>
          <a className={buttonVariants({ variant: 'glass', className: 'motion-safe:animate-[hero-button-shadow_3s_ease-in-out_0.45s_infinite]' })} href="#inquiry">
            Book a Tour <ArrowDownRight size={16} />
          </a>
        </Reveal>
        <Reveal delay={0.4} className="mt-[38px] flex flex-wrap justify-center gap-[34px] text-center max-[900px]:mt-7 max-[900px]:gap-[19px]">
          <div className="grid justify-items-center gap-[5px]">
            <strong className="font-serif text-[28px] font-semibold text-[#c4a46a] max-[900px]:text-2xl">9+</strong>
            <span className="text-[9px] uppercase tracking-[0.08em] text-white/80 max-[900px]:max-w-[95px] max-[900px]:text-[7px] max-[900px]:leading-[1.5]">Years of excellence</span>
          </div>
          <div className="grid justify-items-center gap-[5px]">
            <strong className="font-serif text-[28px] font-semibold text-[#c4a46a] max-[900px]:text-2xl">500+</strong>
            <span className="text-[9px] uppercase tracking-[0.08em] text-white/80 max-[900px]:max-w-[95px] max-[900px]:text-[7px] max-[900px]:leading-[1.5]">Units delivered</span>
          </div>
          <div className="grid justify-items-center gap-[5px]">
            <strong className="font-serif text-[28px] font-semibold text-[#c4a46a] max-[900px]:text-2xl">15</strong>
            <span className="text-[9px] uppercase tracking-[0.08em] text-white/80 max-[900px]:max-w-[95px] max-[900px]:text-[7px] max-[900px]:leading-[1.5]">Successful projects</span>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-5 right-6 z-[1] grid w-[min(220px,20%)] rounded-xl border border-[#dce2e8]/20 bg-[#080c12]/50 px-4 py-[5px] text-[#f5f2eb] backdrop-blur-[12px] max-[900px]:bottom-[65px] max-[900px]:left-[22px] max-[900px]:right-[22px] max-[900px]:w-auto max-[900px]:grid-cols-2 max-[900px]:gap-x-[clamp(10px,4vw,20px)] max-[900px]:px-3" aria-label="Featured projects">
        {heroProjects.map(([name, units]) => (
          <a href="#developments" key={name} className="flex justify-between gap-3 border-b border-[#dce2e8]/15 py-3 text-[#f5f2eb] last:border-b-0 max-[900px]:grid max-[900px]:min-w-0 max-[900px]:gap-1">
            <b className="text-[13px] text-[#e2c27f] max-[900px]:text-[clamp(10px,2.8vw,12px)]">{name}</b>
            <span className="text-right text-[9px] text-[#f5f2eb]/80 max-[900px]:text-left max-[900px]:text-[clamp(7px,2vw,8px)] max-[900px]:leading-[1.45]">{units}</span>
          </a>
        ))}
      </div>
      <span className="absolute bottom-[30px] left-6 z-[1] flex gap-2 text-[9px] tracking-[0.15em] text-white/70 max-[900px]:bottom-[25px] max-[900px]:left-[22px] max-[900px]:text-[8px]">
        BAHRIA TOWN <i className="not-italic text-[#c4a46a]">{separator}</i> LAHORE <i className="not-italic text-[#c4a46a]">01 / 10</i>
      </span>
    </section>
  );
}
