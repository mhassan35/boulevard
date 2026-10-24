'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingImage from '../LoadingImage';
import { developments } from '../../../lib/data';

const pageCopy = {
  home: { id: 'portfolio', eyebrow: 'THE PORTFOLIO' },
  about: { id: 'about-portfolio', eyebrow: 'SELECTED DEVELOPMENTS' },
  projects: { id: 'projects-gallery', eyebrow: 'THE BOULEVARD COLLECTION' },
} as const;

type PortfolioSectionProps = {
  variant?: keyof typeof pageCopy;
};

const slides = [...developments].reverse();

export default function PortfolioSection({ variant = 'home' }: PortfolioSectionProps) {
  const copy = pageCopy[variant];
  const section = useRef<HTMLElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const activeIndex = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageStates, setImageStates] = useState<Record<string, "loading" | "loaded" | "error">>({});

  const goTo = useCallback((index: number) => {
    const element = section.current;
    if (!element) return;

    const target = Math.max(0, Math.min(index, slides.length - 1));
    const instance = trigger.current;
    const top = instance
      ? instance.start + ((instance.end - instance.start) * target) / (slides.length - 1)
      : element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }, []);


  useEffect(() => {
    const element = section.current;
    if (!element) return;

    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card', element);
    if (!cards.length) return;

    const context = gsap.context(() => {
      gsap.set(cards, { autoAlpha: 0 });
      gsap.set(cards[0], { autoAlpha: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: () => `+=${window.innerHeight * (slides.length - 1)}`,
          scrub: true,
          snap: {
            snapTo: 'labelsDirectional',
            delay: 0.03,
            duration: { min: 0.15, max: 0.35 },
            ease: 'power2.inOut',
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (slides.length - 1));
            if (index !== activeIndex.current) {
              activeIndex.current = index;
              setCurrentIndex(index);
            }
          },
        },
      });


      trigger.current = timeline.scrollTrigger ?? null;
      timeline.addLabel('slide-01', 0);
      cards.slice(1).forEach((card, offset) => {
        const index = offset + 1;
        timeline
          .to(cards[index - 1], { autoAlpha: 0, duration: 1 }, offset)
          .fromTo(card, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, offset)
          .addLabel(`slide-${String(index + 1).padStart(2, '0')}`, index);
      });

    }, element);

    return () => {
      trigger.current = null;
      context.revert();
    };
  }, []);

  return (
    <section
      className={`portfolio-section image-scroller image-scroller--${variant}`}
      id={copy.id}
      aria-label="Boulevard developments"
      ref={section}
    >
      <div className="portfolio-heading">
        <span className="portfolio-label">{copy.eyebrow}</span>
      </div>
      <div className="portfolio-rail">
        {slides.map((project, index) => (
          <article className="portfolio-card" key={project.slug} aria-hidden={currentIndex !== index}>
            <div className="portfolio-image-motion">
              <LoadingImage
                src={project.image}
                alt={project.alt}
                width={1920}
                height={1080}
                sizes="100vw"
                loading="eager"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                unoptimized
                onLoad={() => setImageStates((states) => ({ ...states, [project.slug]: "loaded" }))}
                onError={() => setImageStates((states) => ({ ...states, [project.slug]: "error" }))}
              />
            </div>
            <div className="portfolio-shade" />
            {imageStates[project.slug] !== "loaded" && (
              <div className="portfolio-image-state" role="status">
                {imageStates[project.slug] === "error" ? (
                  <span>Image unavailable</span>
                ) : (
                  <><i aria-hidden="true" />Loading image</>
                )}
              </div>
            )}
            <div className="portfolio-meta">
              <div className="portfolio-location-list">
                {slides.map((locationProject, locationIndex) => (
                  <span
                    className={"portfolio-location" + (currentIndex === locationIndex ? " is-current" : "")}
                    key={locationProject.slug}
                  >
                    {locationProject.location}
                  </span>
                ))}
              </div>
            </div>
            <div className="portfolio-title">
              <div>
                <h3>{project.name}</h3><p>{project.highlight}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="portfolio-progress section-wrap">
        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
        <i aria-hidden="true">
          <b />
        </i>
        <span>{String(slides.length).padStart(2, '0')}</span>
        <small>SCROLL TO EXPLORE</small>
      </div>
    </section>
  );
}
