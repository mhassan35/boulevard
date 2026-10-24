'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import LoadingImage from '../LoadingImage';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { developments } from '../../../lib/data';

const pageCopy = {
  home: {
    id: 'portfolio',
    eyebrow: 'THE PORTFOLIO',
  },
  about: {
    id: 'about-portfolio',
    eyebrow: 'SELECTED DEVELOPMENTS',
  },
  projects: {
    id: 'projects-gallery',
    eyebrow: 'THE BOULEVARD COLLECTION',
  },
} as const;

type PortfolioSectionProps = {
  variant?: keyof typeof pageCopy;
};

export default function PortfolioSection({ variant = 'home' }: PortfolioSectionProps) {
  const copy = pageCopy[variant];
  const rail = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const activeIndex = useRef(0);
  const wheelState = useRef({ delta: 0, lockedUntil: 0, resetTimer: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollXProgress } = useScroll({ container: rail, axis: 'x' });
  const imageY = useTransform(
    scrollXProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-12, 12],
  );
  const imageScale = useTransform(
    scrollXProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.035, 1.05],
  );

  const goTo = useCallback((index: number) => {
    const viewport = rail.current;
    if (!viewport) return;

    const slides = Array.from(
      viewport.querySelectorAll<HTMLElement>('.portfolio-card'),
    );
    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slide = slides[nextIndex];
    if (!slide) return;

    const viewportCenter =
      viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
    const slideCenter =
      slide.getBoundingClientRect().left + slide.clientWidth / 2;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    activeIndex.current = nextIndex;
    setCurrentIndex(nextIndex);
    viewport.scrollTo({
      left: viewport.scrollLeft + slideCenter - viewportCenter,
      behavior: reduceMotion ? 'instant' : 'smooth',
    });
  }, []);

  useEffect(() => {
    const viewport = rail.current;
    const sectionElement = section.current;
    if (!viewport || !sectionElement) return;

    const state = wheelState.current;
    let animationFrame = 0;
    const slides = () =>
      Array.from(viewport.querySelectorAll<HTMLElement>('.portfolio-card'));

    const syncIndex = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const center =
          viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
        const closestIndex = slides().reduce(
          (closest, slide, index, allSlides) => {
            const slideCenter =
              slide.getBoundingClientRect().left + slide.clientWidth / 2;
            const closestCenter =
              allSlides[closest].getBoundingClientRect().left +
              allSlides[closest].clientWidth / 2;
            return Math.abs(slideCenter - center) <
              Math.abs(closestCenter - center)
              ? index
              : closest;
          },
          0,
        );

        activeIndex.current = closestIndex;
        setCurrentIndex(closestIndex);
      });
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY))
        return;

      const bounds = sectionElement.getBoundingClientRect();
      if (bounds.top >= window.innerHeight || bounds.bottom <= 0) return;

      const multiplier =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? window.innerHeight
            : 1;
      const wheelDelta = event.deltaY * multiplier;
      if (Math.abs(wheelDelta) < 1) return;

      const direction = wheelDelta > 0 ? 1 : -1;
      const targetIndex = activeIndex.current + direction;
      if (targetIndex < 0 || targetIndex >= slides().length) return;

      event.preventDefault();
      const now = performance.now();
      if (now < state.lockedUntil) return;

      state.delta += wheelDelta;
      window.clearTimeout(state.resetTimer);
      state.resetTimer = window.setTimeout(() => {
        state.delta = 0;
      }, 180);

      if (Math.abs(state.delta) >= 42) {
        state.delta = 0;
        state.lockedUntil = now + 760;
        goTo(targetIndex);
      }
    };

    viewport.addEventListener('scroll', syncIndex, { passive: true });
    sectionElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(state.resetTimer);
      viewport.removeEventListener('scroll', syncIndex);
      sectionElement.removeEventListener('wheel', handleWheel);
    };
  }, [goTo]);

  const move = (direction: number) => {
    wheelState.current.lockedUntil = performance.now() + 760;
    wheelState.current.delta = 0;
    goTo(activeIndex.current + direction);
  };

  return (
    <section
      className={`portfolio-section image-scroller image-scroller--${variant}`}
      id={copy.id}
      ref={section}
    >
      <div className="portfolio-heading">
        <span className="portfolio-label">{copy.eyebrow}</span>
        <div className="carousel-controls">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => move(-1)}
            disabled={currentIndex === 0}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => move(1)}
            disabled={currentIndex === developments.length - 1}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div
        className="portfolio-rail"
        ref={rail}
        aria-label="Boulevard developments"
        tabIndex={0}
      >
        {developments.map((project, index) => (
          <motion.article
            className={`portfolio-card${currentIndex === index ? ' is-current' : ''}`}
            key={project.name}
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="portfolio-image-motion"
              style={{ y: imageY, scale: imageScale }}
            >
              <LoadingImage
                src={project.image}
                alt={project.alt}
                width={1600}
                height={1100}
                sizes="100vw"
                unoptimized
              />
            </motion.div>
            <div className="portfolio-shade" />
            <div className="portfolio-meta">
              <div className="portfolio-meta-side portfolio-meta-left">
                <span>
                  <MapPin size={13} /> LOCATION
                </span>
                <strong>{project.location}</strong>
              </div>
              <div className="portfolio-meta-side portfolio-meta-right">
                <span>{project.status}</span>
                <strong>{project.units.join(' · ')}</strong>
              </div>
            </div>
            <div className="portfolio-title">
              <div>
                <span>
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(developments.length).padStart(2, '0')}
                </span>
                <h3>{project.name}</h3>
                <p>{project.highlight}</p>
              </div>
              <a
                href={variant === 'home' ? '#inquiry' : `/projects#${project.slug}`}
                aria-label={`Explore ${project.name}`}
              >
                Explore project <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="portfolio-progress section-wrap">
        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
        <i aria-hidden="true">
          <b style={{ width: `${((currentIndex + 1) / developments.length) * 100}%` }} />
        </i>
        <span>{String(developments.length).padStart(2, '0')}</span>
        <small>SCROLL OR DRAG</small>
      </div>
    </section>
  );
}
