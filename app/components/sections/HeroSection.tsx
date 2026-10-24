import { ArrowDownRight } from 'lucide-react';
import Reveal from '../Reveal';

const separator = String.fromCharCode(183);

const heroProjects = [
  ['Grand X', `Studio ${separator} 1 Bed ${separator} Commercial`],
  ['Grand 11', `Studio ${separator} 1 Bed ${separator} Commercial`],
  ['Grand 14', `1 Bed ${separator} 2 Bed ${separator} Commercial`],
  ['Grand 15', `1 Bed ${separator} 2 Bed ${separator} 3 Bed ${separator} Commercial`],
];

export default function HeroSection() {
  return (
    <section className="hero modern-hero" id="home">
      <div className="modern-hero-content">
        <Reveal className="modern-eyebrow">
          Luxury living <i>{separator}</i> Bahria Town Lahore
        </Reveal>
        <Reveal delay={0.1}>
          <h1>
            Live where
            <br />
            luxury meets
            <br />
            <em>lifestyle.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2} className="modern-hero-copy">
          Experience unparalleled elegance at Boulevard01. Your dream residence
          awaits in the heart of the city.
        </Reveal>
        <Reveal delay={0.3} className="modern-hero-actions">
          <a className="button button-light" href="#developments">
            Explore Projects <ArrowDownRight size={16} />
          </a>
          <a className="button button-glass" href="#inquiry">
            Book a Tour <ArrowDownRight size={16} />
          </a>
        </Reveal>
        <Reveal delay={0.4} className="hero-metrics">
          <div>
            <strong>9+</strong>
            <span>Years of excellence</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>Units delivered</span>
          </div>
          <div>
            <strong>15</strong>
            <span>Successful projects</span>
          </div>
        </Reveal>
      </div>
      <div className="hero-project-links" aria-label="Featured projects">
        {heroProjects.map(([name, units]) => (
          <a href="#developments" key={name}>
            <b>{name}</b>
            <span>{units}</span>
          </a>
        ))}
      </div>
      <span className="hero-caption">
        BAHRIA TOWN <i>{separator}</i> LAHORE <i>01 / 10</i>
      </span>
    </section>
  );
}
