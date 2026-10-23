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

export default function AmenitiesSection() {
  return (
    <section className="amenities-section section-wrap" id="amenities">
      <Reveal className="section-intro amenities-intro">
        <span className="eyebrow">04 / THE LIFESTYLE</span>
        <h2>
          Amenities worth
          <br />
          <em>coming home to.</em>
        </h2>
        <p>
          Every Boulevard01 address is designed around comfort, wellness, and
          convenience.
        </p>
      </Reveal>
      <div className="amenities-grid">
        {amenities.map((amenity, index) => {
          const Icon = icons[index];
          return (
            <Reveal className="amenity-tile" key={amenity} delay={index * 0.04}>
              <span className="amenity-icon">
                <Icon size={19} strokeWidth={1.5} />
              </span>
              <span>{amenity}</span>
              <span className="amenity-index">0{index + 1}</span>
            </Reveal>
          );
        })}
      </div>
      <div className="amenities-note">
        <span>EVERYDAY, ELEVATED</span>
        <i />
        <span>MADE FOR THE WAY YOU LIVE</span>
      </div>
    </section>
  );
}
