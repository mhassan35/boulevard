import type { Metadata } from 'next';
import LoadingImage from '../components/LoadingImage';
import Link from 'next/link';
import { ArrowRight, Compass, Eye, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import { Card } from '../components/ui/card';
import { developments } from '../../lib/data';

export const metadata: Metadata = {
  title: 'About Boulevard01 | Building Trust, Shaping Skylines',
  description:
    'Discover Boulevard01’s story, milestones, mission, and development philosophy.',
};

const philosophy = [
  [
    'Quality Construction',
    'Every building is engineered with premium materials and rigorous on-site quality control.',
  ],
  [
    'Strategic Locations',
    'Prime addresses with proven appreciation, rental demand, and long-term value.',
  ],
  [
    'Modern Architecture',
    'Contemporary design creates enduring visual appeal and efficient spaces.',
  ],
  [
    'Transparent Dealings',
    'Clear pricing, honest timelines, and straightforward agreements.',
  ],
  [
    'Long-Term Value',
    'Projects are positioned for appreciation and sustainable portfolio growth.',
  ],
  [
    'Customer First',
    'A considered process from first conversation through handover.',
  ],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <Reveal className="about-hero-copy">
            <span className="eyebrow">ABOUT · BOULEVARD01</span>
            <h1>
              Building Trust.
              <br />
              Shaping Skylines.
            </h1>
            <p>
              Boulevard01 creates modern residential and commercial destinations
              built around quality, innovation, strategic locations, and on-time
              delivery.
            </p>
            <div className="about-actions">
              <Link className="button button-dark" href="/projects">
                Explore Our Projects <ArrowRight size={16} />
              </Link>
              <a className="button button-outline" href="#our-team">
                Meet the Team
              </a>
            </div>
          </Reveal>

          <Reveal className="about-hero-art" delay={0.12}>
            <span className="about-stamp about-stamp-top">EST. 2011</span>
            <LoadingImage
              shellClassName="about-primary-photo"
              src={developments[3].image}
              alt="Boulevard01 Grand 15 residential tower"
              width={900}
              height={620}
              unoptimized
              priority
            />
            <div className="about-inset-image">
              <LoadingImage
                shellClassName="about-inset-photo"
                src={developments[0].image}
                alt="Boulevard01 Grand X mixed-use development"
                width={440}
                height={330}
                unoptimized
              />
              <span className="about-photo-caption">GRAND X · LAHORE</span>
            </div>
            <span className="about-stamp about-stamp-bottom">
              500+ UNITS DELIVERED
            </span>
          </Reveal>
        </div>
      </section>

      <section className="about-journey" id="our-journey">
        <div className="about-journey-inner section-wrap">
          <Reveal className="about-journey-title">
            <span className="eyebrow">OUR JOURNEY</span>
            <h2>A decade of building what lasts.</h2>
          </Reveal>
          <Reveal className="about-journey-copy" delay={0.1}>
            <p>
              Boulevard01 was founded with a singular vision — to redefine
              Pakistan’s real estate sector through quality, transparency, and
              trust.
            </p>
            <p>
              From early developments to high-rise residential and mixed-use
              destinations, our work continues to create enduring value across
              Bahria Town Lahore and Islamabad.
            </p>
          </Reveal>
          <span className="about-year-mark" aria-hidden="true">
            2011—2026
          </span>
        </div>
      </section>

      <section className="about-milestones">
        <div className="section-wrap">
          <Reveal className="about-section-heading">
            <span className="eyebrow">MILESTONES</span>
            <h2>The path to prominence.</h2>
          </Reveal>
          <div className="about-timeline">
            <Reveal className="about-milestone-reveal">
              <Card className="about-milestone">
                <div>
                  <span>2011 — 2016</span>
                  <h3>LAYING THE FOUNDATION</h3>
                  <p>
                    Boulevard01 established its delivery record and earned the
                    confidence of investors through quality, transparency, and
                    trust.
                  </p>
                </div>
                <LoadingImage
                  src={developments[1].image}
                  alt="A Boulevard01 development at dusk"
                  width={800}
                  height={520}
                  unoptimized
                />
              </Card>
            </Reveal>
            <Reveal
              className="about-milestone-reveal"
              delay={0.08}
            >
              <Card className="about-milestone about-milestone-reverse">
                <LoadingImage
                  src={developments[2].image}
                  alt="Contemporary Boulevard01 residential architecture"
                  width={800}
                  height={520}
                  unoptimized
                />
                <div>
                  <span>2017 — 2026</span>
                  <h3>SHAPING THE SKYLINE</h3>
                  <p>
                    Our ambition grew into smartly planned towers with
                    contemporary architecture, efficient layouts, and strong
                    investment value.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-stats" aria-label="Boulevard01 at a glance">
        <div className="about-stats-inner section-wrap">
          {[
            ['9+', 'YEARS OF EXCELLENCE'],
            ['500+', 'UNITS DELIVERED'],
            ['15', 'SUCCESSFUL PROJECTS'],
            ['100%', 'ON-TIME DELIVERY'],
          ].map(([value, label]) => (
            <Card className="about-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="about-purpose section-wrap">
        <Reveal className="about-purpose-reveal">
          <Card className="about-purpose-card">
            <span className="about-card-index">01</span>
            <Compass aria-hidden="true" />
            <span className="eyebrow">OUR MISSION</span>
            <p>
              To create thoughtfully designed developments that combine quality
              construction, strategic locations, transparent dealings, and lasting
              investment value.
            </p>
          </Card>
        </Reveal>
        <Reveal className="about-purpose-reveal" delay={0.1}>
          <Card className="about-purpose-card">
            <span className="about-card-index">02</span>
            <Eye aria-hidden="true" />
            <span className="eyebrow">OUR VISION</span>
            <p>
              To shape destinations that elevate lifestyles, strengthen
              communities, and create enduring value for generations.
            </p>
          </Card>
        </Reveal>
      </section>

      <section className="about-philosophy">
        <div className="section-wrap">
          <Reveal className="about-section-heading">
            <span className="eyebrow">WHAT WE STAND FOR</span>
            <h2>Our development philosophy.</h2>
          </Reveal>
          <div className="about-philosophy-grid">
            {philosophy.map(([title, text], index) => (
              <Reveal
                className="about-philosophy-reveal"
                key={title}
                delay={index * 0.035}
              >
                <Card className="about-philosophy-item">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team section-wrap" id="our-team">
        <Reveal className="about-team-title">
          <span className="eyebrow">THE PEOPLE BEHIND THE PROMISE</span>
          <h2>A team built around trust.</h2>
        </Reveal>
        <Reveal className="about-founder-reveal" delay={0.08}>
          <Card className="about-founder-card">
            <LoadingImage
              src="https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/ceo.jpg"
              alt="Boulevard01 founder in a modern office"
              width={720}
              height={900}
              unoptimized
            />
            <div>
              <span>CEO & FOUNDER</span>
              <h3>M. Hammad Shams</h3>
            </div>
          </Card>
        </Reveal>
        <Reveal className="about-team-note-reveal" delay={0.14}>
          <Card className="about-team-note">
            <span className="about-team-monogram">B01</span>
            <span className="eyebrow">BOULEVARD01</span>
            <h3>Built by people who deliver.</h3>
            <p>
              Our teams bring together development, design, sales, and client care
              around one promise.
            </p>
          </Card>
        </Reveal>
      </section>

      <section className="about-featured-project">
        <div className="about-featured-inner section-wrap">
          <Reveal className="about-featured-copy">
            <span className="eyebrow">SELECTED PORTFOLIO</span>
            <h2>Grand 11</h2>
            <span className="about-status">NOW SELLING</span>
            <p>
              A prominent commercial and residential development near Talwar
              Chowk and Bahria Town’s main entrance.
            </p>
            <span className="about-location">
              <MapPin size={15} /> Midway Commercial, Bahria Town Lahore
            </span>
            <Link className="text-link" href="/projects#grand-11">
              Discover Grand 11 <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal className="about-featured-image" delay={0.1}>
            <LoadingImage
              src={developments[1].image}
              alt="Grand 11 at Bahria Town Lahore"
              width={1200}
              height={800}
              unoptimized
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
