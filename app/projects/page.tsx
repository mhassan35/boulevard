import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import AmenitiesSection from '../components/sections/AmenitiesSection';
import DevelopmentsSection from '../components/sections/DevelopmentsSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import WhyBoulevardSection from '../components/sections/WhyBoulevardSection';
import Reveal from '../components/Reveal';
import { Card } from '../components/ui/card';
import { buttonVariants } from '../components/ui/button';
import { developments } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Projects | Boulevard01',
  description:
    'Explore Boulevard01 residential and commercial developments in Bahria Town Lahore.',
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <header className="projects-page-hero">
        <div className="projects-hero-panel">
          <div className="projects-hero-copy">
            <span className="eyebrow">THE BOULEVARD COLLECTION</span>
            <h1>
              Spaces for living.
              <br />
              <em>Places to appreciate.</em>
            </h1>
            <p>
              Explore distinctive residential and commercial destinations
              shaped around modern city life and lasting value.
            </p>
            <Link href="/#inquiry" className={buttonVariants({ variant: 'dark', size: 'large' })}>
              Plan a private tour <ArrowDownRight size={16} />
            </Link>
          </div>
          <span className="projects-hero-index" aria-hidden="true">
            B / 01
          </span>
        </div>
      </header>
      <section className="projects-overview section-wrap" aria-labelledby="projects-overview-title">
        <Reveal className="projects-overview-heading">
          <span className="eyebrow">A COLLECTION WITH PURPOSE</span>
          <h2 id="projects-overview-title">
            More than an address.
            <br />
            <em>A place to move forward.</em>
          </h2>
          <p>
            Discover thoughtfully planned spaces for living, business, and
            long-term investment across Bahria Town Lahore.
          </p>
        </Reveal>
        <div className="projects-overview-grid">
          {[
            {
              number: '01',
              title: 'Considered living',
              description:
                'Well-planned apartments with contemporary design, everyday comforts, and room to make your own.',
              detail: `${developments.length} distinctive developments`,
            },
            {
              number: '02',
              title: 'Connected commerce',
              description:
                'Visible commercial opportunities in established destinations designed to bring people together.',
              detail: 'Retail · offices · mixed-use',
            },
            {
              number: '03',
              title: 'Built for the future',
              description:
                'Quality-led projects, trusted locations, and a clear focus on enduring value through every stage.',
              detail: 'A legacy since 2011',
            },
          ].map((item, index) => (
            <Reveal
              className="projects-overview-reveal"
              key={item.number}
              delay={index * 0.08}
            >
              <Card className="projects-overview-card">
                <span className="projects-overview-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="projects-overview-detail">{item.detail}</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
      <PortfolioSection variant="projects" />
      <DevelopmentsSection />
      <WhyBoulevardSection />
      <AmenitiesSection variant="projects" />
    </main>
  );
}
