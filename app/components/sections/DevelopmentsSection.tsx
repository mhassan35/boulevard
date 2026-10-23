import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '../Reveal';
import { developments } from '../../../lib/data';

export default function DevelopmentsSection() {
  return (
    <section className="developments-section section-wrap" id="developments">
      <Reveal className="section-intro">
        <span className="eyebrow">02 / OUR DEVELOPMENTS</span>
        <h2>
          Four addresses
          <br />
          <em>built to appreciate.</em>
        </h2>
        <p>
          Distinctive places to live, work, and invest in Bahria Town Lahore.
        </p>
      </Reveal>
      <div className="development-grid">
        {developments.map((project, index) => (
          <Reveal
            className="development-card"
            id={project.slug}
            key={project.name}
            delay={index * 0.07}
          >
            <Link
              href={`/projects#${project.slug}`}
              className="development-image-link"
              aria-label={`View ${project.name}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={1200}
                height={800}
                sizes="(max-width: 760px) 92vw, 45vw"
                unoptimized
              />
              <span className="status-pill">{project.status}</span>
              <span className="image-location">
                <MapPin size={14} />
                {project.location}
              </span>
              <span className="development-arrow">
                <ArrowUpRight size={18} />
              </span>
            </Link>
            <div className="development-copy">
              <span className="project-number">0{index + 1} / DEVELOPMENT</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="unit-tags">
                {project.units.map((unit) => (
                  <span key={unit}>{unit}</span>
                ))}
              </div>
              <Link className="text-link" href={`/projects#${project.slug}`}>
                Explore {project.name}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
