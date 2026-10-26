import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '../Reveal';
import { buttonVariants } from '../ui/button';

export default function LocationSection() {
  return (
    <section className="location-section section-wrap" id="location">
      <Reveal className="location-copy">
        <span className="eyebrow">07 / FIND US</span>
        <h2>
          On Bahria Town’s
          <br />
          <em>Main Boulevard.</em>
        </h2>
        <p>
          Visit our experience center to witness the future of luxury living.
          Walk through our premium model apartments and discuss investment
          opportunities with our experts.
        </p>
        <div className="location-address">
          <MapPin size={21} />
          <span>
            19A, 4th Floor, Gulmohar Commercial,
            <br />
            Sector C, Bahria Town Lahore.
          </span>
        </div>
        <span className="coordinates">
          31.3747153° N <i>·</i> 74.1856526° E
        </span>
        <a
          className={buttonVariants({ variant: 'navy' })}
          href="https://maps.google.com/?q=31.3747153,74.1856526"
          target="_blank"
          rel="noreferrer"
        >
          Get Directions <ArrowUpRight size={16} />
        </a>
      </Reveal>
      <Reveal
        className="location-map"
        delay={0.12}
        aria-label="Map showing Boulevard in Bahria Town Lahore"
      >
        <div className="map-roads" />
        <span className="map-label map-label-one">GULMOHAR COMMERCIAL</span>
        <span className="map-label map-label-two">BAHRIA TOWN MAIN BLVD</span>
        <span className="map-pin">
          <MapPin size={28} fill="currentColor" />
        </span>
        <span className="map-coordinate">
          31.3747153° N <i>·</i> 74.1856526° E
        </span>
        <span className="map-scale">LAHORE · PAKISTAN</span>
      </Reveal>
    </section>
  );
}
