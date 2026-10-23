'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '../Reveal';
import { developments } from '../../../lib/data';

export default function PortfolioSection() {
  const rail = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const activeIndex = useRef(0);
  const wheelState = useRef({ delta: 0, lockedUntil: 0, resetTimer: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

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
        state.lockedUntil = now + 620;
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
    wheelState.current.lockedUntil = performance.now() + 620;
    wheelState.current.delta = 0;
    goTo(activeIndex.current + direction);
  };

  return (
    <section className="portfolio-section" id="portfolio" ref={section}>
      <div className="section-wrap portfolio-heading">
        <Reveal>
          <span className="eyebrow">05 / THE PORTFOLIO</span>
          <h2>
            Made to stand
            <br />
            <em>above the ordinary.</em>
          </h2>
        </Reveal>
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
          <article className="portfolio-card" key={project.name}>
            <Image
              src={project.image}
              alt={project.alt}
              width={1600}
              height={1100}
              sizes="(max-width: 760px) 88vw, 70vw"
              unoptimized
            />
            <div className="portfolio-shade" />
            <div className="portfolio-meta">
              <span>0{index + 1} / 04</span>
              <span>
                <MapPin size={13} />
                {project.location}
              </span>
            </div>
            <div className="portfolio-title">
              <div>
                <span>{project.status}</span>
                <h3>{project.name}</h3>
                <p>{project.highlight}</p>
              </div>
              <a href="#inquiry" aria-label={`Enquire about ${project.name}`}>
                <ArrowUpRight size={22} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="portfolio-progress section-wrap">
        <span>DRAG TO EXPLORE</span>
        <i />
        <span>FOUR DISTINCT ADDRESSES</span>
      </div>
    </section>
  );
}
