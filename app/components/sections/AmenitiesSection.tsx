import {
  Building2,
  Dumbbell,
  Gamepad2,
  HeartPulse,
  House,
  Sparkles,
  Waves,
  Wind,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '../Reveal';
import { Card } from '../ui/card';

const icons: LucideIcon[] = [
  Sparkles,
  House,
  Gamepad2,
  Dumbbell,
  Wind,
  Building2,
  HeartPulse,
  Waves,
];
const amenities = [
  'Housekeeping',
  'Daycare',
  'Gaming Zone',
  'Gym',
  'High-Speed Lifts',
  'Rooftop Garden',
  'Spa',
  'Swimming Pool',
];

type AmenitiesSectionProps = { variant: 'home' | 'projects' };

export default function AmenitiesSection({ variant }: AmenitiesSectionProps) {
  const isHome = variant === 'home';
  return (
    <section className="mx-auto w-[min(1240px,calc(100%-48px))] py-[120px] pb-[135px] max-[640px]:w-[calc(100%-44px)] max-[640px]:py-[75px]" id="amenities">
      <Reveal className="mb-[52px] text-center max-[640px]:mb-8">
        <span className="eyebrow">04 / THE LIFESTYLE</span>
        <h2 className="my-[18px_0_14px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-0.045em] text-[#f5f2eb] max-[640px]:text-[43px]">
          Amenities worth
          <br />
          <em className="not-italic text-[#c4a46a]">coming home to.</em>
        </h2>
        <p className="mx-auto max-w-[620px] text-[15px] leading-[1.85] text-[rgba(245,242,235,0.68)]">
          Every Boulevard01 address is designed around comfort, wellness, and
          convenience.
        </p>
      </Reveal>
      <div className="grid grid-cols-4 gap-3 max-[900px]:grid-cols-2 max-[640px]:gap-2">
        {amenities.map((amenity, index) => {
          const Icon = icons[index];
          return (
            <Reveal className="amenity-reveal" key={amenity} delay={index * 0.04}>
              <Card className="relative flex min-h-[120px] items-center gap-[14px] p-[18px] text-[13px] text-card-foreground transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 max-[640px]:min-h-[94px] max-[640px]:gap-[9px] max-[640px]:p-[12px_9px] max-[640px]:text-[10px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                <span className={isHome ? "grid size-[42px] flex-none place-items-center rounded-xl border border-[rgba(205,218,240,0.17)] bg-[rgba(16,27,46,0.78)] text-[#f5f2eb] max-[640px]:size-[34px]" : "grid size-[42px] flex-none place-items-center rounded-xl bg-[rgba(196,164,106,0.14)] text-[#c4a46a] max-[640px]:size-[34px]"}>
                  <Icon className="max-[640px]:w-4" size={19} strokeWidth={1.5} />
                </span>
                <span>{amenity}</span>
                <span className="absolute top-3 right-[13px] text-[8px] tracking-[0.1em] text-[rgba(245,242,235,0.44)] max-[640px]:top-[7px] max-[640px]:right-2 max-[640px]:text-[7px]">0{index + 1}</span>
              </Card>
            </Reveal>
          );
        })}
      </div>
      <div className={isHome ? "mt-[35px] flex items-center justify-center gap-[15px] text-[8px] tracking-[0.16em] text-[rgba(245,242,235,0.56)] max-[640px]:gap-2 max-[640px]:text-[6px]" : "mt-[35px] flex items-center justify-center gap-[15px] text-[8px] tracking-[0.16em] text-card-muted max-[640px]:gap-2 max-[640px]:text-[6px]"}>
        <span>EVERYDAY, ELEVATED</span>
        <i className="h-px w-10 bg-[#c4a46a] max-[640px]:w-[22px]" />
        <span>MADE FOR THE WAY YOU LIVE</span>
      </div>
    </section>
  );
}
